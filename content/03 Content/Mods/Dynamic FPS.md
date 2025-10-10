---
title: Dynamic FPS
authors: juliand665
description: Reduce resource usage while Minecraft is in the background, idle, or on battery.
url: https://modrinth.com/mod/dynamic-fps
type: mod
created: 2025-10-07T23:17:21+02:00
modified: 2025-10-10T16:55:13+02:00
license: MIT
license_url: https://modrinth.com/mod/dynamic-fps
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

_Reduce resource usage while Minecraft is in the background, idle, or on battery._

> by juliand665

Find Dynamic FPS on [Modrinth](https://modrinth.com/mod/dynamic-fps).

---

We use Dynamic FPS to reduce fps when the game is in the background.

## Usage

Dynamic FPS runs without any user interaction.

## Config

We just disable vsync on the battery unplugged state.

```json title="dynamic_fps.json"
{
  "states": {
    "unplugged": {
      "enable_vsync": false
    }
  }
}
```

## Relations

### Dependencies

- [[Cloth Config API]] (Optional)

## License

Dynamic FPS is licensed under MIT. Read the license [here](https://modrinth.com/mod/dynamic-fps).
