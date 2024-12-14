function greeter(person: string): string {
  return "Hello, " + person;
}

let user = "Jane Doe";

console.log(greeter(user)); // This will work correctly

// Alternative solution: Modify the function to handle arrays
function greeterArray(persons: string[]): string {
  return "Hello, " + persons.join(' ');
}

let users = ["Jane", "Doe"];
console.log(greeterArray(users)); // This will also work correctly