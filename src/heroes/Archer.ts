import { Hero } from './Hero';

export class Archer extends Hero {
    private fireArrowsUsed: boolean = false;
    private iceArrowsUsed: number = 0;

    public getType(): string {
        return 'Лучник';
    }

    public useSpecialAbility(target: Hero): { damage: number; log: string } {
        if (!this.fireArrowsUsed) {
            this.fireArrowsUsed = true;
            const damage = this.strength + 15;
            target.takeDamage(damage);
            return {
                damage: damage,
                log: `использует (Огненные стрелы) и наносит урон ${damage}`
            };
        }
        
        if (this.iceArrowsUsed < 2) {
            this.iceArrowsUsed++;
            const damage = this.strength + 10;
            target.takeDamage(damage);
            return {
                damage: damage,
                log: `использует (Ледяные стрелы) и наносит урон ${damage}`
            };
        }
        
        const damage = this.strength;
        target.takeDamage(damage);
        return {
            damage: damage,
            log: `наносит урон ${damage}`
        };
    }
}
