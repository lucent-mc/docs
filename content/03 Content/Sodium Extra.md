---
title: Sodium Extra
authors:
description: "A Sodium addon that adds features that shouldn't be in Sodium."
url: https://modrinth.com/mod/sodium-extra
type: mod
created: 2025-10-07T22:37:12+02:00
modified: 2025-10-07T23:22:02+02:00
license: LGPL-3.0-only
license_url: https://modrinth.com/mod/sodium-extra
supported_versions:
  - '1.21.9'
  - '1.21.8'
  - '1.21.7'
  - '1.21.6'
  - '1.21.5'
  - '1.21.4'
  - '1.21.3'
  - '1.21.2'
  - '1.21.1'
  - '1.21'
depends_on:
  - '[[Sodium]]'
author: FlashyReese
tags:
  - mod
  - neoforge
  - optimizations
---

_A Sodium addon that adds features that shouldn't be in Sodium._

> by FlashyReese

Find Sodium Extra on [Modrinth](https://modrinth.com/mod/sodium-extra).

---

We use Sodium Extra to enable a couple extra Sodium options for the people that need to squeeze a little more performance out of there game.

## Usage

Sodium Extra runs without any user interaction.

## Config

Sodium Extra's defaults good enough. We only change the `cloud_height` to `130` in stead of `192` as a preference.

> [!note]- Config
> 
> ```json {6} title="config/sodium-extra-options.json"
> {
>   ...
>   "extra_settings": {
>     ...
>     "use_adaptive_sync": false,
>     "cloud_height": 130,
>     "cloud_distance": 100,
>     ...
>   }
> }
> ```

## Relations

## Dependencies

- [[Sodium]]

## License

Sodium Extra is licensed under LGPL-3.0-only. Read the license [here](https://modrinth.com/mod/sodium-extra).
