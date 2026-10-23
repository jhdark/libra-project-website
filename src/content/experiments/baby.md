---
title: BABY
tagline: Bench-scale molten salt tritium breeding
summary: Small-scale experiments that irradiate molten salt with 14 MeV DT fusion neutrons and measure the tritium bred, from 100 mL up to 1 L, including the first FLiBe campaign.
status: active
order: 1
needsReview: true
facts:
  - { label: Breeder volume, value: "100 mL and 1 L" }
  - { label: Breeders tested, value: "Molten salt, FLiBe, LiPb, Li oxide (TBC)" }
  - { label: Neutron source, value: "DT neutron generator (14 MeV)" }
  - { label: Tritium measurement, value: "Liquid scintillation counting" }
  - { label: Neutron diagnostics, value: "Activation foils, proton recoil, diamond detector" }
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

TODO: one paragraph on why BABY exists and how it feeds into LIBRA-One.

## Campaigns

| Campaign | Breeder | Runs | Status |
| --- | --- | --- | --- |
| BABY 100 mL | Molten salt (TBC) | 3 to 8 | Completed |
| BABY 1 L | Molten salt (TBC) | 1 to 12 | Completed |
| FLiBe 1 L | FLiBe | 1 to 4 | Active |
| LiPb | Lead-lithium | TBC | TBC |
| LiOx | Lithium oxide (TBC) | TBC | TBC |

## Experimental setup

TODO: diagram of the crucible, furnace, gas lines and bubblers. Drop
images into `public/images/experiments/baby/` and reference them here.

### Breeder and containment

TODO: crucible material, salt preparation, heating and temperature control.

### Neutron source

TODO: generator model, operating parameters, source position and shielding.

### Gas handling and tritium collection

TODO: sweep gas composition and flow, bubbler arrangement, sampling schedule.

## Diagnostics

- **Activation foils** measured by HPGe and NaI spectroscopy give the neutron
  fluence on the crucible.
- **Proton recoil telescope (PRT)** and **diamond detectors** monitor the
  neutron source in real time.
- **Liquid scintillation counting (LSC)** of bubbler samples gives tritium
  release over time.

## Running an experiment

TODO: step-by-step procedure, written so a new team member could follow it.

1. Pre-run checklist
2. Heating and salt melting
3. Irradiation
4. Sampling during and after irradiation
5. Shutdown and post-run measurements

## Data and analysis

Each run has its own GitHub repository created from a common template. Raw
data lives in `data/` (general run information, LSC data, neutron detection
data) and analysis notebooks in `analysis/` (OpenMC neutronics model and
tritium transport model). Every release is archived on Zenodo with a DOI.

Analysis uses [libra-toolbox](https://libra-toolbox.readthedocs.io/en/latest/),
the shared Python package for neutron detection and tritium analysis.

TODO: how to start a new run repository from the template.
