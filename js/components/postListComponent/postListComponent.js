class PostListComponent extends Component {
    constructor(appManager, parent) {
        super(appManager, parent);
        this.container.className = 'postListComponent';

        this.fade = div({ classList: 'postListComponent_fade hide' }, this.container);
        this.dataContaier = div({ classList: 'postListComponent_dataContainer' }, this.container);
        this.dataContaier.style.transform = `translateX(${window.innerWidth}px)`;
        this.container.classList.add('hide');
    }

    showPosts() {
        this.dataContaier.innerHTML = '';
        this.appManager.userSelected.posts.forEach(post => {
            var postComponent = new PostComponent(this.appManager, this.dataContaier, post);
        });

        this.moveIn();
    }
    /* Metodo sobre escritos */
    moveIn() {
        this.fade.classList.remove('hide');
        this.container.classList.remove('hide');
        gsap.to(this.dataContaier, { x: 0, duration: 0.75 });
        gsap.to(this.fade, { opacity: 0.75, duration: 0.25 });
    }
    /* Metodo sobre escrito */
    moveOut() {
        gsap.to(this.dataContaier, { x: window.innerWidth, duration: 0.35 });
        gsap.to(this.fade, { opacity: 0, duration: 0.5, onComplete: this.moveOutComplete.bind(this) });

    }

    moveOutComplete() {
        this.dataContaier.scrollTop = 0;
        this.fade.classList.add('hide');
        this.container.classList.add('hide');
    }

    refresh() {
        this.showPosts(this.user);
    }

}