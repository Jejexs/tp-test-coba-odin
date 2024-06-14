import {describe, expect, it} from "vitest";
import { getTeamScore, getTeamScoreWithBlue, isEqual } from "../modules/coba.ts";

describe('Get team score', () => {
    describe('single value', () => {
        it('should return the value of the green dice', () => {
            expect(getTeamScore(['green'])).toBe(1);
        });
        it('should return the value of the gray dice', () => {
            expect(getTeamScore(['gray'])).toBe(2);
        });
        it('should return the value of the pink dice', () => {
            expect(getTeamScore(['pink'])).toBe(3);
        });
        it('should return the value of the yellow dice', () => {
            expect(getTeamScore(['yellow'])).toBe(-1);
        });
        it('should return the value of the orange dice when is alone', () => {
            expect(getTeamScore(['orange'])).toBe(1);
        });
        it('should return the value of the blue dice when is alone', () => {
            expect(getTeamScoreWithBlue(['blue'], [])).toBe(0);
        });
    });
    describe('double value', () => {
        it('should return the value of two green dice', () => {
            expect(getTeamScore(['green','green'])).toBe(2);
        });
        it('should return the value of two gray dice', () => {
            expect(getTeamScore(['gray','gray'])).toBe(4);
        });
        it('should return the value of two pink dice', () => {
            expect(getTeamScore(['pink','pink'])).toBe(6);
        });
        it('should return the value of two yellow dice', () => {
            expect(getTeamScore(['yellow','yellow'])).toBe(-2);
        });
        it('should return the value of two orange dice', () => {
            expect(getTeamScore(['orange', 'orange'])).toBe(4);
        });
        it('should return the value of two blue dice', () => {
            expect(getTeamScoreWithBlue(['blue','blue'], [])).toBe(0);
        });
    });
    describe('test special combo', () => {
        describe('test blue special combo', () => {
            it('should return the value of the blue dice when is with a green dice', () => {
                expect(getTeamScoreWithBlue(['blue', 'green'], ['green'])).toBe(1 + 1);
            });
            it('should return the value of blue dice when is with another blue dice', () => {
                expect(getTeamScoreWithBlue(['blue', 'blue'], ['green','green'])).toBe(4);
            });
        });
        describe('test orange special combo', () => {
            it('should return 2 for orange dice in pair group', () => {
                expect(getTeamScore(['orange', 'green'])).toBe(2 + 1);
            });
            it('should return 1 for orange dice in odd group', () => {
                expect(getTeamScore(['orange', 'green', 'gray'])).toBe(1 + 1 + 2);
            });
        });
        describe('test pink special combo', () => {
            it('should set the lowest dice to 0 when there is a pink dice', () => {
                expect(getTeamScore(['pink', 'green'])).toBe(3 + 0);
            });
            it('should set the lowest dice to 0 when there is a pink dice with multiple dice', () => {
                expect(getTeamScore(['pink', 'green', 'yellow'])).toBe(3 - 0 - 1);
            });
        });
    });
});

describe('Get team score are equal', () => {
    describe('single value', () => {
        it('try green team', () => {
            expect(isEqual(['green'],['green'])).toBe(true);
        });
        it('try gray team', () => {
            expect(isEqual(['gray'],['gray'])).toBe(true);
        });
        it('try pink team', () => {
            expect(isEqual(['pink'], ['pink'])).toBe(true);
        });
        it('try yellow team', () => {
            expect(isEqual(['yellow'], ['yellow'])).toBe(true);
        });
        it('try orange team', () => {
            expect(isEqual(['orange'],['orange'])).toBe(true);
        });
        it('try blue team', () => {
            expect(isEqual(['blue'],['blue'])).toBe(true);
        });
    });
    describe('test special combo team', () => {
        it('try pink yellow team', () => {
            expect(isEqual(['pink', 'yellow'], ['pink', 'yellow'])).toBe(true);
        });
        it('try pink yellow team revert', () => {
            expect(isEqual(['pink', 'yellow'], ['yellow', 'pink'])).toBe(true);
        });
        it('try pink yellow team and blue', () => {
            expect(isEqual(['pink', 'yellow'], ['blue'])).toBe(false);
        });
    });
});
