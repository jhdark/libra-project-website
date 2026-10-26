---
title: LIBRA-Pi
tagline: A π-steradian sector of the LIBRA blanket
summary: LIBRA-Pi is a tank of about 100 L of molten salt that covers π steradians around a DT neutron source, scaling the BABY experiments up to blanket-relevant salt thicknesses.
status: planned
order: 3
needsReview: true
facts:
  - { label: Breeder volume, value: "About 100 L (125 L in earlier designs)" }
  - { label: Breeder, value: "ClLiF (about 70 LiCl : 30 LiF)" }
  - { label: Vessel, value: "Inconel 625, double-walled, alumina permeation barrier" }
  - { label: Neutron source, value: "DT neutron generator (14 MeV)" }
  - { label: Status, value: "Vessel fabricated; testing TBC" }
repos:
  - { name: libra-pie-neutronics, description: "Neutronics model for LIBRA-Pi" }
---

> **Draft guide.** Drawn from the team's 2024 and 2025 posters and talks.
> Sections marked TODO need input from the experiment team.

## Overview

LIBRA-Pi is the step between the litre-scale [BABY 1 L](../baby-1l) experiments and
[LIBRA-One](../libra-one). In the team's words, "the Pi tank is designed to
cover π steradians around the point neutron source, while also resembling a
slice of pie". It is a full-scale sector of the original four-quadrant LIBRA
design, with a salt thickness of several 14 MeV neutron mean free paths.

LIBRA-Pi uses ClLiF, the beryllium-free surrogate salt used in BABY, to
study what only appears at scale:

- how far neutrons travel through the salt (neutron path length);
- handling a large volume of salt;
- heating and thermal management;
- neutron multiplication.

## Experimental setup

The tank is built from Inconel 625 with a double wall, so that tritium
permeating through the inner wall can be measured, and a plasma-sprayed
alumina coating on the outside to limit further permeation losses. Heating
the salt to its melting point and on to 700 °C takes several days, and
structural analysis shows the vessel stays within allowable stresses.

TODO: stand, heaters, neutron source position and gas handling.

## Diagnostics

TODO

## Running an experiment

TODO

## Data and analysis

TODO: the [libra-pie-neutronics](https://github.com/LIBRA-project/libra-pie-neutronics)
repository holds a neutronics model (to be confirmed by the team).
