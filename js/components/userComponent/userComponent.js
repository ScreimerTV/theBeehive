class UserComponent extends Component {
    constructor(appManager, parent, user) {
        //UserComponent
        super(appManager, parent);
        this.user = user;
        this.container.classList.add('userComponent');
        this.container.onclick = this.onSelected.bind(this);

        user.isOwner ? this.container.classList.add('owner') : this.container.classList.remove('owner');

        this.col1 = div({ className: 'userComponent_col1' }, this.container);
        this.col2 = div({ className: 'userComponent_col2' }, this.container);



        this.imageContainer = div({ className: 'userComponent_imageContainer' }, this.col1);
        this.avatar = image({ className: 'userComponent_avatar', src: this.user.avatar }, this.imageContainer);


        this.name = p({
            className: 'userComponent_name', innerHTML: `${user.name}`
        }, this.col2);
        this.username = p({ className: 'userComponent_username', innerHTML: `<b>Username:</b> ${user.username}` }, this.col2);
        this.email = p({
            className: 'userComponent_email', innerHTML: `<b>Email:</b> ${user.email}`
        }, this.col2);
        this.phone = p({ className: 'userComponent_phone', innerHTML: `<b>Phone:</b> ${user.phone}` }, this.col2);
        this.website = p({ className: 'userComponent_website', innerHTML: `${user.website}` }, this.col2);
    }

    onSelected(e) {
        this.appManager.uiController.showPostListComponent(this.user);
    }

}