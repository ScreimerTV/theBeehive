class User {
    constructor(id, name, phone, username, website, avatar, isOwner, email) {
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.username = username;
        this.website = website;
        this.posts = [];
        this.avatar = avatar;
        this.isOwner = isOwner;
        this.email = email;
    }

    addPost(post) {
        this.posts.unshift(post);
    }

}