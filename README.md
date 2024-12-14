# Type 'string[]' is not assignable to type 'string'
This TypeScript bug demonstrates a common type error: assigning an array of strings to a variable expecting a single string.

The `greeter` function expects a single string argument, but the `user` variable is an array of strings. This mismatch causes a type error.

The solution involves either modifying the `greeter` function to accept an array or changing the `user` variable to a single string.