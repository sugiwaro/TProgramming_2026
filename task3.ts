const a: number = 0.4;
const b: number = 0.8;

function lg(x: number): number {
    return Math.log10(x);
}

function cbrt(x: number): number {
    return Math.cbrt(x);
}

function y(x: number): number | null {
    if (a / b <= 0) return null;
    
    const numerator: number = Math.pow(a, x) - Math.pow(b, x);
    const denominator: number = lg(a / b) * cbrt(a * b);
    
    if (denominator === 0) return null;
    return numerator / denominator;
}

console.log("=== Задача А ===");
for (let x: number = 3.2; x <= 6.2 + 1e-9; x += 0.6) {
    const val = y(x);
    if (val === null) {
        console.log(`x = \${x.toFixed(4)}\tне определено`);
    } else {
        console.log(`x = \${x.toFixed(4)}\t y = \${val.toFixed(6)}`);
    }
}

console.log("\n=== Задача Б ===");
const points: number[] = [4.48, 3.56, 2.78, 5.28, 3.21];
for (const x of points) {
    const val = y(x);
    if (val === null) {
        console.log(`x = \${x.toFixed(4)}\tне определено`);
    } else {
        console.log(`x = \${x.toFixed(4)}\t y = \${val.toFixed(6)}`);
    }
}

export { y };
