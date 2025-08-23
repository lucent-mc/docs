# Default Options

Find Default Options on [Modrinth](https://modrinth.com/mod/default-options).

> [!NOTE] From Modrinth
> *A way for modpacks to ship a default (key) configuration without having to include an options.txt file. Also allows local options from any mod .cfg file.*

We leverage Default Options to configure new defaults for conflicting keybinds, optimized mod configs, and a default server list.

## Usage

| In-game command               | Description               |
| ----------------------------- | ------------------------- |
| `/defaultoptions saveKeys`    | Saves default keybinds    |
| `/defaultoptions saveOptions` | Saves default options     |
| `/defaultoptions saveServers` | Saves default server list |
| `/defaultoptions saveAll`     | Saves all of the above    |

When saving any of the defaults with the commands above, the relevant files are placed inside `/config/defaultoptions`

### `extra/` directory

Inside `/config/defaultoptions` you can also include other default files inside the `extra/` directory.
The `extra/` directory is equivalent to the instance root, which means to include other mod configs, you will have to place them inside `/config/defaultoptions/extra/config/`

## License

Default Options is licensed as All Rights Reserved. Read the license [here](https://mods.twelveiterations.com/permissions).