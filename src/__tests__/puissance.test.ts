import { power } from '../modules/power';
import { expect, describe, it } from 'vitest';

describe('power of positive integers', () => {
    it('2 to the power of 2', () => {
        expect(power(2, 2)).toBe(4);
    });
    it('3 to the power of 3', () => {
        expect(power(3, 3)).toBe(27);
    });
});

describe('power of zero and one', () => {
    it('any number to the power of 0', () => {
        expect(power(2, 0)).toBe(1);
    });
    it('any number to the power of 1', () => {
        expect(power(2, 1)).toBe(2);
    });
});

describe('power of negative numbers', () => {
    it('-2 to the power of 2', () => {
        expect(power(-2, 2)).toBe(4);
    });
    it('-3 to the power of 3', () => {
        expect(power(-3, 3)).toBe(-27);
    });
});

describe('power of negative exposant', () => {
    it('2 to the power of -2', () => {
        expect(() => power(2, -2)).toThrow("exposant can't be negative");
    });
});