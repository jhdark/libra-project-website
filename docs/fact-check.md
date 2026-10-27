# Fact-check log

A record of the October 2026 check of everything on the site. On the site,
anything not yet verified is <mark>highlighted in pink</mark> (a `<mark>` tag in
the source; see "Fact-checking" in CLAUDE.md). When the team confirms a
highlighted fact, remove its tags and tick it off here.

## Sources of truth

- **Papers.** Delaporte-Mathurin et al., Nucl. Fusion 65 026037 (2025),
  BABY 100 mL. Delaporte-Mathurin et al., Nucl. Fusion 66 076046 (2026),
  BABY 1 L runs 1 to 4. Ferry et al., Fusion Sci. Technol. 79 13-35 (2023),
  the original LIBRA design.
- **The LIBRA-project GitHub organisation.** Each run's `data/general.json`
  (salt, gas, generator, irradiation periods, purpose) and
  `data/processed_data.json`, plus the model repositories (`LIBRA-one`,
  `libra-pie-neutronics`).
- **People.** PSFC and institution profile pages, ORCID records and GitHub
  profiles.
- **Publications and data.** Crossref, arXiv, the Zenodo API, and the title
  blocks of the posters and slides themselves.

## Corrections made

### BABY 100 mL

- The model and measurement differed by a factor of 2.3, not "about 25%".
  (The BABY 1 L paper's table gives 3.61 × 10⁻⁴ measured and 4.71 × 10⁻⁴
  modelled for 100 mL; both are now quoted.)
- The neutron rate is about 3.9 × 10⁸ n/s in total (run 5), not 5 × 10⁸.
  The generators are now named: Thermo Fisher A-325 and P-383.
- Neutron diagnostics were niobium foils counted on NaI detectors, plus a
  diamond detector. There was no proton recoil telescope and no HPGe. The
  HPGe photo is no longer tagged as 100 mL.
- There was no secondary container; permeated tritium went to the room.
- Bubblers: two vials, an oxidiser, then two more vials, not "two sets of
  2 × 2". The first vials catch HTO and TF (diagram labels updated).
- The "0.07 Bq" minimum detectable activity is not in either paper and has
  been removed.
- The run steps now follow the paper: conditioning with 3.5% H₂, 700 °C,
  vials changed every 12 hours, and LSC details.
- Added results the guide was missing: all tritium collected as insoluble
  HT or T₂, and run-to-run reproducibility.
- Run dates from the run scripts, the diamond detector files and the
  activation foil records: runs 4 (7 November 2023) and 8 (29 July 2024)
  confirmed; run 5 is 5 December 2023 (not 4 December), run 6 25 January
  2024 (not 23 January), run 7 3 April 2024 (not 1 April).
- The CAD model was a different vessel. It is now `geometry.step` from
  insights-from-BABY-experiment-paper (Zenodo 10.5281/zenodo.14455926), the
  set-up the paper models, converted with `scripts/cad/step2glb.py --z-up
  --max-size 1000` to leave out the lab walls and table.
- The salt dispensing system is removed: it is in neither paper and was not
  used in the runs.

### BABY 1 L

- Salt temperature: a minimum of 627 °C to 685 °C depending on the run, per
  `general.json`, not "about 650 °C".
- The measured TBR (2.45 × 10⁻³) and modelled TBR (2.08 × 10⁻³) are now
  stated. "About 7% of neutrons" is not in the paper and has been removed.
- The release speed-up is 30 to 60 days down to four days (run 4), not
  "60 days to 4 days, tenfold".
- The nGen-400 was used from run 6 (30 May 2025) to run 12 and in FLiBe runs
  2 and 3, not "runs 7 to 11 in June".
- A full run table for ClLiF runs 1 to 12 and FLiBe runs 1 to 4 now comes
  from the repositories. There is no repository for run 5.
- FLiBe runs 1 and 2 were cold (solid salt) irradiations; run 3 (22 July
  2026) was the first molten one.
- BABY-tritium-transport uses OpenMC and FESTIM. Its GitHub description says
  OpenFOAM, but there is no OpenFOAM code in it.
- New sections from the paper: heating, the full gas system, diagnostics and
  modelling.

### LIBRA-Pi, LIBRA-One

