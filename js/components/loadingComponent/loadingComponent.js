class LoadingComponent extends Component {
    constructor(appManager, parent) {
        super(appManager, parent);
        this.container.classList.add('loadingComponent');
        this.title = p({ className: 'loadingComponent_title', innerHTML: 'Loading...' }, this.container);
    }
}