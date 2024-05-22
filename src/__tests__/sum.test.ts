import { sum } from '../modules/sum';
import { expect, describe, it } from 'vitest';

describe('sumSmallNumbers', () => {
    it('test basic sum', () => {
        expect(sum(1, 1)).toBe(2);
    });
    it('error one number negative', () => {
        expect(() => sum(-1, 2)).toThrow('Only one number is negative');
    });
    it('test inverse number', () => {
        expect(sum(1, -1)).toBe(0);
    });
    it('sum big Number', () => {
        expect(sum(10, 10)).toBe(20);
    });
    it('sum big number with different size', () => {
        expect(sum(140, 10)).toBe(150);
    });
    it('Sum big 2 negative number', () => {
        expect(sum(-140, -10)).toBe(-150);
    });
    it('error one number negative with big number', () => {
        expect(() => sum(-100, 24)).toThrow('Only one number is negative');
    });
    it('Test with one null value', () => {
        expect(sum(140, 0)).toBe(140);
    });
    it('Test with one null value and one negative', () => {
        expect(sum(-140, 0)).toBe(-140);
    });
    it('Test with one carry value', () => {
        expect(sum(146, 17)).toBe(163);
    });
    it('Test with tow carry value', () => {
        expect(sum(199, 1)).toBe(200);
    });
});