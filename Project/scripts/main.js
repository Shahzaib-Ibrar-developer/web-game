
const config = {
    type: Phaser.AUTO,
    width: 1280,
    height: 720,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: window.innerWidth,
        height: window.innerHeight,
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    // scene: [LoadingScreen, CrashScene, IntroScene, MainMenu, Planet04SubMenu, Level1, Level2, Level3],
  
    scene: [LoadingScreen, CrashScene,IntroScene, MainMenu, Planet04SubMenu, Planet04Level1],
    parent: 'game-container',
};

const game = new Phaser.Game(config);