- LIBRA-Pi geometry and salt are confirmed from `libra-pie-neutronics`: a 90°
  sector from 15.2 to 43.5 cm, 1,230 cm² floor, ClLiF 69.5:30.5. The gas flow
  of about 400 sccm is from the BABY 1 L paper.
- LIBRA-One's model is FLiBe with a 5 cm beryllium multiplier and a 10 cm
  graphite reflector, about 645 L, and a TBR of 1.07. "700 L", "about 1.05"
  and "700 °C" are not in the repository (the FESTIM model uses 850 K), so
  they stay highlighted.
- The LIBRA schematic is Fig. 3 of Ferry et al. and shows the original
  four-quadrant design; its caption now says so. The original design used a
  lead multiplier, not beryllium.

### Site-wide

- Homepage: now mentions lead-lithium and lithium oxide, which are in
  preparation.
- Data page: only BABY 1 L runs 1 to 4, FLiBe runs 1 and 2 and the papers
  have Zenodo releases, and only runs 1 to 4 and 6 have working Binder links.
  The copy no longer says "most".
- LIBRA-PINT is renamed LIBRA-Pint.
- The FLiBe run 3 news post moved from 21 June to 22 July 2026, per the run
  data and generator logs. The repository description still says 21 June.

### People

- Toshiro Sakabe is now at Brookhaven National Laboratory (ORCID), not Kyoto
  University.
- Ethan Peterson's role is now his faculty title.
- Davide Pettinari is a PhD student (ORCID, Politecnico di Torino).
- Rémi's company is spelt NeutroGen Technologies.

### Publications

- ClLiF article: the year is 2026 (print), first published online July 2025.
- Author order fixed on the NuMat 2024, SOFT 2024, HWS 2024 and OSSFE 2025
  talks.
- SOFE 2025 Goleš poster: the title is now as printed on the poster.
- Edwards poster: the byline is "E. Edwards", as printed.
- The Woller ARPA-E 2025 talk now links its public PDF.
- Article author names follow the publisher (Goles).

## Still to confirm (highlighted on the site)

**BABY 100 mL**
- Run dates for runs 1 to 3 (no record in the repositories).

**BABY 1 L**
- Which design iteration the CAD shows. Measured from the model, its outer
  vessel (273.1 × 210.9 mm), crucible (146.0 mm OD), conflat lid, radiative
  furnace (about 248 mm OD) and 4.8 mm bottom plate match the paper's runs 1
  to 4. Its five staggered 1/4 in wells, extra lid ports and lack of a
  sparger do not. The source STEP file is not in the repository; the team
  should say which iteration it is.
- FLiBe operating temperature: run 3's furnace setpoint was 750 °C, but no
  salt temperature is recorded.
- FLiBe run 4 dates.
- Whether the nGen-400 is made by Starfire Industries.

**LIBRA-Pi**
- Heater details (from internal design notes), the alumina coating,
  fabrication status, and the gas routes in the section diagram.

**LIBRA-One**
- The 700 L volume, design TBR of 1.05 and 700 °C.
- The C-Mod vacuum sleeve.
- Design status.

**LIBRA-Pint**
- Everything on the page.

**Homepage**
- "OPEN 2021" and the partners (CFS, INL).
- The hero video caption.

**People**
- "LIBRA principal investigator" (Woller, Whyte).
- Stefano Segantin's role (the PSFC page says postdoctoral associate).
- Emily Edwards' role (the PSFC page says technical associate II).
- Rémi's current affiliation.
- Role details for Zhou, Goleš, Dunn and Lamere.
- Mike German and Ryan Berkshire.

**Publications**
- 2026 ARPA-E poster authors (not printed on it).
- 2025 ARPA-E poster authors and place.
- Exact summit days.
- Six talks with no public record: SOFE 2025 Woller, TFG May 2025 Goleš,
  ARPA-E 2024 talk, JPP Colloquium, Tritium 2022, Be-WS 16.

**Photos**
- Every photo caption.

## Decisions taken

- Results already public in a LIBRA-project repository (such as the later
  BABY 1 L and FLiBe TBRs) are shown, labelled as not yet published.
- The LIBRA schematic (Fig. 3 of Ferry et al.) is kept; the team holds a
  near-identical original.
- Still open: tagging the LIBRA FS&T paper `libra-one`, and the 2024 TOFE
  and ARPA-E items `baby-1l`.
