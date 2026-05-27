export class TV {
    private brand: string;
    private channel: number;
    private volume: number;
    private isOn: boolean;

    constructor(brand: string = "Samsung") {
        this.brand = brand;
        this.channel = 1;
        this.volume = 50;
        this.isOn = false;
    }

    togglePower(): string {
        this.isOn = !this.isOn;
        return `Телевизор ${this.isOn ? "включен" : "выключен"}`;
    }

    setChannel(channel: number): string {
        if (!this.isOn) return "Сначала включите телевизор";
        if (channel < 1 || channel > 999) return "Канал должен быть от 1 до 999";
        this.channel = channel;
        return `Канал переключен на ${this.channel}`;
    }

    setVolume(volume: number): string {
        if (!this.isOn) return "Сначала включите телевизор";
        if (volume < 0 || volume > 100) return "Громкость должна быть от 0 до 100";
        this.volume = volume;
        return `Громкость установлена на ${this.volume}`;
    }

    getStatus(): object {
        return { brand: this.brand, isOn: this.isOn, channel: this.channel, volume: this.volume };
    }
}

export function createTV(brand?: string): TV {
    return new TV(brand);
}