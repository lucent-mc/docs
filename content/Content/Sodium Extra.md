---
title: Sodium Extra
authors:
description: "A Sodium addon that adds features that shouldn't be in Sodium."
url: https://modrinth.com/mod/sodium-extra
type: mod
created: 2025-10-07T22:37:12+02:00
modified: 2025-10-07T22:45:00+02:00
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
> ```json {51} title="config/sodium-extra-options.json"
> {
>   "animation_settings": {
>     "animation": true,
>     "water": true,
>     "lava": true,
>     "fire": true,
>     "portal": true,
>     "block_animations": true,
>     "sculk_sensor": true
>   },
>   "particle_settings": {
>     "particles": true,
>     "rain_splash": true,
>     "block_break": true,
>     "block_breaking": true,
>     "other": {}
>   },
>   "detail_settings": {
>     "sky": true,
>     "sun": true,
>     "moon": true,
>     "stars": true,
>     "rain_snow": true,
>     "biome_colors": true,
>     "sky_colors": true
>   },
>   "render_settings": {
>     "fog_distance": 0,
>     "fog_start": 100,
>     "multi_dimension_fog_control": false,
>     "dimensionFogDistance": {},
>     "light_updates": true,
>     "item_frame": true,
>     "armor_stand": true,
>     "painting": true,
>     "piston": true,
>     "beacon_beam": true,
>     "limit_beacon_beam_height": false,
>     "enchanting_table_book": true,
>     "item_frame_name_tag": true,
>     "player_name_tag": true
>   },
>   "extra_settings": {
>     "overlay_corner": "TOP_LEFT",
>     "text_contrast": "NONE",
>     "show_fps": false,
>     "show_f_p_s_extended": true,
>     "show_coords": false,
>     "reduce_resolution_on_mac": false,
>     "use_adaptive_sync": false,
>     "cloud_height": 130,
>     "cloud_distance": 100,
>     "toasts": true,
>     "advancement_toast": true,
>     "recipe_toast": true,
>     "system_toast": true,
>     "tutorial_toast": true,
>     "instant_sneak": false,
>     "prevent_shaders": false,
>     "steady_debug_hud": true,
>     "steady_debug_hud_refresh_interval": 1
>   }
> }
> ```

## Relations

## Dependencies - [Sodium](Sodium.md)

## License

Sodium Extra is licensed under LGPL-3.0-only. Read the license [here](https://modrinth.com/mod/sodium-extra).
