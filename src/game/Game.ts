import { Hero } from '../heroes/Hero';
import { Logger } from './Logger';

export class Game {
    private heroes: Hero[];
    private logger: Logger;
    private round: number = 0;

    constructor(heroes: Hero[]) {
        this.heroes = heroes;
        this.logger = new Logger();
    }

    public start(): void {
        while (this.heroes.length > 1) {
            this.round++;
            this.logger.log(`\nКон ${this.round}.`);
            this.playRound();
            this.heroes = this.heroes.filter(h => h.isAlive());
            this.logger.log(`Осталось игроков: ${this.heroes.length}`);
        }
        this.logger.log(`\nПобедитель: ${this.heroes[0].getName()} (${this.heroes[0].getType()})`);
    }

    private playRound(): void {
        const shuffled = this.shuffle([...this.heroes]);
        const pairs: [Hero, Hero][] = [];
        
        for (let i = 0; i < shuffled.length; i += 2) {
            if (i + 1 < shuffled.length) {
                pairs.push([shuffled[i], shuffled[i + 1]]);
            }
        }
        
        for (const [hero1, hero2] of pairs) {
            this.fight(hero1, hero2);
        }
    }

    private fight(hero1: Hero, hero2: Hero): void {
        this.logger.log(`\n(${hero1.getType()}) ${hero1.getName()} vs (${hero2.getType()}) ${hero2.getName()}`);
        
        let turn = 0;
        
        while (hero1.isAlive() && hero2.isAlive()) {
            const attacker = turn % 2 === 0 ? hero1 : hero2;
            const defender = turn % 2 === 0 ? hero2 : hero1;
            
            const { log } = attacker.useSpecialAbility(defender);
            this.logger.log(`(${attacker.getType()}) ${attacker.getName()} ${log} противнику (${defender.getType()}) ${defender.getName()}`);
            
            if (!defender.isAlive()) {
                this.logger.log(`(${defender.getType()}) ${defender.getName()} погибает`);
                break;
            }
            turn++;
        }
    }

    private shuffle<T>(array: T[]): T[] {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    public getLogs(): string[] {
        return this.logger.getLogs();
    }
}
