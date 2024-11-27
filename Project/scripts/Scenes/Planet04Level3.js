/**
 * Planet 04 - Level 3
 * Objective: Plant trees and shrubs.
 * Reward: Attracts larger animals.
 * Author: Navjot Kaur
 */

class Planet04Level3 extends Phaser.Scene {
    constructor() {
        super({ key: 'Planet04Level3' });
    }

    create() {
        this.add.text(400, 50, 'Planting Trees and Shrubs', {
            fontSize: '30px',
            fill: '#fff'
        }).setOrigin(0.5);

        this.add.text(400, 100, 'Objective: Create animal habitats with trees.', {
            fontSize: '20px',
            fill: '#fff'
        }).setOrigin(0.5);

        // Ground
        this.add.rectangle(400, 300, 800, 600, 0x228b22); // Green ground

        // Trees and shrubs
        let habitatsCreated = 0;
        let targetHabitats = 8; // Win condition

        // Add click event to plant trees/shrubs
        this.input.on('pointerdown', (pointer) => {
            this.add.rectangle(pointer.x, pointer.y, 30, 60, 0x006400); // Green shrubs/trees
            habitatsCreated++;

            // Check if target is met
            if (habitatsCreated >= targetHabitats) {
                this.add.text(400, 550, 'Larger animals have arrived!', {
                    fontSize: '30px',
                    fill: '#ff0'
                }).setOrigin(0.5);

                this.time.delayedCall(2000, () => {
                    this.scene.start('Planet04Level4');
                });
            }
        });
    }
}

export default Planet04Level3;
