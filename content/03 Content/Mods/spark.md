---
title: spark
authors: lucko
description: spark is a performance profiler for Minecraft clients, servers and proxies.
url: https://modrinth.com/mod/spark
type: mod
created: 2025-10-04T15:42:36+02:00
modified: 2025-10-10T16:56:07+02:00
license: GPL-3.0-only
license_url: https://github.com/lucko/spark/blob/master/LICENSE.txt
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

_spark is a performance profiler for Minecraft clients, servers and proxies._

> by lucko

Find spark on [Modrinth](https://modrinth.com/mod/spark/version/1.10.145-neoforge).

---

We use spark to measure performance to ensure quality.

## Usage

Check the [spark docs](https://spark.lucko.me/docs/Command-Usage) for complete documentation.

### Profiler

The `profiler` subcommand is used to control the spark profiler.

Requires the permission `spark` or `spark.profiler`.

If the profiler is already running in the background, run:

- `/spark profiler open` to **open** the profiler viewer page without stopping the profiler.
- `/spark profiler stop` to **stop** the profiler and view the results.
- `/spark profiler cancel` to **cancel** the profiler stop it without uploading the results.

For basic operation, run:

- `/spark profiler start` to **start** the profiler in the default operation mode.
- `/spark profiler stop` to **stop** the profiler and view the results.
- `/spark profiler info` to check the current **status** of the profiler.

There are some additional flags which can be used to customize the behaviour of the profiler. You can use:

- `/spark profiler start --timeout <seconds>` to start the profiler and **automatically stop** it after x seconds.
- `/spark profiler start --thread *` to start the profiler and track **all threads**.
- `/spark profiler start --alloc` to start the profiler and profile memory allocations (memory pressure) instead of CPU usage.

## Config

spark has no config to edit.

## License

spark is licensed under GPL-3.0-only. Read the license [here](https://github.com/lucko/spark/blob/master/LICENSE.txt).
