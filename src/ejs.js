'use strict'

const ejs = require('ejs')

/**
 * Transform EJS to HTML.
 * @public
 * @param {String} filePath - Path to the EJS file being rendered.
 * @param {String} str - Contents of a EJS file.
 * @param {Object} data - EJS data used to render the file.
 * @returns {Promise<String>} HTML.
 */
module.exports = async function(filePath, str, data) {

	return ejs.render(str, data, {
		filename: filePath
	})

}