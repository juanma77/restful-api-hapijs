/* Esto es un plugin; el name y register son 
necesarios; name debe ser único y register es 
quien contiene la lógica para registrar el plugin en 
nuestro servidor. */

/* En el segundo get recibimos parametros; la 
propiedad "path" tiene el nombre del parametro que
recibimos (name); cada parametro se declara entre llaves, 
mientras que el signo "?" nos dice que este parametro */

/* En el método de post recibimos parametros a través de 
req.payload.nombre_de_parametro; data es el objeto que 
incluimos en la respuesta */
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
            },
            {
                method: 'POST',
                path: '/users',
                handler: async (req, res) =>{
                    const newUser = {
                        name: req.payload.name,
                        lastName: req.payload.lastName
                    };
                    return res.response({
                        data: newUser
                    }).type('application/json');
                }
            },
            {
                method: 'PUT',
                path: '/users/{id}',
                handler: async (req,res) =>{
                    const newUser = {
                        name: req.payload.name,
                        lastName: req.payload.lastName
                    };
                    return res.response({
                        data: newUser,
                        message: `User ID: ${req.params.id} updated successfully!`
                    }).type('application/json');
                }
            },
            {
                method: 'DELETE',
                path: '/users/{id}',
                handler: async (req, res) =>{
                    return res.response({
                        message: `User ID: ${req.params.id} deleted successfully!`
                    }).type('application/json');
                }

            }
        ]);
    }
}