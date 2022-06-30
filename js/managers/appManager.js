/**
*
* constantes de estados
*
*/

const SHOWING_USERS = 1;
const SHOWING_POSTS = 2;
const SHOWING_NEW_POST = 3;
const SHOWING_NEW_COMMENT = 4;


/**
 *
 * Doc AppManager
 *
 * AppManager es la clase base de toda la aplicación donde inicializa cada objeto de tipo.
 * 
 */

class AppManager {


    /**
     *
     * Doc constructor AppManager
        *
        * netController
        * este se encarga de descargar los datos y parsearlos es decir usar los modelos para inicializar objetos 
        * de tipo de cada objeto que vienen en el JSON, luego uno de tipo dataController quien se encarga
        * de procesar los datos y darle forma en cómo se va a guardar, seguidamente uno de tipo uiController,
        *  este se encarga de la interfaz de la aplicación.
        * 
        * Finalmente cuando inicializa todos los objetos que son necesarios de la clase base o ayudantes de la 
        * clase base entonces llama al netController en su método de downloadUsersData que este método comienza 
        * a descargar los datos de los usuarios y a una descarga en cadena de todos los datos necesarios para 
        * poder mostrarlos en la interfaz.
     */



    constructor() {
        this.netController = new NetController(this);
        this.dataController = new DataController(this);
        this.uiController = new UIController(this); // se encarga de todo lo que es UI
        this.netController.downloadUsersData();
        this.owner = null;
        this.userSelected = null;
        this.postSelected = null;
    }


    /**
     *
     * Doc downloadDataCompleted()
     *
     * Este metodod de clase se encarga de que cuando todos los datos estan descargados muestra la interfaz y este
     * metodo es invocado en netController quien es quien determina cuando todos los datos estan descargados 
     * finalmente.
     * 
     */
    downloadDataCompleted() {
        this.uiController.showUI();
    }

}