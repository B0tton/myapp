export class Mygame {
    constructor(id) {
        this.id = id;
        this.$my_game = $('#' + id);
        // this.menu = new MyGameMenu(this);
        this.playground = new GamePlayground(this);

        this.start();
    }

    start() {
    }
}
