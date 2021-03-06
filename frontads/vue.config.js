const BundleTracker = require("webpack-bundle-tracker");
const webpack = require('webpack');
//const path = require("path");
module.exports = {
    
    publicPath: '/static/',
    //publicPath: "http://0.0.0.0:8080/",
    outputDir: '../frontads/dist/',
    
    chainWebpack: config => {
        
        
        config.optimization
            .splitChunks(false)

        config
            .plugin('BundleTracker')
            .use(BundleTracker, [{filename: '../frontads/webpack-stats.json'}])

        config.resolve.alias
            .set('__STATIC__', 'static')

        config.devServer
            .public('http://0.0.0.0:8080')
            .host('0.0.0.0')
            .port(8080)
            .historyApiFallback(true)
            .hotOnly(true)
            .watchOptions({poll: 1000})
            .https(false)
            .headers({"Access-Control-Allow-Origin": ["https://api.erociti.com"] 
                     })
          },
          
                    configureWebpack: {
            plugins: [
              new webpack.ProvidePlugin({
                $: 'jquery',
                jquery: 'jquery',
                'window.jQuery': 'jquery',
                jQuery: 'jquery'
              })
            ],

      }




        };
