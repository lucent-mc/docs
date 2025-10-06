/**
 * Get an array of paragraphs (including the heading) with the provided heading.
 * @param {string} data The data to search through.
 * @param {string} heading The heading to search for.
 * @returns {string[]} An array of paragraphs with the provided heading.
 */
const getHeadings = (data, heading) => {
	// Check what level the heading is, default to 1 if no # are included in the heading string.
	const level = (heading.match(/#/g) || ['#']).length;

	// Get the heading label without the preceding # characters.
	const heading_label = heading.split(/^#{1,6} /gm)[1];

	// Regex to match an entire paragraph with the provided heading.
	const re = new RegExp(String.raw`#{${level}} ${heading_label}\n[\s\S]*?(?=\n?#{1,${level}} |$)`, 'g');

	const match = data.match(re);

	return match;
};

/**
 * Check if a heading exists in the data, if not, create one.
 * If `before_heading` is provided, the heading will be inserted before that heading..
 * @param {string} data The data to search through.
 * @param {string} heading The heading to search for, or create.
 * @param {string} before_heading The heading to insert the new heading before, if it doesn't exist.
 * @returns {string} The updated data with the new heading.
 */
const createHeadingIfNotExists = (data, heading, before_heading) => {
	const headings = getHeadings(data, heading);

	if (!headings || headings.length === 0) {
		if (before_heading) {
			const before_headings = getHeadings(data, before_heading);

			if (!before_headings || before_headings.length === 0) {
				throw new Error(`The heading ${before_heading} does not exist in the provided data.`);
			}

			// Insert the new heading before the provided heading.
			data = data.replace(before_heading, `${heading}\n\n\n${before_heading}`);
		} else {
			data = data + `\n\n${heading}\n\n\n`;
		}
	}

	return data;
};

/**
 * Append text to a heading in a provided string.
 * @param {string} data The data to process.
 * @param {string} heading The heading to append text to.
 * @param {string} text The text to append to the heading.
 */
const appendToHeading = (data, heading, text) => {
	const headings = getHeadings(data, heading);

	if (!headings || headings.length === 0) {
		throw new Error(`The heading ${heading} does not exist in the provided data.`);
	}

	for (const heading of headings) {
		data = data.replace(heading, heading + `${text}\n`);
	}

	return data;
};

module.exports = {
	getHeadings,
	appendToHeading,
	createHeadingIfNotExists,
};
