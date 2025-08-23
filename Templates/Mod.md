<%* 
let mod_name = await tp.system.prompt("Name of the Mod");
let mod_url = await tp.system.prompt("URL to Modrinth page");
let mod_summary = await tp.system.prompt("Mod summary on Modrinth");

let license_types = ["ARR", "GPL", "AGPL", "LGPL", "Apache", "PolyForm", "MPL", "MIT", "Unlicense", "Other"];

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
    "CC": license_cc,
    "GPL": license_gpl,
    "LGPL": license_lgpl,
    "AGPL": license_agpl,
    "Apache": license_apache,
    "PolyForm": license_polyform,
    "MPL": license_mpl,
    "MIT": license_mit,
    "Unlicense": license_unlicense,
    "Other": license_other
}

let mod_license_type = await tp.system.suggester(license_types, license_types)

if (license_variants[mod_license_type].length == 1) {
    mod_license_variant = license_variants[mod_license_type][0]
} else {
    mod_license_variant = await tp.system.suggester(license_variants[mod_license_type], license_variants[mod_license_type])
}

let mod_licenseurl = await tp.system.prompt("URL to License")

%>
# <% mod_name %>

Find <% mod_name %> on [Modrinth](<% mod_url %>).

> [!NOTE] From Modrinth
> *<% mod_summary %>*

We use <% mod_name %> to <% tp.file.cursor() %>.

## Usage

How to use <% mod_name %> for the relevant mod pack.

## License

<% mod_name %> is licensed under <% mod_license_variant%>. Read the license [here](<% mod_licenseurl %>).

<%* await tp.file.rename(mod_name); %>