
/**
 *
 * Doc UIController
 *
 *  Esta clase se encarga de apagar los componentes de mostrar cuando los datos aún se están
 *  cargando y procesando.
 * 
 */


class UIController {


    /**
     *
     * Doc Contructor UIController
     *
     * El constructor de UIController vuelve a recibir por parámetro el objeto de tipo appManager
     * es decir, recibe una referencia de la clase base que es la que se encarga de tener referencia
     * de todas las demás clases por así decirlo, es la clase main.
     * 
     * Tiene 3 atributos primero el appManager donde se guarda por referencia el objeto de appManager
     * 
     * El loadingComponent que es el componente que se va a mostrar mientras se están procesado
     * los datos para luego mostrarlos.
     * 
     * Finalmente otro atributo que es el mainComponent que guarda una referencia del MainComponent
     * sin embargo está en null porque se debe primero cargar todos los datos para luego crearlo.
     */

    constructor(appManager) {
        this.appManager = appManager;
        this.loadingComponent = new LoadingComponent(null, document.body);
        this.mainComponent = null;
        this.state = SHOWING_USERS;
    }


    /**
     *
     * Doc showUI
     *
     * El metodo showUI se encarga de que cuando todo se termina de procesar se invoca para que 
     * apague el loadingComponent bajo su método hide() y cree ahora si el mainComponent de este 
     * objeto pasándole por parámetro el parent es decir el document.body para que se construya
     * en el body del html.
     */

    showUI() {
        this.loadingComponent.hide();
        this.mainComponent = new MainComponent(this.appManager, document.body);
    }

    onBackBtn() {

        switch (this.state) {
            case SHOWING_USERS:
                console.log('Already SHOWING_USERS');
                break
            case SHOWING_POSTS:
                this.appManager.userSelected = null;
                this.mainComponent.hideBackBtn();
                this.state = SHOWING_USERS;
                this.mainComponent.hidePostListComponent();
                break;
            case SHOWING_NEW_POST:
                this.state = SHOWING_POSTS;
                this.mainComponent.showBackBtn();
                this.mainComponent.hideFormComponent();
                this.mainComponent.refreshPostListComponent();
                break;
            case SHOWING_NEW_COMMENT:
                this.appManager.postSelected = null;
                this.state = SHOWING_POSTS;
                this.mainComponent.hideFormComponent();
                this.mainComponent.refreshPostListComponent();
                break; 
            default:
                break;
        }


    }

    showPostListComponent(user) {
        this.appManager.userSelected = user;
        this.state = SHOWING_POSTS;
        this.mainComponent.showBackBtn();
        this.mainComponent.showPostListComponent(user);
    }

    showFormComponent(newState) {
        this.state = newState;
        this.mainComponent.showFormComponent();

    } 3


}