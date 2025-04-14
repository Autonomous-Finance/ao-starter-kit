export interface BondingCurve {
    targetMCap: number;
    targetSupply: number;
    curveRR: number;
    curveFee?: number;
}

export interface BondingCurveDerived {
    curveN?: number;
    curveM?: number;
    targetPrice?: number;
    targetLiquidity?: number;
    minFees?: number;
}

export type PackageManager = "npm" | "yarn" | "pnpm" | "bun";