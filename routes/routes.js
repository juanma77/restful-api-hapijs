/* Esto es un plugin; el name y register son 
necesarios; name debe ser único y register es 
quien contiene la lógica para registrar el plugin en 
nuestro servidor. */
module.exports = {
    name: 'ApiRoutes',
    register: async (server, options) =>{
        server.route([
            {
                method: 'GET',
                path: '/',
                handler: async (req, res) =>{
                    return 'Hello world!'
                }
            }
        ]);
    }
}