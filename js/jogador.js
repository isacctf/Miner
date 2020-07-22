export default class Jogador {
    constructor(cena) {
        this.cena = cena;
        this.sprite = cena.physics.add.sprite(10, 360, 'player');
        this.sprite.body.setSize(48, 48);
        this.sprite.setBounce(0.2)
        this.sprite.setCollideWorldBounds(true);

        // cria as animações
        cena.anims.create({
            key: 'direita',
            frames: cena.anims.generateFrameNumbers('player', { start: 7, end: 12 }),
            frameRate: 10,
            repeat: -1
        });

        cena.anims.create({
            key: 'atoa',
            frames: cena.anims.generateFrameNumbers('player', { start: 8, end: 11 }),
            frameRate: 10,
            repeat: -1
        });

        cena.anims.create({
            key: 'pulando',
            frames: cena.anims.generateFrameNumbers('player', { start: 0, end: 3 }),
            frameRate: 20,
            repeat: -1
        });

        cena.anims.create({
            key: 'esquerda',
            frames: cena.anims.generateFrameNumbers('player', { start: 7, end: 12 }),
            frameRate: 10,
            repeat: -1
        });
    
    }
}