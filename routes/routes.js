/* Esto es un plugin; el name y register son 
necesarios; name debe ser único y register es 
quien contiene la lógica para registrar el plugin en 
nuestro servidor. */

/* En el segundo get recibimos parametros; la 
propiedad "path" tiene el nombre del parametro que
recibimos (name); cada parametro se declara entre llaves, 
mientras que el signo "?" nos dice que este parametro */
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
            },
            {
                method: 'GET',
                path: '/users/{name?}',
                handler: async (req, res) =>{
                    const name = (req.params.name) ? req.params.name : 'guess';
                    return `Hello ${name}!`;
                }
            }
        ]);
    }
}