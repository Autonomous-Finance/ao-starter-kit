import { BondingCurve, BondingCurveDerived } from "../types";

export const calcCurveN = (curve: BondingCurve): number | undefined => {
    if (curve.curveRR === undefined) return undefined;
    return 1 / curve.curveRR - 1;
}

export const calcPrice = (curve: BondingCurve, curveDerived: BondingCurveDerived, supply: number | undefined): number | undefined => {
    const n = calcCurveN(curve);
    const m = curveDerived.curveM;
    if (n === undefined || m === undefined || supply === undefined) return undefined;
    return m * Math.pow(supply, n);
}

export const calcCost = (curveDerived: BondingCurveDerived, supply: number): number | undefined => {
    const n = curveDerived.curveN;
    const m = curveDerived.curveM;
    if (n === undefined || m === undefined) return undefined;
    return (m / (n + 1)) * Math.pow(supply, n + 1);
}

export const calcSupplyForCost = (curveDerived: BondingCurveDerived, cost: number): number | undefined => {
    const n = curveDerived.curveN;
    const m = curveDerived.curveM;
    if (n === undefined || m === undefined) return undefined;
    return Math.pow(((n + 1) * cost) / m, 1 / (n + 1));
}

export const calcLiquidity = (curveDerived: BondingCurveDerived, supply: number): number | undefined => {
    return calcCost(curveDerived, supply);
}

export const calcTotalFee = (curve: BondingCurve, targetLiquidity: number | undefined): number | undefined => {
    if (curve.curveFee === undefined || targetLiquidity === undefined) return undefined;
    return targetLiquidity * curve.curveFee / 10000;
}

export const getCurveDerived = (curve: BondingCurve): BondingCurveDerived => {
    const curveN = calcCurveN(curve);
    const targetPrice = curve.targetMCap !== undefined && curve.targetSupply !== undefined && curve.targetSupply !== 0
        ? curve.targetMCap / curve.targetSupply
        : undefined;
    const curveM = targetPrice !== undefined && curve.targetSupply !== undefined && curveN !== undefined
        ? targetPrice / Math.pow(curve.targetSupply, curveN)
        : undefined;
    const targetLiquidity = curve.targetMCap !== undefined && curve.curveRR !== undefined
        ? curve.targetMCap * curve.curveRR
        : undefined;
    const minFees = calcTotalFee(curve, targetLiquidity);

    return {
        curveN,
        curveM,
        targetPrice,
        targetLiquidity,
        minFees
    };
}