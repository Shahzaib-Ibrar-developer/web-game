/**
 * Planet 04 - Level 2
 * Objective: Create homes for small animals.
 * Reward: Attracts birds and squirrels.
 * Author: Navjot Kaur
 */

class Planet04Level2 extends Phaser.Scene {
    constructor() {
        super({ key: 'Planet04Level2' });
    }

    create() {
        this.add.text(400, 50, 'Building Animal Shelters', {
            fontSize: '30px',
            fill: '#fff'
        }).setOrigin(0.5);

        this.add.text(400, 100, 'Objective: Build shelters for small animals.', {
            fontSize: '20px',
            fill: '#fff'
        }).setOrigin(0.5);

        // Ground
        this.add.rectangle(400, 300, 800, 600, 0x228b22); // Green ground

        // Animal shelters
        let sheltersBuilt = 0;
        let targetShelters = 5; // Win condition

        // Add click event to build shelters
        this.input.on('pointerdown', (pointer) => {
            this.add.rectangle(pointer.x, pointer.y, 50, 50, 0x8b4513); // Small brown huts
            sheltersBuilt++;

            // Check if target is met
            if (sheltersBuilt >= targetShelters) {
                this.add.text(400, 550, 'Birds and squirrels have arrived!', {
                    fontSize: '30px',
                    fill: '#ff0'
                }).setOrigin(0.5);

                this.time.delayedCall(2000, () => {
                    this.scene.start('Planet04Level3');
                });
            }
        });
    }
}

export default Planet04Level2;
