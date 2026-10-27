---
title: LIBRA-One
tagline: Designed for a tritium breeding ratio above one
summary: LIBRA-One is the largest planned stage, about 700 L of FLiBe around a 14 MeV DT neutron source with a beryllium neutron multiplier, designed to breed more tritium than its source consumes.
status: planned
order: 5
stage: { volume: 700, image: ../../assets/stages/libra-one.png }
needsReview: true
facts:
  - { label: Breeder volume, value: "700 L" }
  - { label: Breeder, value: "FLiBe" }
  - { label: Design TBR, value: "About 1.05" }
  - { label: Temperature, value: "700 °C" }
  - { label: Neutron multiplier, value: "Beryllium" }
  - { label: Modelling, value: "OpenMC neutronics, FESTIM tritium transport" }
repos:
  - { name: LIBRA-one, description: "OpenMC and FESTIM model for LIBRA-One" }
---

> **Draft guide.** Drawn from the team's 2025 and 2026 posters and talks.
> Sections marked TODO need input from the experiment team.

## Overview

"The moniker? LIBRA One → TBR > 1." A net tritium breeding experiment is
the aspirational goal of LIBRA: a test designed to breed more tritium than
the neutron source consumes, which any self-sustaining fusion power plant
will need. The team describes a global TBR of 1 as a world first for a
fusion blanket experiment.

LIBRA-One builds on the [BABY 100 mL](../baby-100ml), [BABY 1 L](../baby-1l) and [LIBRA-Pi](../libra-pi)
experiments. It replaces the earlier plan for a 500 L LIBRA in four
independent quadrants.

## Design

- A single tank of about 700 L of FLiBe, with no quadrants.
- A beryllium neutron multiplier, with the salt volume sized to reach a
  tritium breeding ratio of about 1.05, so that the goal of TBR > 1 is met
  with margin.
- A 14.1 MeV DT neutron generator at the centre of the 700 °C salt,
  protected by a vacuum insulation sleeve conceived from the thermal shield
  of the Alcator C-Mod advanced outer divertor.

Status: in final design (2025).

TODO: facility, shielding and schedule, once confirmed by the team.

## Modelling

The [LIBRA-one repository](https://github.com/LIBRA-project/LIBRA-one) holds
the OpenMC neutronics and FESTIM tritium transport models for the experiment.

TODO: summarise the models and main results.

## Data and analysis

TODO
