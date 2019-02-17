/* Global Overrides! */
/* eslint-disable no-extend-native */

/* Hack the prototype of `Number` Object with iterators and generators */
/**
 * With this hack you can now write
 * `[ ...3 ]` and it will return => `[1, 2, 3]`
 */

Number.prototype[Symbol.iterator] = function* () {
  for (let i = 1; i <= this; i += 1) yield i;
};
