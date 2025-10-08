/**
 * Append a mod as a dependent to another mod.
 * @param {*} tp Templater Plugin instance.
 * @param {TFile} t Obsidian TFile object.
 * @param {string} mod_name Name of the mod to append as a dependent.
 */
const appendToDependents = (tp, t, mod_name) => {
	const h = tp.user.heading_helper;

	app.vault.process(t, (data) => {
		// Ensure the ## License heading exists.
		data = h.createHeadingIfNotExists(data, '## License');

		// Ensure the ## Relations heading exists.
		data = h.createHeadingIfNotExists(data, '## Relations', '## License');

		// Ensure the ### Dependents heading exists.
		data = h.createHeadingIfNotExists(data, '### Dependents', '## License');

		// Append the mod name to the ### Dependents heading.
		data = h.appendToHeading(data, '### Dependents', `- [[${mod_name}]]`);

		return data;
	});
};

module.exports = {
	appendToDependents,
};

