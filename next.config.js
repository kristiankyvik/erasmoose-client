require('dotenv').config()                                                        

const path = require('path')                                                      
const Dotenv = require('dotenv-webpack')                                          

module.exports = {                                                                
  webpack: (config) => {                                                          
    config.plugins = config.plugins || []                                         

    config.plugins = [                                                            
     ...config.plugins,                                                          

     // Read the .env file                                                       
     new Dotenv({                                                                
          path: path.join(__dirname, process.env.NODE_ENV === 'production' ?  '.env.production' : '.env'),                                       
          systemvars: true                                                          
        })                                                               
    ]    
    
    config.module.loaders = [
      {
        test: /\.css$/,
        include: /node_modules/,
        loaders: ['style-loader', 'css-loader'],
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true, // default is false
              sourceMap: true,
              importLoaders: 1,
              localIdentName: "[name]--[local]--[hash:base64:8]"
            }
          },
          "postcss-loader"
        ]
      }
    ]

    return config                                                                 
  }                                                                               
}  