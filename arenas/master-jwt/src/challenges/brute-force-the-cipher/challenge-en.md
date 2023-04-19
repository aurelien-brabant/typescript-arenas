Warrior!

I must say I'm impressed by your work. You've managed to create our own encryption algorithm, and you've even managed to create a cipher that can encrypt and decrypt messages using this algorithm.

Thanks to this, we can now send secure messages to each other.

However, I shall say that the algorithm you've created is not very secure. In fact, it's not secure at all, given our modern standards.

It's very easy to break using a simple brute force attack.

Modern encryption algorithms are way more complex, and they are based on mathematical concepts such as prime numbers, modular arithmetic, and so on.

We are not going to go through all of that though. The algorithm you implemented will be enough to slow down any potential attacker.

However, as a proof that your algorithm is not secure, I want you to implement a brute force attack that can decrypt any message encrypted with your algorithm.

I encrypted the following message using your algorithm:

```plain
e8D>4:D(&3D8**PD9-.8D<&8D<&>D944D*&8>D94D)*(7>59D:8.3,D&D'7:9*D+47(*D&99&(0RD{-.(-D.8D<->D<*D:8*D247*D24)*73D&3)D(4251*=D(7>594,7&5-.(D9*(-3.6:*8D94D8*(:7*D(422:3.(&9.43D34<&)&>8R
```

Your goal is to export a constant `DECRYPTED_MESSAGE` that contains the decrypted message as well as another constant `SHIFT` that contains the shift used to encrypt the message.

Something like this:

```typescript
export const DECRYPTED_MESSAGE = 'the decrypted message';

export const SHIFT = 0;
```

Good luck!