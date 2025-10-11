---
title: Lucent Optimizations - Content
authors:
  - mia-riezebos
description: A list of all content contained in Lucent Optimizations
type: pack
created: 2025-08-23T11:54:27+02:00
modified: 2025-10-11T02:59:06+02:00
license: CC BY-SA 4.0
license_url: https://github.com/lucent-mc/docs/blob/dev/content/LICENSE
icon: streamline-pixel:interface-essential-flash
tags:
  - optimizations
  - pack
---

Below you will find a list of all Content included with [[02 Packs/1. Lucent Optimizations/index|Lucent Optimizations]].

## Mods

- [[Cloth Config API|Cloth Config API]]
- [[Concurrent Chunk Management Engine|Concurrent Chunk Management Engine]]
- [[Configured Defaults|Configured Defaults]]
- [[Connector Extras|Connector Extras]][^1]
- [[Cubes Without Borders|Cubes Without Borders]]
- [[Dynamic FPS|Dynamic FPS]]
- [[Enhanced Block Entities|Enhanced Block Entities]]
- [[Entity Culling|Entity Culling]]
- [[FerriteCore|FerriteCore]]
- [[Forgified Fabric API|Forgified Fabric API]][^1]
- [[ImmediatelyFast|ImmediatelyFast]]
- [[Krypton|Krypton]]
- [[Language Reload|Language Reload]]
- [[Lithium]]
- [[MixinTrace Reforged|MixinTrace Reforged]]
- [[Model Gap Fix|Model Gap Fix]]
- [[ModernFix|ModernFix]]
- [[More Culling|More Culling]]
- [[Reese's Sodium Options|Reese's Sodium Options]]
- [[Sinytra Connector]][^1]
- [[Sodium]]
- [[Sodium Extra|Sodium Extra]]
- [[spark]]

## Resource Packs

- [[Translations for Sodium|Translations for Sodium]]

## Shader Packs

Lucent Optimizations does not include any Shader Packs.

## Other Considerations

### [[Noisium|Noisium]]

We deliberately chose not to include Noisium. In benchmarks with multiple terrain generation mods, Noisium came out slightly worse than only running C2ME, and it consistently increases idle MSPT.

![C2ME + Noisium Benchmark - YouTube](https://youtu.be/51mgNQivwVY)

[^1]: This mod is a library mod, which means that it doesn't add content itself but is used as a dependency or API by other mods.
