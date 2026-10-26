---
title: BABY
tagline: Build A Better Yield, bench-scale molten salt tritium breeding
summary: Small-scale experiments that irradiate molten salt with 14 MeV DT fusion neutrons and measure the tritium bred, from 100 mL up to 1 L, including the first FLiBe campaign.
status: active
order: 1
needsReview: true
facts:
  - { label: Breeder volume, value: "100 mL and 1 L" }
  - { label: Breeders tested, value: "ClLiF (LiCl-LiF surrogate salt), FLiBe; LiPb and Li oxide planned (TBC)" }
  - { label: Salt temperature, value: "500 to 700 °C" }
  - { label: Neutron source, value: "DT neutron generators (14 MeV), 10^8 to 10^9 n/s" }
  - { label: Tritium measurement, value: "Water bubblers and liquid scintillation counting" }
  - { label: Neutron diagnostics, value: "Activation foils, proton recoil, diamond detector" }
  - { label: Measured TBR (100 mL), value: "3.57 × 10^-4" }
repos:
  - { name: BABY-100-mL-runs, description: "Data for 100 mL runs 3 to 8" }
  - { name: BABY-1L-run-1, description: "1 L run 1 data and analysis" }
  - { name: BABY-1L-run-2 }
  - { name: BABY-1L-run-3 }
  - { name: BABY-1L-run-4 }
  - { name: FLiBe-1L-run-1, description: "First FLiBe breeding run" }
  - { name: FLiBe-1L-run-3, description: "Hot FLiBe irradiation, 21 June 2026" }
  - { name: FLiBe-1L-run-4, description: "Repeat of molten FLiBe run" }
  - { name: BABY-LiPb }
  - { name: BABY-LiOx }
  - { name: BABY-tritium-transport, description: "OpenMC + OpenFOAM tritium transport model" }
  - { name: insights-from-BABY-experiment-paper, description: "Reproducible analysis for the BABY paper" }
---

> **Draft guide.** Section headings show the proposed structure for every
> experiment guide. Text marked TODO needs input from the experiment team.

## Overview

BABY is the bench-scale stage of LIBRA. A small volume of molten salt is
irradiated by 14 MeV neutrons from a deuterium-tritium (DT) neutron generator.
Tritium bred in the salt is carried out by a sweep gas, captured in water
bubblers, and counted by liquid scintillation. Comparing the measured tritium
against neutronics predictions validates the models used to design breeding
blankets for fusion power plants.

BABY (Build A Better Yield) is the dress rehearsal for the larger LIBRA
experiments. Working at small volumes lets the team build experience with
molten salts, beryllium safety, and tritium and neutron detection before
scaling up. The first tests used ClLiF, a LiCl-LiF salt without beryllium,
as a surrogate for FLiBe.

The 100 mL experiments made the first global measurement of the tritium
breeding ratio (TBR) in a molten salt: 3.57 × 10⁻⁴, from 1.17 × 10¹⁰
tritons bred for 3.35 × 10¹³ neutrons produced. The value is small because
only about 2% of the neutrons reach the salt at this scale. The model and
the measurement differ by about 25%, which the team attributes mainly to
tritium permeating through the crucible walls. The results are published in
[Nuclear Fusion 65, 026037 (2025)](https://doi.org/10.1088/1741-4326/ada2ab).

The 1 L experiments add a double-walled vessel so that tritium permeating
through the walls can be collected, test permeation barriers, and speed up
tritium release by sparging the salt with helium and hydrogen, which cut a
release measurement from about two months to about a day. BABY leads to
[LIBRA-Pi](../libra-pi) (about 100 L) and then
[LIBRA-One](../libra-one) (700 L).

## Campaigns

| Campaign | Breeder | Runs | Status |
| --- | --- | --- | --- |
| BABY 100 mL | ClLiF (LiCl-LiF) | 3 to 8 | Completed |
| BABY 1 L | ClLiF (LiCl-LiF) | 1 to 12 | Completed |
| FLiBe 1 L | FLiBe | 1 to 4 | Active |
| LiPb | Lead-lithium | TBC | TBC |
| LiOx | Lithium oxide (TBC) | TBC | TBC |

## Experimental setup

Photos and drawings of the set-up are in the "In the lab" section below.
TODO: a labelled diagram of the crucible, furnace, gas lines and bubblers.

### Breeder and containment

The breeder (0.1 to 1 L) sits in an Inconel 625 crucible inside a secondary
container and is heated to 500 to 700 °C: 700 °C for the 100 mL runs and
about 650 °C for 1 L. In the 1 L design the secondary vessel collects the
tritium that permeates through the crucible wall.

TODO: salt preparation and temperature control.

### Neutron source

Commercial sealed-tube DT neutron generators provide 14 MeV neutrons at
10⁸ to 10⁹ neutrons per second, for irradiations of 4 to 12 hours. The
100 mL runs used two generators totalling about 5 × 10⁸ n/s. A newer
Starfire generator cut a typical irradiation from 12 hours to about one
hour.

TODO: source position and shielding.

### Gas handling and tritium collection

Dry, oxygen-free gas (helium, or helium with a little hydrogen) flows over
the salt and through the secondary vessel. Each gas stream then passes two
sets of 2 × 2 water bubbler vials separated by a catalytic oxidation
furnace: the first set captures water-soluble tritium (HTO), and the furnace
converts insoluble forms (HT, T₂) so the second set captures those too. The
gas keeps bubbling during and after irradiation, and vials are sampled
periodically. The minimum detectable activity is about 0.07 Bq per vial.

## Diagnostics

- **Activation foils** measured by HPGe and NaI spectroscopy give the neutron
  fluence on the crucible.
- **Proton recoil telescope (PRT)** and **diamond detectors** monitor the
  neutron source in real time.
- **Liquid scintillation counting (LSC)** of bubbler samples gives tritium
  release over time.

## Running an experiment

The outline of a BABY run, as presented by the team at SOFE 2025:

1. Add 0.1 to 1 L of breeder to the crucible and place it in its secondary
   container.
2. Heat to 500 to 700 °C.
3. Flow dry, oxygen-free gas through the inner and outer vessels.
4. Irradiate with 14 MeV neutrons at 10⁸ to 10⁹ n/s for 4 to 12 hours.
5. Let the gas bubble through the water bubblers during and after
   irradiation, sampling occasionally.
6. Count the samples by liquid scintillation.

TODO: the detailed checklist, written so a new team member could follow it.

## Data and analysis

Each run has its own GitHub repository created from a common template. Raw
data lives in `data/` (general run information, LSC data, neutron detection
data) and analysis notebooks in `analysis/` (OpenMC neutronics model and
tritium transport model). Every release is archived on Zenodo with a DOI.

Analysis uses [libra-toolbox](https://libra-toolbox.readthedocs.io/en/latest/),
the shared Python package for neutron detection and tritium analysis.

TODO: how to start a new run repository from the template.
