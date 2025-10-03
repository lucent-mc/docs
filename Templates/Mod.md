<%* 
let mod_name = await tp.system.prompt("Name of the Mod");
let mod_url = await tp.system.prompt("URL to Modrinth page");
let mod_summary = await tp.system.prompt("Mod summary on Modrinth");

let license_types = ["ARR", "GPL", "AGPL", "LGPL", "Apache", "Polyform", "MPL", "MIT", "Unlicense", "Other"];

let license_arr = ["All Rights Reserved"];
let license_cc = ["CC BY", "CC BY-SA", "CC BY-NC", "CC BY-NC-SA", "CC BY-ND", "CC BY-NC-ND", "CC0"];
let license_gpl = ["GPL-3.0-or-later", "GPL-3.0-only", "GPL-2.0-or-later", "GPL-2.0-only", "GPL-1.0-or-later", "GPL-1.0-only"];
let license_lgpl = ["LGPL-3.0-or-later", "LGPL-3.0-only", "LGPL-2.1-or-later", "LGPL-2.1-only", "LGPL-2.0-or-later", "LGPL-2.0-only"];
let license_agpl = ["AGPL-3.0-or-later", "AGPL-3.0-only"];
let license_apache = ["Apache-2.0", "Apache-1.1", "Apache-1.0"];
let license_polyform = ["PolyForm-Shield", "PolyForm-Strict", "PolyForm-Noncommercial", "PolyForm-Free-Trial", "PolyForm-Internal-Use", "PolyForm-Small-Business", "PolyForm-Perimeter"]
let license_mpl = ["MPL-2.0", "MPL-1.1", "MPL-1.0"];
let license_mit = ["MIT"];
let license_unlicense = ["Unlicense"];
let license_other = ["Other"];

let license_variants = {
	"ARR": license_arr,
    "CC": license_cc,
    "GPL": license_gpl,
    "LGPL": license_lgpl,
    "AGPL": license_agpl,
    "Apache": license_apache,
    "Polyform": license_polyform,
    "MPL": license_mpl,
    "MIT": license_mit,
    "Unlicense": license_unlicense,
    "Other": license_other
}

let mod_license_type = await tp.system.suggester(license_types, license_types, false, "Which license does this mod use?")
let mod_license_variant;

if (license_variants[mod_license_type].length == 1) {
    mod_license_variant = license_variants[mod_license_type][0]
} else {
    mod_license_variant = await tp.system.suggester(license_variants[mod_license_type], license_variants[mod_license_type], false, "Which variant?");
}

let mod_license_url = await tp.system.prompt("URL to License");

let mc_versions = ["1.21.9", "1.21.8", "1.21.7", "1.21.6", "1.21.5", "1.21.4", "1.21.3", "1.21.2", "1.21.1", "1.21"]

let mod_versions = (await tp.system.multi_suggester(mc_versions, mc_versions, false, "Which versions does this mod work on?")).map((v) => `"${v}"`);

let mod_use_case = await tp.system.prompt("How is this mod used in the mod pack?");

let mod_dependencies = await tp.system.multi_suggester(
	(item) => item.basename,
	tp.app.vault.getMarkdownFiles().filter((file) => file.parent?.path === 'Mods'),
);
%>---
title: <% mod_name %>
url: <% mod_url %>
summary: <% mod_summary %>
license: <% mod_license_variant %>
license_url: <% mod_license_url %>
supported_versions: 
  - <% mod_versions.join("\n  - ") %>
depends_on:
  -  <% mod_dependencies.map((f) => `"[[${f.basename}]]"`).join("\n  - ") %>
---

# <% mod_name %>

Find <% mod_name %> on [Modrinth](<% mod_url %>).

> [!INFO]+ Summary
> From Modrinth: *<% mod_summary %>*

We use <% mod_name %> <% mod_use_case %><% tp.file.cursor() %>

## Usage

<% mod_name %> runs without any user interaction.

## Relations

### Dependencies

- <% mod_dependencies.map((f) => `[[${f.basename}]]`).join("\n  - ") %>

### Dependants

## License

<% mod_name %> is licensed under <% mod_license_variant %>. Read the license [here](<% mod_license_url%>).

<%* await tp.file.rename(mod_name); %>