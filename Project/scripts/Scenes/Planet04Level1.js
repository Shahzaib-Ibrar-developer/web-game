// /**
//  * Planet 04 - Level 1
//  * Objective: Cover barren areas with greenery.
//  * Reward: Attracts butterflies.
//  * Author: Navjot Kaur
//  */

class Planet04Level1 extends Phaser.Scene {
    constructor() {
        super({ key: 'Planet04Level1' });
    }

    create() {
        this.add.text(400, 50, 'Planting Grass and Flowers', {
            fontSize: '30px',
            fill: '#fff'
        }).setOrigin(0.5);

        this.add.text(400, 100, 'Objective: Cover barren areas with greenery.', {
            fontSize: '20px',
            fill: '#fff'
        }).setOrigin(0.5);

        // Background and barren area
        this.add.rectangle(400, 300, 800, 600, 0x8b4513); // Brown barren ground

        // Greenery areas
        let greeneryCount = 0;
        let targetGreenery = 10; // Win condition

        // Click to plant grass/flowers
        this.input.on('pointerdown', (pointer) => {
            this.add.circle(pointer.x, pointer.y, 20, 0x228b22); // Green grass
            greeneryCount++;

            // Check if target is met
            if (greeneryCount >= targetGreenery) {
                this.add.text(400, 550, 'Butterflies have arrived!', {
                    fontSize: '30px',
                    fill: '#ff0'
                }).setOrigin(0.5);

                this.time.delayedCall(2000, () => {
                    this.scene.start('Planet04Level2');
                });
            }
        });
    }
}





// class Planet04Level1 extends Phaser.Scene {
//     constructor() {
//         super({ key: 'Planet04Level1' });
//     }

//     create() {
//         // UI text
//         this.add.text(400, 50, 'Planting Grass and Flowers', {
//             fontSize: '30px',
//             fill: '#fff',
//         }).setOrigin(0.5);

//         this.add.text(400, 100, 'Objective: Cover barren areas with greenery.', {
//             fontSize: '20px',
//             fill: '#fff',
//         }).setOrigin(0.5);

//         // Background - barren ground
//         const BROWN_COLOR = 0x8b4513;
//         const GREEN_COLOR = 0x228b22;

//         this.add.rectangle(400, 300, 800, 600, BROWN_COLOR); // Brown barren ground

//         // Variables to track greenery
//         let greeneryCount = 0;
//         const targetGreenery = 10; // Win condition

//         // Display greenery count
//         const greeneryCounterText = this.add.text(400, 150, `Greenery Planted: ${greeneryCount}/${targetGreenery}`, {
//             fontSize: '20px',
//             fill: '#fff',
//         }).setOrigin(0.5);

//         // Click to plant grass/flowers
//         this.input.on('pointerdown', (pointer) => {
//             // Add a circle to represent planted greenery
//             this.add.circle(pointer.x, pointer.y, 20, GREEN_COLOR); // Green grass
//             greeneryCount++;

//             // Update greenery counter
//             greeneryCounterText.setText(`Greenery Planted: ${greeneryCount}/${targetGreenery}`);

//             // Check if target greenery is reached
//             if (greeneryCount >= targetGreenery) {
//                 this.add.text(400, 550, 'Butterflies have arrived!', {
//                     fontSize: '30px',
//                     fill: '#ff0',
//                 }).setOrigin(0.5);

//                 // Transition to the next scene after 2 seconds
//                 this.time.delayedCall(2000, () => {
//                     this.scene.start('Planet04Level2');
//                 });
//             }
//         });
//     }
// }

// export default Planet04Level1;
