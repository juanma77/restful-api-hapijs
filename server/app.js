const Hapi = require('hapi');
const routes = require('../routes/routes');

// Creamos una nueva instancia del servidor hapi 
const server = Hapi.server({
    port: 3100, // Obligatorio 
    host: 'localhost', // Obligatorio 
    app: {} // Opcional
});

const initServer = async () => {
    try{
        await server.register(routes); 
        await server.start();
        console.log(`Server running on port: ${server.info.uri}`);
        
    }catch(error){
        console.log('Error at starting the server')
    }
};

initServer();