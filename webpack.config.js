const path = require('path');

module.exports = {
    entry: './src/index.js', // Punto de entrada de la aplicacion
    output: {
        filename: 'bundle.js', // Nombre del archivo de salida
        path: path.resolve(__dirname, 'dist'), //Carpeta de salida
    },
    module: {
        rules: [
            {
                test: /\.css$/, // Regex para identidicar archivos CSS
                use: ['style-loader', 'css-loader'], // Loaders para procesar archivos
            },
            {
                test: /\.js$/, // Regex para identificar archivos JS
                exclude: /node_modules/, //Excluir la carpeta node_modules 
                use: {
                    loader: 'babel-loader', // Loader para llegar JS moderno a JS antiguo para que sea compatible con todos los navegadores
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
    devtool: 'source-map', //Generar source maps para facilitar la depuracion
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'), // Carpeta desde la cual el servidor agarrara los archivos
        compress: true, // Habilitar compresion gzip
        port: 9000, // Puerto del servidor de desarrollo
    },
};