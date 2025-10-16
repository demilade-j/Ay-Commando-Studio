// LetterStagger.ts
export const letterVariants = {
  initial: { y: 0 },
  hover: (i: number) => ({
    y: -5,
    transition: { delay: i * 0.05, duration: 0.2 },
  }),
};
