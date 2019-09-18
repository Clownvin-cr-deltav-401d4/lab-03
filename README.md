# LAB - 1

## Validator Lab

### Author: Calvin Hall

### Links and Resources
* [submission PR](https://github.com/Clownvin-cr-deltav-401d4/lab-01/pull/4)
* [travis](https://www.travis-ci.com/Clownvin-cr-deltav-401d4/lab-01)

### Modules
#### `validator.js`
##### Exported Values and Methods
* isValid(input, ...rules) - Test the input against each passed in rule.
* isString(input) - Test that the input is a string
* isNumber(input) - Test that the input is a number
* isObject(input) - Test that the input is an object
* isFunction(input) - Test that the input is a function
* isArray(input) - Test that the input is an array
* isBoolean(input) - Test that the input is a boolean
* hasProperty(input) - Test that input object has a property
* validateProperty(input, validator) - Test the input against the validator
* validateArray(array, ...validators) - Test the array against each validator
* validateArrayTypes(array) - Test that all the array variables are the same type.
* validateArrayValues(array, valids) - Test that the array only contains objects that are also in valids array.


#### Running the app
* `npm test`
  
#### Tests
* `npm test`

#### UML
No
