class NetController {

    /**
     *
     * Esta clase permite poder descargar la información del servidor traer todos los datos que vamos a mostrar
     * en la interfaz y adicional parsear dichos datos.
     * 
     * El constructor tiene una referencia a la clase AppManager que es el manejador principal y la clase NetController
     * es un ayudante de AppManager por lo tanto, es un requisito que esta clase tenga una referencia a la clase AppManager
     *
     */



    /**
     *
     * El constructor recibe e inicializa a appManager para tener una referencia de AppManager en NetController
     * y por ultimo tiene un atributo url que basicamente tiene la direccion de los datos en la base de datos.
     *
     */


    constructor(appManager) {
        this.appManager = appManager;
        this.url = 'https://thebeehive2022-179d4-default-rtdb.firebaseio.com/data/';
    }


    /**
     *
     * Doc downloadUsersData()
     * Básicamente este método lo que hace es descargar los datos de los usuarios
     * usando el protocolo httpRequest con el metodo GET y los parsea
     * en objetos literales JavaScript 
     *
     */



    downloadUsersData() {
        var request = new XMLHttpRequest();
        request.open('GET', `${this.url}users.json`);
        request.onreadystatechange = this.onUsersDataDownloaded.bind(this);
        request.send();
    }


    /**
         *
         * Doc onUsersDataDownloaded()
         * 
         * Este método lo que realiza es básicamente ejecutarse en los 3 estados posibles de onreadystatechange
         * el cual es un método del objeto request y avisa los estados de la petición que se realizó al servidor
         * 
         * Dado que el método onreadystatechange se ejecuta al menos 3 veces durante 3 estados de la petición
         * el método onUsersDataDownloaded que es quien se está ejecutando cuando hay cada cambio en la petición
         * valida si en dicho cambio en la petición al servidor el objeto que devuelve onreadystatechange al completarse
         * tiene 2 atributos que nos indica si de verdad los datos están descargados de forma correcta primero 
         * verifica si el atributo readyState === 4 es decir la petición termino y vuelve a validar si ese objeto
         * en su atributo status === 200 es decir la petición y lo que devuelve fue realizado de forma exitosa.
         * 
         * Seguidamente cuando se completa la validacion la variable usersData lo que tiene es un array de objetos 
         * que se obtuvieron del request.respondeText que es ahí donde trae los datos pegados el response del http
         * request y los parsea en objetos literales JavaScript, y los guarda en la variable usersData.
         * 
         * Finalmente lo que hace es iterar la variable con los arrays con la estructura de ciclo forEach y 
         * esta función lo que hace es recibir otra función y en este caso está recibiendo una función flecha
         * y está pasando cada elemento del array mendiante el nombre de userData.
         * 
         * Seguidamente llama al modelo de datos User que no es mas que una clase recibiendo parámetros de como 
         * quiero que mi estructura de objeto usuario sea y le paso los datos mediante userData (el elemento que)
         * pase por parámetro y es el que se está iterando en el ciclo y le doy la nomenclatura de . lo que 
         * necesito es decir .id , . name, .phone etc etc justamente como realice el modelo de datos y cuando 
         * crea el objeto paso por la referencia de appManager de esta clase es decir netController y luego paso 
         * a dataController quien es quien se encarga de manejar los datos ya parseados y llama al método addUser
         * y le pasa el objeto usuario para agregarlo a un arreglo de objetos de tipo usuario.
         * 
          * Finalmente cuando termina de hacer el proceso de guardar todos los usuarios en el array invoca el siguiente
         * metodo de descarga de datos el cual corresponde a los post de los usuarios y este metodo tiene el nombre de
         * downloadPostsData()
         *
    */


    onUsersDataDownloaded(e) {
        var request = e.target;
        if (request.readyState === 4) {
            if (request.status === 200) {
                var usersData = JSON.parse(request.responseText);
                usersData.forEach((userData) => {
                    var user = new User(userData.id, userData.name, userData.phone, userData.username, userData.website, userData.avatar, userData.isOwner, userData.email);
                    this.appManager.dataController.addUser(user);

                    if (userData.isOwner) {
                        this.appManager.owner = user;
                    }

                });
                this.downloadPostsData();
            }
        }
    }


