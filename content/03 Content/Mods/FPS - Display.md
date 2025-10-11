---
title: FPS - Display
authors: Grayray75
description: A simple mod that displays the current FPS on screen
url: https://modrinth.com/mod/fpsdisplay
type: mod
created: 2025-10-11T04:48:41+02:00
modified: 2025-10-11T04:50:12+02:00
license: LGPL-3.0-only
license_url: https://github.com/Grayray75/FPS-Display/blob/main/LICENSE.txt
supported_versions:
  - 1.21.8
  - 1.21.7
  - 1.21.6
  - 1.21.5
  - 1.21.4
  - 1.21.3
  - 1.21.2
  - 1.21.1
  - '1.21'
depends_on:
  - '[[Cloth Config API]]'
  - '[[Forgified Fabric API]]'
  - '[[Sinytra Connector]]'
---

_A simple mod that displays the current FPS on screen_

> by Grayray75

Find FPS - Display on [Modrinth](https://modrinth.com/mod/fpsdisplay).

---

We use FPS - Display to get a more accurate FPS average display without affecting framerate, like the debug screen does.

## Usage

Press the hotkey to toggle the FPS overlay.

## Config

We enable `advancedStats` and set the `textAlpha` to max.

```json title="fpsdisplay.json" {3,6}
{
  "enabled": true,
  "advancedStats": true,
  "textSize": 1.0,
  "textColor": 15658734,
  "textAlpha": 255,
  "textShadows": false,
  "offsetTop": 4,
  "offsetLeft": 4,
  "keybindMode": "Toggle"
}
```

## Relations

## Dependencies

- [[Forgified Fabric API]]
- [[Sinytra Connector]]
- [[Cloth Config API]]

## License

FPS - Display is licensed under LGPL-3.0-only. Read the license [here](https://github.com/Grayray75/FPS-Display/blob/main/LICENSE.txt).
