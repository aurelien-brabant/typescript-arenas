import { MessageRouterCipher } from '..';

describe('MessageRouterCipher', () => {
    let cipher: MessageRouterCipher;

    beforeEach(() => {
        cipher = new MessageRouterCipher();
    });

    describe('should decrypt a message with a given shift', () => {
        it('decrypt a message with a shift of 0 (should not change the message)', () => {
            const shift = 0;
            const message = 'Hello World!';
            const decryptedMessage = cipher.decrypt(message, shift);

            expect(decryptedMessage).toBe(message);
        });

        it('decrypt a message with a shift of 1', () => {
            const shift = 1;
            const message = 'EprOTeVThlY\'FNF$eIM[F_BdHh8gXW"6[:S7qEo:';
            const decryptedMessage = cipher.decrypt(message, shift);
            const expectedDecryptedMessage = 'DoqNSdUSgkX&EME#dHLZE^AcGg7fWV!5Z9R6pDn9';

            expect(decryptedMessage).toBe(expectedDecryptedMessage);
        });

        it('decrypt a message with a shift of 2', () => {
            const shift = 2;
            const message = "5\\ZwR44JTG[wY[%rV:{vZ4,h4XC8x,tR'RO:hE";
            const decryptedMessage = cipher.decrypt(message, shift);
            const expectedDecryptedMessage = '3ZXuP22HREYuWY#pT8ytX2*f2VA6v*rP%PM8fC';

            expect(decryptedMessage).toBe(expectedDecryptedMessage);
        });

        it('decrypt a message with a shift of 3', () => {
            const shift = 3;
            const message = 'Mxolxv#zdwfkhv#|rx$';
            const decryptedMessage = cipher.decrypt(message, shift);
            const expectedDecryptedMessage = 'Julius watches you!';

            expect(decryptedMessage).toBe(expectedDecryptedMessage);
        });

        it('decrypt a message with a shift of 5', () => {
            const shift = 5;
            const message = 'Qttpx%qnpj%~tz%kfnqji&%Gtttm&';
            const decryptedMessage = cipher.decrypt(message, shift);
            const expectedDecryptedMessage = 'Looks like you failed! Boooh!';

            expect(decryptedMessage).toBe(expectedDecryptedMessage);
        });

        it('decrypt a message with a shift of 10', () => {
            const shift = 10;
            const message =
                '^rs}*~o#~6*$y *}rJ vn*nom|$z~+*Sp*$y *ny*xy~*} mmoon*k~*~rs}6*$y *"svv*xy~*k~*kx$~rsxq*ov}o+';
            const decryptedMessage = cipher.decrypt(message, shift);
            const expectedDecryptedMessage =
                'This text, you sh@uld decrypt! If you do not succeed at this, you will not at anything else!';

            expect(decryptedMessage).toBe(expectedDecryptedMessage);
        });

        it('decrypt a message with a shift of 32', () => {
            const shift = 32;
            const message = 'b&*/(@".";*/(@*4@$00-&3@5)"/@&7&3:5)*/(@&-4&N';
            const decryptedMessage = cipher.decrypt(message, shift);
            const expectedDecryptedMessage = 'Being amazing is cooler than everything else.';

            expect(decryptedMessage).toBe(expectedDecryptedMessage);
        });

        it('decrypt a message with a shift of -2', () => {
            const shift = -2;
            const message = '@cgle}_k_xgle}gq}_k_xgle~';
            const decryptedMessage = cipher.decrypt(message, shift);
            const expectedDecryptedMessage = 'Being amazing is amazing!';

            expect(decryptedMessage).toBe(expectedDecryptedMessage);
        });

        it('decrypt a message with a shift of -32', () => {
            const shift = -32;
            const message = '"EING_AMAZING_IS_COOLER_THAN_EVERYTHING_ELSEm';
            const decryptedMessage = cipher.decrypt(message, shift);
            const expectedDecryptedMessage = 'Being amazing is cooler than everything else.';

            expect(decryptedMessage).toBe(expectedDecryptedMessage);
        });
    });

    describe("should wrap around the ASCII's table printable characters", () => {
        it('decrypting a message with a shift of 95 should preserve the original string', () => {
            const shift = 95;
            const message = 'Hello World!';
            const decryptedMessage = cipher.decrypt(message, shift);

            expect(decryptedMessage).toBe(message);
        });

        it('decrypting a message with any multiple of 95 should preserve the original string', () => {
            for (let i = 1; i <= 100; i++) {
                const shift = 95 * i;
                const message = 'Hello World!';
                const decryptedMessage = cipher.decrypt(message, shift);

                expect(decryptedMessage).toBe(message);
            }
        });

        it('decrypting the first printable character of the ASCII table with a shift of 1 should transform it to the last printable one', () => {
            const shift = 1;
            const message = ' ';
            const decryptedMessage = cipher.decrypt(message, shift);
            const expectedDecryptedMessage = '~';

            expect(decryptedMessage).toBe(expectedDecryptedMessage);
        });
    });
});
