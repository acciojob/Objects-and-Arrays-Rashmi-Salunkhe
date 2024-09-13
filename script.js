const players = ["John", "Bob", "Alice", "Poppy"];
const person = {
  name: "John Doe",
  age: 80,
};

// 1. Reference to the players array
const team = players;

// 2. Copy of the players array
const team1 = [...players];

// 3. Copy of the person object
const cap1 = { ...person };

// To expose the variables for the window object (for testing or browser access)
window.players = players;
window.person = person;
window.team = team;
window.team1 = team1;
window.cap1 = cap1;
