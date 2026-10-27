# CAD to web models

Turn a STEP assembly into the GLB models the `CadViewer` component shows.
Run these with any Python 3 that has the packages below; they are not part
of the site build.

```
pip install cadquery-ocp trimesh numpy scipy networkx shapely mapbox_earcut rtree
python step2glb.py "Assembly.STEP" ../../public/models/name_model.glb 0.2
python cutaway.py ../../public/models/name_model.glb ../../public/models/name_cutaway.glb
```

- `step2glb.py` tessellates every solid (the last argument is the mesh
  tolerance in mm; smaller is finer and larger) and writes grey,
  non-metallic parts in metres, Y up, matching the existing models.
- `cutaway.py` removes the half of the model facing the viewer's default
  camera and fills the cut faces in Hydrogen Periwinkle. An optional third
  argument moves the cut plane (a fraction of the depth, -0.5 to 0.5).

Then use both in the guide:
`<CadViewer src="models/name_model.glb" cutaway="models/name_cutaway.glb" alt="..." />`
