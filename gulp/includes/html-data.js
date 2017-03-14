'use strict';

const util = require('gulp-util');
const path = require('path');
const requireyml = require('require-yml')

// base path for the application
const basepath = path.dirname(path.dirname(__dirname));
const pagespath = basepath + '/assets/pages';

/**
 * fileData
 * @param {Object} file object from gulp pipeline
 * @return {Object} object of template data
 */
function fileData(file) {
  const pagePath = getPagePath(file.path);
  const pageID = genPageID(pagePath);
  const data = requireyml(basepath + '/assets/data');
  util.log(`Working on '${util.colors.cyan('dev:html')}':`, {
    data,
    pagePath,
    pageID,
  });
  return {
    data,
    pagePath,
    pageID,
  };
}

/**
 * genPageID
 * @param {string} pagePath page template path relative to `pages` folder
 * @return {string} canonical id for the page
 */
function genPageID(pagePath) {
  if (pagePath === 'index') {
    return 'page-front';
  }
  return 'page--' + pagePath
    .replace('/', '--')
    .replace('.', '-')
    .replace(/--index$/, '');
}

/**
 * getPagePath
 * @param {string} filePath file.path for the page template
 * @return {string} page template path relative to `pages` folder
 */
function getPagePath(filepath) {
  return filepath
    .replace(pagespath, '')
    .replace(/\.jinja$/, '')
    .replace(/^\//, '');
}

module.exports = {
  fileData,
  genPageID,
  getPagePath,
}
