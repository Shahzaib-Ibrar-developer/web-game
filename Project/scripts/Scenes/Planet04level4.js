/**
 * Planet 04 - Level 4
 * Additional challenge: Protect the ecosystem.
 * Reward: Fully restored habitat with diverse wildlife.
 * Author: Navjot Kaur
 */

class Planet04Level4 extends Phaser.Scene {
    constructor() {
        super({ key: 'Planet04Level4' });
    }

    create() {
        this.add.text(400, 50, 'Protecting the Ecosystem', {
            fontSize: '30px',
            fill: '#fff'
        }).setOrigin(0.5);

        this.add.text(400, 100, 'Objective: Keep the ecosystem balanced.', {
            fontSize: '20px',
            fill: '#fff'
        }).setOrigin(0.5);

        // Ecosystem
        this.add.rectangle(400, 300, 800, 600, 0x228b22); // Green ground
        let score = 0;

        // Timer for ecosystem threats
        this.time.addEvent({
            delay: 1000,
            callback: () => {
                let threat = this.add.circle(Phaser.Math.Between(50, 750), Phaser.Math.Between(50, 550), 20, 0xff0000); // Red threats
                threat.setInteractive();

                threat.on('pointerdown', () => {
                    threat.destroy();
                    score++;
                });
            },
            loop: true
        });

        // Check for win condition
        this.time.addEvent({
            delay: 30000, // Survive for 30 seconds
            callback: () => {
                if (score >= 10) {
                    this.add.text(400, 550, 'Habitat fully restored!', {
                        fontSize: '30px',
                        fill: '#ff0'
                    }).setOrigin(0.5);
                } else {
                    this.add.text(400, 550, 'Ecosystem collapsed!', {
                        fontSize: '30px',
                        fill: '#f00'
                    }).setOrigin(0.5);
                }
            },
            loop: false
        });
    }
}

export default Planet04Level4;
