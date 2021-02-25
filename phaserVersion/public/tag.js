
let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            //gravity: { y: 300 },
            debug: false
        },
        fps: {
            max: 10,
            mn: 10,
            target: 10
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};
let unstarted = true
let now = Tone.now

const tina = new Musician('tina', new Tone.Synth(), new Score(0))

const gina = new Musician('gina', new Tone.PolySynth(), new Score(-36))

const mina = new Musician('mina', new Tone.DuoSynth(), new Score(-24))

const lina = new Musician('lina', new Tone.FMSynth(), new Score(-12))
// const conductor
// const theInas = [tina, gina, mina, lina]

let myDude;
let dude;
let greenDude;
let blueDude;
let star;

let platforms;
let cursors;

// var myScore = 0;
// var pinkScore = 0;
// var blueScore = 0;
// var gameOver = false;
// var myDisp;
// var blueDisp;
// var pinkDisp;

let game = new Phaser.Game(config);

function preload() {
    this.load.image('sky', 'assets/sky.png');
    this.load.image('ground', 'assets/platform.png');
    this.load.image('star', 'assets/star.png');
    this.load.spritesheet('mydude', 'assets/mydude.png', { frameWidth: 32, frameHeight: 48 });
    this.load.spritesheet('dude', 'assets/dude.png', { frameWidth: 32, frameHeight: 48 });
    this.load.spritesheet('greendude', 'assets/greendude.png', { frameWidth: 32, frameHeight: 48 });
    this.load.spritesheet('bluedude', 'assets/bluedude.png', { frameWidth: 32, frameHeight: 48 });
}

function create() {
    this.add.image(400, 300, 'sky');

    platforms = this.physics.add.staticGroup();
    platforms.create(400, 568, 'ground').setScale(2).refreshBody();

    platforms.create(600, 400, 'ground').setScale(.5).refreshBody();
    platforms.create(50, 250, 'ground').setScale(.8).refreshBody();
    platforms.create(750, 220, 'ground');

    myDude = this.physics.add.sprite(100, 150, 'mydude');
    myDude.setCollideWorldBounds(true);
    this.anims.create({
        key: 'myleft',
        frames: this.anims.generateFrameNumbers('mydude', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'myturn',
        frames: [{ key: 'mydude', frame: 4 }],
        frameRate: 20
    });
    this.anims.create({
        key: 'myright',
        frames: this.anims.generateFrameNumbers('mydude', { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1
    });

    dude = this.physics.add.sprite(600, 450, 'dude');
    dude.setCollideWorldBounds(true);

    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'turn',
        frames: [{ key: 'dude', frame: 4 }],
        frameRate: 20
    });
    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1
    });

    greenDude = this.physics.add.sprite(400, 450, 'greendude');
    greenDude.setCollideWorldBounds(true);
    this.anims.create({
        key: 'greenleft',
        frames: this.anims.generateFrameNumbers('greendude', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'greenturn',
        frames: [{ key: 'greendude', frame: 4 }],
        frameRate: 20
    });
    this.anims.create({
        key: 'greenright',
        frames: this.anims.generateFrameNumbers('greendude', { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1
    });

    blueDude = this.physics.add.sprite(100, 450, 'bluedude');
    blueDude.setCollideWorldBounds(true);

    this.anims.create({
        key: 'blueleft',
        frames: this.anims.generateFrameNumbers('bluedude', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'blueturn',
        frames: [{ key: 'bluedude', frame: 4 }],
        frameRate: 20
    });
    this.anims.create({
        key: 'blueright',
        frames: this.anims.generateFrameNumbers('bluedude', { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1
    });

    star = this.physics.add.sprite(400, 300, 'star');
    star.setCollideWorldBounds(true);

    this.physics.add.collider(myDude, platforms);
    this.physics.add.collider(dude, platforms);
    this.physics.add.collider(greenDude, platforms);
    this.physics.add.collider(blueDude, platforms);
    this.physics.add.collider(star, platforms);

    this.physics.add.overlap(star, greenDude, greenCollision, null);
    this.physics.add.overlap(star, blueDude, blueCollision, null);
    this.physics.add.overlap(star, dude, dudeCollision, null);
    this.physics.add.overlap(star, myDude, myDudeCollision, null);


    cursors = this.input.keyboard.createCursorKeys();
    this.physics.world.setFPS(28)

}

function update() {
    if (cursors.left.isDown) {
        if (unstarted) {
            Tone.start()
            tina.doNote()
            gina.doNote()
            lina.doNote()
            mina.doNote()
            unstarted = false
        }
        star.setVelocityX(-100);
    }
    else if (cursors.right.isDown) {
        star.setVelocityX(100);
    }
    else if (cursors.up.isDown) {
        star.setVelocityY(-100);
    }
    else if (cursors.down.isDown) {
        star.setVelocityY(100);
    }
    else {
        star.setVelocityX(0);
        star.setVelocityY(0);
    }

    randomWalk(greenDude, 70, 97, 'green')
    randomWalk(blueDude, 50, 98, 'blue')
    randomWalk(dude, 110, 97, '')
    randomWalk(myDude, 110, 96, 'my')
}

function myDudeCollision(player, dude) {
    if (tina.ready) tina.doNote(true)
    // else tina.doNote()
}
function dudeCollision(player, dude) {
    if (gina.ready) gina.doNote(true)
    // else gina.doNote()
}
function greenCollision(player, green) {
    if (lina.ready) lina.doNote(true)
    // else lina.doNote()
}
function blueCollision(player, blue) {
    if (mina.ready) mina.doNote(true)
    // else lina.doNote()
}

function randomWalk(npc, velocity, directedness, prefix) {
    const change = Math.floor(Math.random() * 100)//this behavior seems pretty logarithmic, might need another digit precision
    if (change < directedness) {
    } else {
        let key;
        const direction = Math.floor(Math.random() * 5)
        switch (direction) {
            case 0:
                npc.setVelocityX(-velocity)
                key = prefix + 'left'
                npc.anims.play(key, true);
                break;
            case 1:
                npc.setVelocityX(velocity)
                key = prefix + 'right'
                npc.anims.play(key, true);
                break;
            case 2:
                npc.setVelocityY(-velocity)
                break;
            case 3:
                npc.setVelocityY(velocity)
                break;
            case 4:
                npc.anims.play(prefix + 'turn')
                npc.setVelocityX(0)
                npc.setVelocityY(0)
                break;
        }
    }
}