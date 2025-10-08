---
title: Lithium
authors: jellysquid3
description: No-compromises game logic optimization mod. Well suited for clients and servers of all kinds. Now available for Fabric and NeoForge!
url: https://modrinth.com/mod/lithium
type: mod
created: 2025-10-04T12:51:31+02:00
modified: 2025-10-06T11:19:27+02:00
license: LGPL-3.0-only
license_url: https://modrinth.com/mod/lithium
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
  - '1.21'
tags:
  - mod
  - neoforge
  - optimizations
---

_No-compromises game logic optimization mod. Well suited for clients and servers of all kinds. Now available for Fabric and NeoForge!_

> by jellysquid3

Find Lithium on [Modrinth](https://modrinth.com/mod/lithium).

---

We use Lithium to optimize the game logic.

## Usage

Lithium runs without any user interaction.

## Results

Rough "real life" benchmarks are done on a single player world with

- level-type `minecraft:amplified`
- seed `Testing`
- full screen at 2560x1440
- Render distance & Simulation Distance at 32 chunks
- FOV at Quake Pro
- run `/tp @s 0 500 0 0 90` (looking straight down, entire render distance in view).

Lithium was tested in combination with [[Sodium]], to prevent the renderer from being bottleneck.

Improvements were marginal but real.

### Before

Averaging around 360 FPS, around 3ms average frame time.  
Average tick time of 8-9ms

![[Sodium_After.png]]

### After

Averaging around 362 FPS (within margin of error), around 3ms average frame time  
Average tick time of 6-7ms ^f93b56

![[Lithium_After.png]]

## Config

Lithium's defaults are sufficient so we provide no config overrides.

## License

Lithium is licensed under LGPL-3.0-only. Read the license [here](https://modrinth.com/mod/lithium).
