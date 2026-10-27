"""Tessellate a STEP assembly and write a GLB styled like libra_pint_model.glb
(grey, non-metallic, metres, Y up)."""
import sys
import numpy as np
import trimesh
from OCP.STEPControl import STEPControl_Reader
from OCP.BRepMesh import BRepMesh_IncrementalMesh
from OCP.TopExp import TopExp_Explorer
from OCP.TopAbs import TopAbs_FACE, TopAbs_SOLID, TopAbs_REVERSED
from OCP.TopoDS import TopoDS
from OCP.BRep import BRep_Tool
from OCP.TopLoc import TopLoc_Location
from OCP.Interface import Interface_Static

src, dst = sys.argv[1], sys.argv[2]
lin_defl = float(sys.argv[3]) if len(sys.argv) > 3 else 0.5  # mm

Interface_Static.SetCVal_s("xstep.cascade.unit", "MM")
r = STEPControl_Reader()
assert r.ReadFile(src) == 1
r.TransferRoots()
shape = r.OneShape()
BRepMesh_IncrementalMesh(shape, lin_defl, False, 0.3, True)

greys = [[0.35, 0.35, 0.35, 1], [0.44, 0.44, 0.485, 1], [0.40, 0.40, 0.40, 1]]
meshes = []
exp = TopExp_Explorer(shape, TopAbs_SOLID)
i = 0
while exp.More():
    V, F, off = [], [], 0
    fe = TopExp_Explorer(exp.Current(), TopAbs_FACE)
    while fe.More():
        face = TopoDS.Face(fe.Current())
        loc = TopLoc_Location()
        tri = BRep_Tool.Triangulation_s(face, loc)
        if tri is not None:
            trsf = loc.Transformation()
            for k in range(1, tri.NbNodes() + 1):
                p = tri.Node(k).Transformed(trsf)
                V.append((p.X(), p.Y(), p.Z()))
            rev = face.Orientation() == TopAbs_REVERSED
            for k in range(1, tri.NbTriangles() + 1):
                a, b, c = tri.Triangle(k).Get()
                F.append((off + a - 1, off + c - 1, off + b - 1) if rev else (off + a - 1, off + b - 1, off + c - 1))
            off += tri.NbNodes()
        fe.Next()
    if F:
        m = trimesh.Trimesh(np.array(V) / 1000.0, np.array(F), process=True)
        m.visual = trimesh.visual.TextureVisuals(material=trimesh.visual.material.PBRMaterial(
            baseColorFactor=greys[i % 3], metallicFactor=0.0, roughnessFactor=0.25))
        meshes.append(m)
        i += 1
    exp.Next()

scene = trimesh.Scene(meshes)
print("solids", len(meshes), "bounds (m)", scene.bounds.tolist(), "tris", sum(len(m.faces) for m in meshes))
# SolidWorks STEP is already Y up, like glTF.
scene.export(dst)
