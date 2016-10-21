/**
 * Created by ryanm on 21/10/2016.
 */

const fs = require('fs');

// relocate default config
fs.writeFileSync(
  'node_modules/semantic-ui-less/theme.config',
  "@import '../../app/semantic/theme.config';\n",
  'utf8'
);

// fix well known bug with default distribution
fixFontPath('node_modules/semantic-ui-less/themes/default/globals/site.variables');
fixFontPath('node_modules/semantic-ui-less/themes/flat/globals/site.variables');
fixFontPath('node_modules/semantic-ui-less/themes/material/globals/site.variables');

function fixFontPath(filename) {
  let content = fs.readFileSync(filename, 'utf8');
  let newContent = content.replace(
    "@fontPath  : '../../themes/",
    "@fontPath  : '../../../themes/"
  );
  fs.writeFileSync(filename, newContent, 'utf8');
}
