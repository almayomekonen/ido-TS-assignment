// 👉 Step 1: Define the User interface
// A User should have: name (string), age (number), and email (string)
type User = {
  // TODO: Define the User properties here
};

// 👉 Step 2: Create a function to make a new user
// This function should take name, age, and email as parameters and return a User object.
function createUser(name: string, age: number, email: string): User {
  return {
    // TODO: Return an object with name, age, and email
  };
}

// 👉 Step 3: Create a function to print user details
// This function should take a User object and print their details.
function printUser(user: User): void {
  // TODO: Print user details here
}

// 👉 Step 4: Test your code
// Create a user and print their details
const user1 = createUser("almayo", 25, "almayo@example.com");
printUser(user1);
