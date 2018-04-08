# is-non-empty-array
Returns true if a passed value is an Array with at least one element.

Install with `yarn add is-non-empty-array`.

## Usage

```javascript
import isNonEmptyArray from 'is-non-empty-array';

isNonEmptyArray([1]); // => true
isNonEmptyArray([{}]); // => true
isNonEmptyArray(['hello', 'there', 'folks']); // => true
isNonEmptyArray([undefined]); // => true

isNonEmptyArray(1); // => false
isNonEmptyArray(null); // => false
isNonEmptyArray(undefined); // => false
isNonEmptyArray('hello, world!'); // => false
isNonEmptyArray([]); // => false
```
