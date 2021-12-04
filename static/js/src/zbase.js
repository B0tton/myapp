export class Mygame {
    constructor(id, AcWingOS) {
        this.id = id;
        this.$my_game = $('#' + id);
        this.AcWingOS = AcWingOS;

        this.settings = new Settings(this);
        this.menu = new MyGameMenu(this);
        this.playground = new GamePlayground(this);

        this.start();
    }

    start() {
    }
}
