export abstract class Hero {
    protected name: string;
    protected health: number;
    protected maxHealth: number;
    protected strength: number;
    protected alive: boolean = true;

    constructor(name: string, health: number, strength: number) {
        this.name = name;
        this.health = health;
        this.maxHealth = health;
        this.strength = strength;
    }

    public getName(): string { return this.name; }
    public getHealth(): number { return this.health; }
    public getStrength(): number { return this.strength; }
    public isAlive(): boolean { return this.alive; }

    public takeDamage(damage: number): void {
        this.health -= damage;
        if (this.health <= 0) {
            this.health = 0;
            this.alive = false;
        }
    }

    public heal(amount: number): void {
        this.health = Math.min(this.maxHealth, this.health + amount);
    }

    public abstract getType(): string;
    public abstract useSpecialAbility(target: Hero): { damage: number; log: string };
}
