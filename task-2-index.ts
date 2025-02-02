// 👉 Step 1: Define a User type
type User = {
  name: string;
  age: number;
  email: string;
};

// 👉 Step 2: Create an array to store users
const users: User[] = []; // This will store multiple users

// 👉 Step 3: Function to add a user to the list
function addUser(name: string, age: number, email: string): void {
  const newUser: User = {
    name,
    age,
    email,
  };

  users.push(newUser);
}

// 👉 Step 4: Function to print all users
function printUsers(): void {
  console.log("List of Users:");

  // TODO: Loop through the users array and print each user's details
}

// 👉 Step 5: Test the functions
addUser("Ido", 25, "ido@example.com");
addUser("Almayo", 30, "almayo@example.com");

printUsers(); // This should print all users
