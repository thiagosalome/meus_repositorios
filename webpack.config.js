const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry : "./src/main.js",
  output : {
    path : path.resolve(__dirname, "dist"),
    filename : "bundle.js"
  },
  module : {
    rules : [
      {
        test : /\.js$/,
        exclude : /node_modules/,
        use : {
          loader : "babel-loader",
          options : {
            presets : ["@babel/preset-env"]
          }
        }
      },
      {
        test : /\.scss$/,
        use : [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test : /\.pug$/,
        use : {
          loader : "pug-loader"
        }
      }
    ]
  },
  plugins : [
    new htmlWebpackPlugin({
      template : path.resolve(__dirname, "./src/index.pug"),
      filename : "index.html"
    })
  ],
  devServer : {
    contentBase : path.resolve(__dirname, "src"),
    open : true
  }
}

/* 
entry : Os arquivos que o webpack deve usar para começar a construir o gráfico de dependẽncia.

output : Informa ao webpack onde emitir os bundles que ele cria e como nomear esses arquivos
  path : Para onde o pacote será emitido
  filename : Nome do pacote

loaders : Permite que o webpack processe outros tipos de arquivos e os converta em módulos válidos
  test : identifica o formato dos arquivos que serão transformados.
  use : identifica o loader que será utilizado para a transformação

plugins : Usados para executar uma ampla gama de tarefas

*/