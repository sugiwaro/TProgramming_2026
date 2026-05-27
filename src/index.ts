import { HeroFactory } from './factories/HeroFactory';
import { Game } from './game/Game';

const playerCount = 6;
const heroes = HeroFactory.generateRandomHeroes(playerCount);

console.log("Состав игроков:");
heroes.forEach(h => {
    console.log(`- ${h.getName()} (${h.getType()}) | Здоровье: ${h.getHealth()} | Сила: ${h.getStrength()}`);
});

console.log("\n--- НАЧАЛО ИГРЫ ---\n");

const game = new Game(heroes);
game.start();
