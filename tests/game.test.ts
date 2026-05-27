import { describe, it, expect } from 'vitest';
import { Knight } from '../src/heroes/Knight';
import { HeroFactory } from '../src/factories/HeroFactory';

describe('RPG SAGA', () => {
    it('should create Knight', () => {
        const knight = new Knight("Артур", 100, 25);
        expect(knight.getType()).toBe('Рыцарь');
        expect(knight.getHealth()).toBe(100);
    });

    it('should take damage', () => {
        const knight = new Knight("Артур", 100, 25);
        knight.takeDamage(30);
        expect(knight.getHealth()).toBe(70);
    });

    it('should generate even number of heroes', () => {
        const heroes = HeroFactory.generateRandomHeroes(6);
        expect(heroes.length).toBe(6);
    });
});