    /**
     *
     * Doc downloadPostsData() 
     * 
     * Básicamente este método lo que hace es descargar los datos de los Posts realizados
     * por cada usuario en la aplicación usando el protocolo httpRequest con el método GET
     * se obtiene los datos del servidor e invoca el método onPostsDataDownloaded en 
     * cada status del método onreadystatechange del objeto request como antes mencionado
     * invoca el método cada vez que se completa un status y ese método realiza las 
     * validaciones correspondientes.
     * 
     */

    downloadPostsData() {
        var request = new XMLHttpRequest();
        request.open('GET', `${this.url}posts.json`);
        request.onreadystatechange = this.onPostsDataDownloaded.bind(this);
        request.send();
    }

    /**
          *
          * Doc onPostsDataDownloaded()
          * 
          * Este metodo primero lo que hace es usar el target y traer todos los datos que vienen en el atributo target de e es decir de evento el parámetro 
          * y vuelve a repetir las validaciones de antes mencionadas cuando se completan dichas validaciones trae los datos
          * que están pegados del request.responseText y los parsea en objetos literales JavaScripty los guarda en postsData
          * 
          * 
          * postsData lo que tiene ahora es básicamente un arreglo de objetos JavaScript y los comienza a recorrer mediante 
          * la estructura forEach que recibe una función flecha donde está iterando cada elemento del arreglo llamado bajo
          * el nombre de "postData" y usando el modelo de Post que nuevamente (Un modelo es una forma de estructura de como
          * quiero que mi objeto sea) y lo uso para inicializar cada objeto de tipo Post,
          * 
          * Y finalmente después de que voy inicializando cada objeto pasándole por parámetros al constructor de la forma
          * postData (el elemento que está iterando) . lo que necesito en este caso sería postData.id, postData.body etc 
          * después de que va inicializando cada objeto lo guarda en la variable post.
          *  
          * Finalmente va llamando por la referencia que se está pasando entre objetos en este caso sería this.appManager.dataController.addPost(post)
          * this.appManager es el atributo de esta clase que tiene un objeto inicializado de tipo appManager luego pasa al siguiente atributo 
          * el cual sería dataController y ese atributo es un objeto de tipo dataController quien es quien se encarga de manejar toda 
          * la información de la aplicación y se invoca el método addPost para que lo valla agregando a la lista de post de cada usuario.
          *
    */

    onPostsDataDownloaded(e) {
        var request = e.target;
        if (request.readyState === 4) {
            if (request.status === 200) {
                var postsData = JSON.parse(request.responseText);

                postsData.forEach(postData => {
                    var post = new Post(postData.id, postData.body, postData.title, postData.userId);
                    this.appManager.dataController.addPost(post);
                });
                this.downloadCommentsData();
            }
        }
    }


    /**
     *
     * Doc downloadCommentsData()
     *
     * Aqui se repite el mismo proceso explicando anteriormente sobre el protocolo https request
     */

    downloadCommentsData() {
        var request = new XMLHttpRequest();
        request.open('GET', `${this.url}comments.json`);
        request.onreadystatechange = this.onCommentsDataDownloaded.bind(this);
        request.send();
    }

    /**
         *
         * Doc onCommentsDataDownloaded()
         *
         * Aquí se repite el mismo proceso explicando anteriormente sobre
         * como este método permite parsear los datos del request y va 
         * generando objetos de tipo comment con el modelo y los va a 
         * agregando a un array de comments
         * 
         * Aquí nada mas es un poco diferente porque después de que termina
         * de hacer el proceso llama a un método de downloadDataCompleted 
         * que básicamente es un método que cuando todos los datos se terminaron
         * de parsear y guardar los modelos se empieza a preparar la interfaz. 
    */

    onCommentsDataDownloaded(e) {
        var request = e.target;
        if (request.readyState === 4) {
            if (request.status === 200) {
                var commetsData = JSON.parse(request.responseText);

                commetsData.forEach(commentData => {
                    var comment = new Comment(commentData.id, commentData.body, commentData.beeId, commentData.name, commentData.postId);
                    comment.setUser(this.appManager.dataController.getUserByBeeId(comment.beeId));
                    this.appManager.dataController.addComment(comment);
                });
                this.appManager.downloadDataCompleted();
            }
        }
    }

}