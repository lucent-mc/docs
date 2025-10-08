---
title: Mod
authors: mia-riezebos
description:
type:
created: 2025-08-23T11:58:33+02:00
modified: 2025-10-07T22:39:36+02:00
license: CC BY-SA 4.0
license_url: https://github.com/lucent-mc/docs/blob/dev/content/LICENSE
tags: template
---

This is an Obsidian Templater template file that can be used to quickly add a mod to the `Mods/` folder.

<%_* tR = "" _%>  
<%_*  
// Ask the user for the name of the mod  
let mod_name = await tp.system.prompt('Name of the Mod');

// Ask the user for the author of the mod  
let mod_author = await tp.system.prompt('Author of the Mod');

// Ask the user for the mod description  
let mod_url = await tp.system.prompt('URL to Modrinth page');

// Ask the user for the mod summary as it appears on Modrinth  
let mod_summary = await tp.system.prompt('Mod summary as it appears on Modrinth');

// Define different licenses  
let license_types = ['ARR', 'CC', 'GPL', 'AGPL', 'LGPL', 'Apache', 'Polyform', 'MPL', 'MIT', 'Unlicense', 'Other'];

// Define different licenses' variants  
let license_arr = ['All Rights Reserved'];  
let license_cc = [  
'CC BY 4.0',  
'CC BY-SA 4.0',  
'CC BY-NC 4.0',  
'CC BY-NC-SA 4.0',  
'CC BY-ND 4.0',  
'CC BY-NC-ND 4.0',  
'CC0 1.0',  
];  
let license_gpl = [  
'GPL-3.0-or-later',  
'GPL-3.0-only',  
'GPL-2.0-or-later',  
'GPL-2.0-only',  
'GPL-1.0-or-later',  
'GPL-1.0-only',  
];  
let license_lgpl = [  
'LGPL-3.0-or-later',  
'LGPL-3.0-only',  
'LGPL-2.1-or-later',  
'LGPL-2.1-only',  
'LGPL-2.0-or-later',  
'LGPL-2.0-only',  
];  
let license_agpl = ['AGPL-3.0-or-later', 'AGPL-3.0-only'];  
let license_apache = ['Apache-2.0', 'Apache-1.1', 'Apache-1.0'];  
let license_polyform = [  
'PolyForm-Shield',  
'PolyForm-Strict',  
'PolyForm-Noncommercial',  
'PolyForm-Free-Trial',  
'PolyForm-Internal-Use',  
'PolyForm-Small-Business',  
'PolyForm-Perimeter',  
];  
let license_mpl = ['MPL-2.0', 'MPL-1.1', 'MPL-1.0'];  
let license_mit = ['MIT'];  
let license_unlicense = ['Unlicense'];  
let license_other = ['Other'];

// dict of licenses and their variants  
let license_variants = {  
 ARR: license_arr,  
 CC: license_cc,  
 GPL: license_gpl,  
 LGPL: license_lgpl,  
 AGPL: license_agpl,  
 Apache: license_apache,  
 Polyform: license_polyform,  
 MPL: license_mpl,  
 MIT: license_mit,  
 Unlicense: license_unlicense,  
 Other: license_other,  
};

// Ask the user for the license of the mod  
let mod_license_type = await tp.system.suggester(  
 license_types,  
 license_types,  
 false,  
 'Which license does this mod use?',  
);

let mod_license_variant;

// If the license has more than one variant, ask the user to choose one.  
if (license_variants[mod_license_type].length == 1) {  
 mod_license_variant = license_variants[mod_license_type][0];  
} else {  
 mod_license_variant = await tp.system.suggester(  
 license_variants[mod_license_type],  
 license_variants[mod_license_type],  
 false,  
 'Which variant?',  
 );  
}

// Ask the user for the URL to the mod's license  
let mod_license_url = await tp.system.prompt('URL to License');

// Define Minecraft versions  
let mc_versions = ['1.21.9', '1.21.8', '1.21.7', '1.21.6', '1.21.5', '1.21.4', '1.21.3', '1.21.2', '1.21.1', '1.21'];

// Ask the user for the Minecraft versions that the mod works on  
let mod_versions = await tp.system.multi_suggester(  
 mc_versions,  
 mc_versions,  
 false,  
 'Which Minecraft versions does this mod work on?',  
);

// Ask the user to specify which of the Lucent mod packs this mod is used in.  
// TODO

// Ask the user to specify how the mod is used in the mod pack  
let mod_use_case = await tp.system.prompt('How is this mod used in the mod pack?');

// Ask the user for the mod's dependencies  
let mod_dependencies = await tp.system.multi_suggester(  
 (item) => item.basename,  
 tp.app.vault.getMarkdownFiles().filter((file) => file.parent?.path === 'Content'),  
 false,  
 'Does this mod depend on any other mods?',  
);

if (mod_dependencies.length > 0) {  
 for (const mod of mod_dependencies) {  
 tp.user.mod_helper.appendToDependents(tp, mod, mod_name);  
 }  
}  
-%>
---
title: <% mod_name %>  
author: <% mod_author %>  
description: <% mod_summary %>  
url: <% mod_url %>  
type: mod  
license: <% mod_license_variant %>  
license_url: <% mod_license_url %>  
supported_versions:  
<%*  
for (const version of mod_versions) {  
 tR += `  - "${version}"\n`  
}  
%>  
<%_* if (mod_dependencies.length > 0) { -%>  
depends_on:  
<%*  
 for (const dependency of mod_dependencies) {  
 tR += `  - "[[${dependency.basename}]]"\n`  
 }  
_%>  
<%* } -%>
---

_<% mod_summary %>_

> by <% mod_author %>

Find <% mod_name %> on [Modrinth](<% mod_url %>).

---

We use <% mod_name %> <% mod_use_case %><% tp.file.cursor() %>

## Usage

<% mod_name %> runs without any user interaction.

## Config

<% mod_name %>'s defaults are sufficient so we provide no config overrides.

<%* if (mod_dependencies.length > 0) { %>

## Relations

## Dependencies

<%*  
 for (const dependency of mod_dependencies) {  
 tR += `  - [[${dependency.basename}]]\n`  
 }  
%>  
<%_* } -%>

## License

<% mod_name %> is licensed under <% mod_license_variant %>. Read the license [here](<% mod_license_url%>).

<%*  
await tp.file.rename(mod_name);  
%>
