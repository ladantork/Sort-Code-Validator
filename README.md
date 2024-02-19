# Sort-Code-Validator
Instructions
The isValidSortCode function takes a string as an argument. This string represents a sort code. A valid sort code should be of the format 2 digits, hyphen, 2 digits, hyphen, 2 digits, e.g. 12-34-56.

The function should return true if the string is a valid sort code, and false if it is invalid.

Although there are multiple ways of achieving this, make sure to use a regular expression.

Example
isValidSortCode('12-34-56') // returns true

isValidSortCode('12-34-5678') // returns false
isValidSortCode('sortcode') // return false
isValidSortCode('12_34_56') // returns false
