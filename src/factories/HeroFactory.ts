import { Hero } from '../heroes/Hero';
import { Knight } from '../heroes/Knight';
import { Archer } from '../heroes/Archer';
import { Mage } from '../heroes/Mage';

const NAMES: string[] = ["Артур", "Вильямс", "Эльдар", "Гэндальф", "Леголас", "Арагорн", "Фродо", "Гимли"];

export class HeroFactory {
    public static createHero(type: string, name: string, health: number, strength: number): Hero {
        switch (type) {
            case 'Knight': return new Knight(name, health, strength);
            case 'Archer': return new Archer(name, health, strength);
            case 'Mage': return new Mage(name, health, strength);
            default: throw new Error(`Unknown hero type: ${type}`);
        }
    }
    
    public static generateRandomHeroes(count: number): Hero[] {
        const types = ['Knight', 'Archer', 'Mage'];
        const heroes: Hero[] = [];
        
        for (let i = 0; i < count; i++) {
            const type = types[Math.floor(Math.random() * types.length)];
            const name = NAMES[Math.floor(Math.random() * NAMES.length)];
            const health = Math.floor(Math.random() * 100) + 50;
            const strength = Math.floor(Math.random() * 30) + 15;
            heroes.push(this.createHero(type, name, health, strength));
        }
        return heroes;
    }
}
