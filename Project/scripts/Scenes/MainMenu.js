class MainMenu extends Phaser.Scene {
    constructor() {
        super({ key: 'MainMenu' });
    }

    create() {
        // Add title text for the main menu
        this.add.text(400, 100, 'Eco-Adventure: A Mission to Save the Planet', {
            fontSize: '40px',
            fill: '#fff'
        }).setOrigin(0.5);

        // Add a prompt to let the user know they can start the game
        this.add.text(400, 200, 'Click to Start Planet 04 Adventure', {
            fontSize: '24px',
            fill: '#fff'
        }).setOrigin(0.5).setInteractive().on('pointerdown', this.startPlanet04SubMenu, this);

        // Optional: You can add any other game elements like instructions or options here.
    }

    // Method to navigate to the Planet 04 SubMenu
    startPlanet04SubMenu() {
        this.scene.start('Planet04SubMenu');
    }

    update() {
        // Add any dynamic updates here if needed (e.g., animations, sounds)
    }
}
