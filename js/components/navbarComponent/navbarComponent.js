class NavBarComponent extends Component {
    constructor(appManager, parent) {
        super(appManager, parent);
        this.parent.removeChild(this.container);
        this.container = document.createElement('nav');
        this.container.classList.add('navbarComponent');
        this.parent.appendChild(this.container);
        this.backBtn = div({ onclick: this.onBackBtn.bind(this), className: 'navbarComponent_backBtn' }, this.container);
        this.backBtnIcon = image({ className: 'navbarComponent_backBtnIcon', src: 'src/images/icono-atras-boton.svg' }, this.backBtn);

        this.addBtn = div({ onclick: this.onAddBtn.bind(this), className: 'navbarComponent_addBtn' }, this.container);
        this.addBtnIcon = image({ className: 'navbarComponent_addBtnIcon', src: 'src/images/addIcon.svg' }, this.addBtn);

        this.hideBackBtn();
    }


    onBackBtn(e) {
        this.appManager.uiController.onBackBtn();
    }

    onAddBtn(e) {
        this.appManager.uiController.showFormComponent(SHOWING_NEW_POST);
    }

    showBackBtn() {
        this.backBtnIcon.classList.remove('hide');
        this.showAddBtn();

    }

    hideBackBtn() {
        this.backBtnIcon.classList.add('hide');
        this.addBtnIcon.classList.add('hide');
    }

    showAddBtn() {
        this.addBtnIcon.classList.remove('hide');
    }

    hideAddBtn() {
        this.addBtnIcon.classList.add('hide');
    }

}