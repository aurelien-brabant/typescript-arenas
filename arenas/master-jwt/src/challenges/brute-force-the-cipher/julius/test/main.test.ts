import { DECRYPTED_MESSAGE as REF_DECRYPTED_MESSAGE, SHIFT as REF_SHIFT } from './ref';
import { DECRYPTED_MESSAGE as ACTUAL_DECRYPTED_MESSAGE, SHIFT as ACTUAL_SHIFT } from '..';

describe("Julius's cipher brute force attack", () => {
    it('should have found the correct shift', () => {
        expect(ACTUAL_SHIFT).toBe(REF_SHIFT);
    });

    it('should have decrypted the message correctly', () => {
        expect(ACTUAL_DECRYPTED_MESSAGE).toBe(REF_DECRYPTED_MESSAGE);
    });
});
