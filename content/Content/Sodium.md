---
title: Sodium
authors: jellysquid3
description: The fastest and most compatible rendering optimization mod for Minecraft. Now available for both NeoForge and Fabric!
url: https://modrinth.com/mod/sodium
type: mod
created: 2025-10-04T12:16:40+02:00
modified: 2025-10-06T11:18:46+02:00
license: PolyForm-Shield
license_url: https://github.com/CaffeineMC/sodium/blob/dev/LICENSE.md
supported_versions:
  - 1.21.9
  - 1.21.8
  - 1.21.7
  - 1.21.6
  - 1.21.5
  - 1.21.4
  - 1.21.3
  - 1.21.2
  - 1.21.1
  - "1.21"
tags:
  - mod
  - neoforge
  - optimizations
---

_The fastest and most compatible rendering optimization mod for Minecraft. Now available for both NeoForge and Fabric!_

> by jellysquid3

Find Sodium on [Modrinth](https://modrinth.com/mod/sodium).

---

We use Sodium to speed up rendering on the client.

## Usage

Sodium runs without any user interaction.

## Results

Rough "real life" benchmarks are done on a single player world with 
- level-type `minecraft:amplified` 
- seed `Testing` 
- full screen at 2560x1440
- Render distance & Simulation Distance at 32 chunks
- FOV at Quake Pro
- run `/tp @s 0 500 0 0 90` (looking straight down, entire render distance in view).

### Before

Averaging around 28 FPS, around 36ms average frame time.

![[Sodium_Before.png]]

### After

Averaging around 360 FPS, around 3ms average frame time.

![](Sodium_After.png)

## Config

Sodium's defaults are sufficient so we provide no config overrides.

## License

Sodium is licensed under PolyForm-Shield. Read the license [here](https://github.com/CaffeineMC/sodium/blob/dev/LICENSE.md).
