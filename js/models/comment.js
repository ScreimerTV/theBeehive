class Comment {
    constructor(id, body, beeId, name, postId, user = null) {
        this.id = id;
        this.body = body;
        this.beeId = beeId;
        this.name = name;
        this.postId = postId;
        this.user = user;
    }


    setUser(user) {
        this.user = user;
    }

}