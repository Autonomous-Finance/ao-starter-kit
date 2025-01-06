function calculateTargetPrice(targetMarketCap: number, targetSupply: number) {
    if (targetSupply <= 0) {
        throw new Error("Target supply must be greater than 0");
    }
    return targetMarketCap / targetSupply;
}

function calculate_curve_n(curve_rr: number) {
    if (curve_rr <= 0 || curve_rr >= 1) {
        throw new Error("Curve reserve ratio must be between 0 and 1");
    }
    return ((1 / curve_rr) - 1);
}

export function calculate_curve_m(targetMarketCap: number, targetSupply: number, curve_rr: number) {
    if (targetMarketCap < 0) {
        throw new Error("Target market cap must be non-negative");
    }

    const normalizedRR = curve_rr > 1 ? curve_rr / 100 : curve_rr;

    const targetPrice = calculateTargetPrice(targetMarketCap, targetSupply);
    const curve_n = calculate_curve_n(normalizedRR);

    // Check for potential overflow before power operation
    if (targetSupply > Number.MAX_SAFE_INTEGER ** (1 / curve_n)) {
        throw new Error("Supply value too large for safe calculation");
    }

    // Calculate m using the formula: m = P / (S^n)
    const curve_m = targetPrice / (Math.pow(targetSupply, curve_n));

    // Check for valid result
    if (!Number.isFinite(curve_m)) {
        throw new Error("Calculation resulted in an invalid number");
    }

    return curve_m;
}