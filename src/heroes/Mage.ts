import { Hero } from './Hero';

export class Mage extends Hero {
    public getType(): string {
        return 'Маг';
    }

    public useSpecialAbility(target: Hero): { damage: number; log: string } {
        return {
            damage: 0,
            log: `использует (Заворожение)`
        };
    }
}
