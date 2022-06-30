class UserListComponent extends Component {
    constructor(appManager, parent) {
        super(appManager, parent);
        this.container.classList.add('userListComponent');
        this.showUsers();
    }

    showUsers() {
        var users = this.appManager.dataController.users;
        users.forEach(user => {

            /**
             *
             * Doc showUsers
             *
             * Aqui estamos creando componentes para guardar los usuarios en parte de la interfaz
             * 
             */


            var userComponent = new UserComponent(this.appManager, this.container, user);
        });
    }

}