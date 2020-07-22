import Jogador from "./jogador.js";


export default class CenaJogo extends Phaser.Scene {
    constructor() {
        super({
            key: 'CenaJogo'
        });
    }

    preload() {

    }

    create() {
        const imgFundo = this.add.image(0, 0, 'fundo');
        imgFundo.setOrigin(0, 0);

        const plataformas = this.physics.add.staticGroup();
        plataformas.create(0, 410, 'chao').setOrigin(0, 0).refreshBody();
        plataformas.create(140, 455, 'chao').setOrigin(0, 0).refreshBody();
        plataformas.create(280, 455, 'chao').setOrigin(0, 0).refreshBody();
        plataformas.create(420, 455, 'chao').setOrigin(0, 0).refreshBody();
        plataformas.create(560, 436, 'chao').setOrigin(0, 0).refreshBody();
        plataformas.create(630, 390, 'chao').setOrigin(0, 0).refreshBody();
        plataformas.create(210, 305, 'plataforma').setOrigin(0, 0).refreshBody();
        plataformas.create(420, 345, 'plataforma').setOrigin(0, 0).refreshBody();
        plataformas.create(80, 260, 'plataforma').setOrigin(0, 0).refreshBody();
        plataformas.create(330, 235, 'plataforma').setOrigin(0, 0).refreshBody();
        plataformas.create(170, 155, 'plataforma').setOrigin(0, 0).refreshBody();
        plataformas.create(575, 265, 'plataforma').setOrigin(0, 0).refreshBody();
        plataformas.create(550, 185, 'plataforma').setOrigin(0, 0).refreshBody();
        plataformas.create(440, 150, 'apoio').setOrigin(0, 0).refreshBody();
        plataformas.create(420, 150, 'apoio').setOrigin(0, 0).refreshBody();

        this.jogador = new Jogador(this);
        this.physics.add.collider(this.jogador.sprite, plataformas);

        this.teclas = this.input.keyboard.createCursorKeys();

    }

    update() {
        const jogador = this.jogador.sprite;

        if (this.teclas.left.isDown) {
            jogador.setVelocityX(-160);
            jogador.setFlip(true, false)
            jogador.anims.play('esquerda', true);
        }
        else if (this.teclas.right.isDown) {
            jogador.setVelocityX(160);
            jogador.setFlip(false, false)
            jogador.anims.play('direita', true);
        } else {
            jogador.setVelocityX(0);
            if (jogador.body.touching.down) {
                jogador.anims.play('atoa');
            }
        }

        if (this.teclas.up.isDown && jogador.body.touching.down) {
            jogador.setVelocityY(-100);
            jogador.anims.play('pulando')
        }
 
    }

}