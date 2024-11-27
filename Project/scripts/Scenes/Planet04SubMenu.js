class Planet04SubMenu extends Phaser.Scene {
    constructor() {
        super({ key: 'Planet04SubMenu' });
    }

    create() {
        // Add title text for the submenu
        this.add.text(400, 100, 'Planet 04: Restoring Habitats and Wildlife', {
            fontSize: '40px',
            fill: '#fff'
        }).setOrigin(0.5);
        this.time.addEvent({
            delay: 30000, // Survive for 30 seconds
            callback: () => {
                if (score >= 10) {
                    this.add.text(400, 550, 'Habitat fully restored!', {
                        fontSize: '30px',
                        fill: '#ff0',
                    }).setOrigin(0.5);
                } else {
                    this.add.text(400, 550, 'Ecosystem collapsed!', {
                        fontSize: '30px',
                        fill: '#f00',
                    }).setOrigin(0.5);
                }
        
                // Add a slight delay before transitioning to the submenu
                this.time.delayedCall(2000, () => {
                    this.scene.start('Planet04SubMenu'); // Return to the submenu
                });
            },
            loop: false,
        });
        
        // Add menu options for the levels
        // this.add.text(400, 200, 'Level 1: Planting Grass and Flowers', {
        //     fontSize: '24px',
        //     fill: '#fff'
        // }).setOrigin(0.5).setInteractive().on('pointerdown', () => this.startLevel('Planet04Level1'));

        this.add.text(400, 200, 'Level 1: Planting Grass and Flowers', {
            fontSize: '24px',
            fill: '#fff'
        }).setOrigin(0.5).setInteractive().on('pointerdown', () => {
            console.log('Clicked Level 1'); // Debugging log
            this.startLevel('Planet04Level1');
        });

        this.add.text(400, 250, 'Level 2: Building Animal Shelters', {
            fontSize: '24px',
            fill: '#fff'
        }).setOrigin(0.5).setInteractive().on('pointerdown', () => this.startLevel('Planet04Level2'));

        this.add.text(400, 300, 'Level 3: Planting Trees and Shrubs', {
            fontSize: '24px',
            fill: '#fff'
        }).setOrigin(0.5).setInteractive().on('pointerdown', () => this.startLevel('Planet04Level3'));

        this.add.text(400, 350, 'Level 4: Expanding Animal Habitats', {
            fontSize: '24px',
            fill: '#fff'
        }).setOrigin(0.5).setInteractive().on('pointerdown', () => this.startLevel('Planet04Level4'));

        // Optional: Add a back button to return to the main menu
        this.add.text(400, 450, 'Back to Main Menu', {
            fontSize: '24px',
            fill: '#fff'
        }).setOrigin(0.5).setInteractive().on('pointerdown', this.goBackToMainMenu, this);
    }

    // Function to transition to the selected level
    startLevel(levelKey) {
        this.scene.start(levelKey);
    }

    // Function to return to the main menu
    goBackToMainMenu() {
        this.scene.start('MainMenu');
    }

    update() {
        // Add additional logic here if needed
    }
}
export default Planet04SubMenu;