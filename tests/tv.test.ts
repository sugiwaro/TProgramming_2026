import { describe, it, expect } from "vitest";
import { TV, createTV } from "../src/tv";

describe("TV", () => {
    it("should create TV with default values", () => {
        const tv = createTV();
        expect(tv.getStatus()).toEqual({ brand: "Samsung", isOn: false, channel: 1, volume: 50 });
    });

    it("should toggle power", () => {
        const tv = createTV("LG");
        expect(tv.togglePower()).toBe("Телевизор включен");
        expect(tv.getStatus().isOn).toBe(true);
    });

    it("should set channel when on", () => {
        const tv = createTV();
        tv.togglePower();
        expect(tv.setChannel(5)).toBe("Канал переключен на 5");
        expect(tv.getStatus().channel).toBe(5);
    });

    it("should not set channel when off", () => {
        const tv = createTV();
        expect(tv.setChannel(10)).toBe("Сначала включите телевизор");
    });

    it("should set volume when on", () => {
        const tv = createTV();
        tv.togglePower();
        expect(tv.setVolume(75)).toBe("Громкость установлена на 75");
        expect(tv.getStatus().volume).toBe(75);
    });

    it("should not set volume when off", () => {
        const tv = createTV();
        expect(tv.setVolume(30)).toBe("Сначала включите телевизор");
    });
});