"""Make a cutaway GLB: remove the half of the model facing the default
model-viewer camera (+Z) and fill the cut faces in Hydrogen Periwinkle (#BFB3FF)."""
import sys
import numpy as np
import trimesh

src, dst = sys.argv[1], sys.argv[2]
# Optional plane offset as a fraction of the depth from the centre (-0.5..0.5).
frac = float(sys.argv[3]) if len(sys.argv) > 3 else 0.0

scene = trimesh.load(src, force="scene")
lo, hi = scene.bounds
origin = (lo + hi) / 2
origin[2] += frac * (hi[2] - lo[2])
normal = np.array([0.0, 0.0, -1.0])  # keep the far half
eps = 1e-6 * np.linalg.norm(hi - lo)

section = trimesh.visual.material.PBRMaterial(
    baseColorFactor=[0.521, 0.451, 1.0, 1], metallicFactor=0.0, roughnessFactor=0.6)
out, capped, open_ = [], 0, 0
for m in scene.dump():
    mat = getattr(m.visual, "material", None)
    zmin, zmax = m.bounds[:, 2]
    if zmin >= origin[2]:
        continue  # wholly in the removed half
    if zmax <= origin[2]:
        out.append(m)
        continue
    try:
        cut = trimesh.intersections.slice_mesh_plane(m, normal, origin, cap=True)
        capped += 1
    except Exception:
        cut = trimesh.intersections.slice_mesh_plane(m, normal, origin, cap=False)
        open_ += 1
    if cut is None or len(cut.faces) == 0:
        continue
    on_plane = np.all(np.abs(cut.vertices[cut.faces][:, :, 2] - origin[2]) < eps, axis=1)
    body = cut.submesh([~on_plane], append=True) if (~on_plane).any() else None
    if body is not None:
        body.visual = trimesh.visual.TextureVisuals(material=mat)
        out.append(body)
    if on_plane.any():
        cap = cut.submesh([on_plane], append=True)
        cap.visual = trimesh.visual.TextureVisuals(material=section)
        out.append(cap)

trimesh.Scene(out).export(dst)
print(f"{dst}: {len(out)} meshes, {capped} capped, {open_} left open")
