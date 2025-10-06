---
title: FerriteCore
authors: malte0811
description: Memory usage optimizations
url: https://modrinth.com/mod/ferrite-core
type: mod
created_at: 2025-10-04T13:49:33+02:00
modified_at: 2025-10-06T07:45:46+02:00
license: MIT
license_url: https://modrinth.com/mod/ferrite-core/version/8.0.1-neoforge
supported_versions:
  - 1.21.9
  - 1.21.8
  - 1.21.7
  - 1.21.6
  - 1.21.5
  - 1.21.4
  - 1.21.3
  - 1.21.1
  - "1.21"
tags:
  - mod
  - neoforge
  - optimizations
---

# FerriteCore

> by malte0811

Find FerriteCore on [Modrinth](https://modrinth.com/mod/ferrite-core).

> [!INFO]+ Summary  
> From Modrinth: _Memory usage optimizations_

We use FerriteCore to recude memory usage.

## Features

All features and changes in FerriteCore are explained on their [Summary](https://github.com/malte0811/FerriteCore/blob/main/summary.md) on GitHub.

## Usage

FerriteCore runs without any user interaction.

## Results

Rough "real life" benchmarks are done on a single player world with 
- level-type `minecraft:amplified` 
- seed `Testing` 
- full screen at 2560x1440
- Render distance & Simulation Distance at 32 chunks
- FOV at Quake Pro
- run `/tp @s 0 500 0 0 90` (looking straight down, entire render distance in view).

Went from 365 FPS average[^1] to 370 FPS average.

Memory allocation is down from 3072 MB[^2] to 2304 MB

## Config

FerriteCore's defaults are sufficient so we provide no config overrides.

## License

FerriteCore is licensed under MIT. Read the license [here](https://modrinth.com/mod/ferrite-core/version/8.0.1-neoforge).

[^1]: [Entity Culling - 365 FPS average](Entity%20Culling#^b5508d)
[^2]: [Lithium: After](Lithium#After)
