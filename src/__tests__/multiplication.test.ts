import { multiply } from '../modules/multiplication';
import { expect, describe, it } from 'vitest';

describe('basic multiplication', () => {
    it('test basic multiplication', () => {
        expect(multiply(1, 2)).toBe(2);
    });
    it('test basic multiplication big number', () => {
        expect(multiply(5, 32)).toBe(160);
    });
});
describe('multiplication par 0', () => {
    it('multiplier x par 0', () => {
        expect(multiply(1, 0)).toBe(0);
    });
    it('multiplier 0 par X', () => {
        expect(multiply(0, 1)).toBe(0);
    });
    it('multiplier 0 par -X', () => {
        expect(multiply(0, -1)).toBe(0);
    });
});
describe('multiplication par 1', () => {
    it('multiplier 1 par X', () => {
        expect(multiply(1, 12)).toBe(12);
    });
    it('multiplier X par 1', () => {
        expect(multiply(16, 1)).toBe(16);
    });
});
describe('multiplication par des négatif', () => {
    it('test 2 valeur negative', () => {
        expect(multiply(-3, -2)).toBe(6);
    });
    it('multiplier -X par X', () => {
        expect(multiply(-3, 2)).toBe(-6);
    });
    it('multiplier X par -X', () => {
        expect(multiply(3, -2)).toBe(-6);
    });
});