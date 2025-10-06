---
title: Entity Culling
authors: tr7zw
description: Using async path-tracing to hide Block-/Entities that are not visible
url: https://modrinth.com/mod/entityculling
type: mod
created_at: 2025-10-04T12:11:02+02:00
modified_at: 2025-10-06T07:54:21+02:00
license: Other
license_url: https://github.com/tr7zw/EntityCulling/blob/1.18/LICENSE-EntityCulling
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

# Entity Culling

> by tr7zw

Find Entity Culling on [Modrinth](https://modrinth.com/mod/entityculling).

> [!INFO]+ Summary  
> From Modrinth: _Using async path-tracing to hide Block-/Entities that are not visible_

We use Entity Culling to speed up rendering on the client.

## Features

Unlock performance by only rendering what matters. This mod goes beyond the basics to bring next-level visibility optimization to your game.

### Multithreaded Path-Tracing

- Uses spare CPU threads to calculate visibility fast
- Runs alongside the main game thread without blocking
- Updates visibility data in real-time

### Smart Occlusion Culling

- Skips block entities and mobs hidden behind terrain or structures
- Works like Minecraft's back-face culling, but smarter
- Reduces GPU load without sacrificing visual fidelity

### Entity Tick Optimization

- Reduces client impact from unseen entities
- Keeps maintenance to a minimum
- Fully configurable and compatible with most mods

## Results

Rough "real life" benchmarks are done on a single player world with 
- level-type `minecraft:amplified` 
- seed `Testing` 
- full screen at 2560x1440
- Render distance & Simulation Distance at 32 chunks
- FOV at Quake Pro
- run `/tp @s 0 500 0 0 90` (looking straight down, entire render distance in view).

Went from 362 FPS average[^1] to 365 FPS average ^b5508d

## Usage

Entity Culling runs without any user interaction.

## License

Entity Culling is licensed under Other. Read the license [here](https://github.com/tr7zw/EntityCulling/blob/1.18/LICENSE-EntityCulling).

[^1]: [Lithium - 362 FPS average](Lithium#^f93b56)
