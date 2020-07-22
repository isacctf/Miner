import CenaCarregamento from './cena-carregamento.js';
import CenaJogo from './cena-jogo.js';

const config = {
    type: Phaser.AUTO,
    width: 750,
    height: 500,
    parent: 'jogo',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 100
            },
            //debug: true
        }
    },
    scene: [
        CenaCarregamento,
        CenaJogo
    ]
};

const jogo = new Phaser.Game(config);