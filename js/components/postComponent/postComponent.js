class PostComponent extends Component {
    constructor(appManager, parent, post) {
        //UserComponent
        super(appManager, parent);
        this.post = post;
        this.container.classList.add('postComponent');

        this.title = p({
            className: 'postComponent_title', innerHTML: post.title
        }, this.container);
        this.body = p({ className: 'postComponent_body', innerHTML: post.body }, this.container);
        this.commentsContainer = div({
            className: 'postComponent_comments_container'
        }, this.container);
        this.addBtn = null;
        this.addComments();
    }

    addComments() {
        this.post.comments.forEach(comment => {
            var commentComponent = new CommentComponent(this.appManager, this.commentsContainer, comment);
        });

        this.addBtn = div({ classList: 'postComponent_addBtn', innerHTML: 'Add New Comment', onclick: this.onAddBtn.bind(this) }, this.commentsContainer);

    }

    onAddBtn(e) {
        this.appManager.postSelected = this.post;
        this.appManager.uiController.showFormComponent(SHOWING_NEW_COMMENT);
    }

}