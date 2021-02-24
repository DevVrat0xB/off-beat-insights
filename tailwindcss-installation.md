<!-- Link to guide article -->

https://medium.com/swlh/angular-configure-tailwindcss-6816f7cc6f8e

<!-- Summary -->

1. Install (as dev-dependencies) the following:
   1.1 @angular-builders/custom-webpack
   1.2 tailwindcss
   1.3 postcss
   1.4 postcss-scss
   1.5 postcss-loader (^4.2.0, else you'll get "this.getOptions is not a function" error.
   1.6 postcss-import
   1.7 autoprefixer

2. Create the following configuration files (at root level is preferred):
   2.1 tailwind.config.js (by 'npx tailwind init')
   2.2 webpack.config.js
   2.3 webpack.config.prod.js

3. Copy and paste the following content in webpack.config.js and webpack.config.prod.js
   module.exports = {
   module: {
   rules: [
   {
   test: /\.scss$/,
   use: [{
   loader: 'postcss-loader',
   options: {
   postcssOptions: {
   syntax: "postcss-scss",
   plugins: [
   'postcss-import',
   'tailwindcss',
   'autoprefixer',
   ],
   }
   },
   }]
   },
   ],
   },
   };

4. import the following in the main style file (whatever it may be. E.g. styles.scss)
   @import 'tailwindcss/base';
   @import 'tailwindcss/components';
   @import 'tailwindcss/utilities';

5. Modify the angular.json file as follow:
   5.1 Use custom-webpack as the builder.
   "builder": "@angular-builders/custom-webpack:browser"
   5.2 Mention the webpack configuration file in the "options" key.
   "customWebpackConfig" is one of the property/key of the "options" key.
   "customWebpackConfig": {
   "path": "./webpack.config.js"
   }
   5.3 Mention the webpack configuration file (production) in the "configurations.production" key.
   "customWebpackConfig" is one of the property/key of the "configurations.production" key.
   "customWebpackConfig": {
   "path": "./webpack.config.prod.js"
   }
   5.4 Use the custom-webpack in the "serve" key as well.
   "builder": "@angular-builders/custom-webpack:browser"
