export default class CenaCarregamento extends Phaser.Scene {
    constructor() {
        super({
            key: 'CenaCarregamento'
        });
    }

    preload() {
        const larguraJogo = this.sys.canvas.width;
        const barraDeProgresso = this.add.graphics();
        
        const larguraBarra = 0.8 * larguraJogo;
        this.load.on('progress', (value) => {
            barraDeProgresso.clear();
            barraDeProgresso.fillStyle(0xbd8136, 1);
            barraDeProgresso.fillRect((larguraJogo - larguraBarra) / 2, this.sys.game.config.height / 2, larguraBarra * value, 20);
            barraDeProgresso.lineStyle(3, 0xbd8136, 1);
            barraDeProgresso.strokeRect((larguraJogo - larguraBarra) / 2, this.sys.game.config.height / 2, larguraBarra, 20);
        });

        this.load.on('complete', () => {
            this.scene.start('CenaJogo');
        });

        this.load.image('fundo', 'imgs/fundo.png');
        this.load.image('chao', 'imgs/chao.png');
        this.load.image('plataforma', 'imgs/plataforma.png');
        this.load.image('apoio', 'imgs/apoio.png');
        this.load.spritesheet('player', 'imgs/player.png', { frameWidth: 48, frameHeight: 48 });
    }

    create() {

    }

    update() {

    }
}