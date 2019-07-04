var sass = require('node-sass');
sass.render({
  includePaths : [
    "sass/app.scass"
  ],
  []
}, function(err, result) { /*...*/ });
// OR
// var result = sass.renderSync({
//   data: scss_content
//   [, options..]
// });