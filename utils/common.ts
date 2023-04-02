/**
 * ???
 */
export const foo = <I>(z: I[]) => [...new Set(z)];

/**
 * ???
 */
export const bar = <O, K extends keyof O>(a: O, ...b: K[]) =>
  Object.fromEntries(b.map((c) => [c, a[c]])) as Pick<O, K>;

/**
 * ???
 */
export const boo = <
  K extends string | number,
  O extends { [Key in K]: unknown }
>(
  a: K,
  b: O
): O[K] => b[a];

/**
 * ???
 */
export type Azerty<T> = {
  [P in keyof T]-?: T[P];
};

/**
 * ???
 */
export type Ytreza<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

/**
 * ???
 */
export type AttributeLike<K extends keyof Attribute = never> = {
  attribute: Pick<Attribute, 'type' | K>;
};
type Attribute = {
  id: string;
  type: 'foo' | 'bar';
  toto: number;
};
