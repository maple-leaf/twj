import { concatString } from '../src/functions';

describe('test functions', () => {
    test('call concatString with two string', () => {
        expect(concatString('a', 'b')).toBe('a-b');
    });
    test('call concatString with two string, one is empty string', () => {
        expect(concatString('a', '')).toBe('a');
        expect(concatString('b', '')).toBe('b');
    });
});
