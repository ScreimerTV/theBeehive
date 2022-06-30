/**
         *
         * Doc DataController
         *
         * En la clase DataController se va a procesar todos los datos enviados del netController
         * de tal forma que, aquí se procesa la lógica de que voy a realizar con los datos y como
         * los voy a manejar y bajo que condicionales se van a guardar es decir aquí se filtran 
         * los datos enviados desde la clase NetCotroller
    */

class DataController {


    /**
     *
     * Doc Constructor
     *
     * Aqui el constructor de DataController vuelve a inicializar un objeto de tipo AppManager recibiendo
     * por parametro un objeto de tipo AppManager esto para tener al referencia en DataController de 
     * AppManager y ademas tiene como atributo un arreglo de usuarios.
     */

    constructor(appManager) {
        this.appManager = appManager;
        this.users = [];
    }


    /**
     *
     * Doc addUser
     *
     * Aquí el método de clase addUser se encarga de agregar un nuevo objeto de tipo usuario
     * que le están pasando por parámetro al arreglo de dataController de objetos de tipo 
     * usuario.
     * 
     */
    addUser(user) {
        this.users.push(user);
    }


    /**
     *
     * Doc addPost
     *
     * Aquí el método de Post está recibiendo un objeto de tipo Post por parametro y 
     * lo está procesando, verificando si el userId del post corresponde al user.id de
     * este usuario que se está procesando en la línea 54 es decir. No podemos guardar
     * un post que no sea del usuario porque si no entonces no tenemos una estructura de 
     * datos válida para saber que post es de cada usuario.
     * 
     * Por lo tanto de esta forma, el antes de guardar el post en el arreglo de post de cada
     * usuario primero se verifica si ese post corresponde a ese usuario y si es así entonces
     * se agrega al array de post de ese usuario.
     * 
     */

    addPost(post) {
        for (let i = 0; i < this.users.length; i++) {
            const user = this.users[i];
            if (post.userId === user.id) {
                user.addPost(post);
                return;
            }
        }
    }


    /**
         *
         * Doc addComment
         *
         * El método addComment está recibiendo por parámetro un objeto de tipo comment que 
         * fue instanciado y pasado en netController ya que netController está instanciando 
         * objetos al recibirlos con los modelos de datos en este caso netController esta 
         * invocando el método addComment y le pasa un objeto de tipo comement y DataController
         * está procesando los datos.
         * 
         * En este caso se están procesando de la forma en que como cada post tiene comentarios
         * hechos por diferentes usuarios entonces al recibir el objeto de tipo comement viene
         * con ciertos atributos definidos anteriormente en el modelo entonces hacemos un ciclo
         * principal donde está recorriendo el arreglo de usuarios y obtiene un usuario del
         * arreglo de usuarios y lo guarda en una constante y luego con ese usuario se procesa 
         * la información de la siguiente forma.
         * 
         * Se hace un nuevo ciclo que en este caso va a recorrer los posts de los usuarios y 
         * va a revisar si para cada post de cada usuario su id coincide con el id del comment.postId
         * ósea es decir va a verificar si el comentario corresponde a ese post y si es así entonces 
         * va a guardar el post en el arreglo de post de los comentarios de cada usuario.
         * 
         */

    addComment(comment) {
        for (let i = 0; i < this.users.length; i++) {
            const user = this.users[i]
            for (let j = 0; j < user.posts.length; j++) {
                const post = user.posts[j];
                if (post.id === comment.postId) {
                    post.addComment(comment);
                    return;
                }
            }

        }
    }

    getUserByEmail(email) {
        for (let i = 0; i < this.users.length; i++) {
            const user = this.users[i];

            if (user.email === email) {
                return user;
            }

        }

        return null;

    }

    getUserByBeeId(beeId) {
        for (let i = 0; i < this.users.length; i++) {
            const user = this.users[i];

            if (user.id === beeId) {
                return user;
            }

        }

        return null;

    }


}