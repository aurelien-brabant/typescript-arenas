Warrior!

Congratualations, we now have a working cipher that can encrypt messages!

But obviously, we need to be able to decrypt messages as well, otherwise all of that was for nothing.

Your task is to add a `decrypt` method to your `MessageRouterCipher` class.

```typescript
export class MessageRouterCipher {
  encrypt(message: string, shift: number): string {
    // your previous encryption logic here
  }

  decrypt(message: string, shift: number): string {
    // actual decryption logic here
  }
}
```

Oh, by the way: if you are smart enough, you should only have to write a few lines of code to make this work.

Good luck!