class CommentComponent extends Component {
    constructor(appManager, parent, comment) {
        //UserComponent
        super(appManager, parent);
        this.comment = comment;
        this.container.classList.add("commentComponent");

        this.name = p(
            {
                className: "commentComponent_name",
                innerHTML: this.comment.name,
            },
            this.container
        );
        this.body = p(
            { className: "commentComponent_body", innerHTML: this.comment.body },
            this.container
        );

        var userContainer = div({
            className: "commentComponent_userContainer"
        }, this.container);


        this.imageContainer = div({ className: 'commentComponent_imageContainer' }, userContainer);
        this.image = image({ className: 'commentComponent_image', src: this.comment.user.avatar }, this.imageContainer);

        var userInfoContainer = div({
            className: 'commentComponent_userInfoContainer'
        }, userContainer)

        this.name = p({
            className: 'commentComponent_owner_name', innerHTML: this.comment.user.name
        }, userInfoContainer);

        this.email = p({
            className: 'commentComponent_email', innerHTML: this.comment.user.email
        }, userInfoContainer);
    }
}
