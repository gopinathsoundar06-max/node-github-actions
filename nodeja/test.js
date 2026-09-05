const greet = require("./app");

const result = greet("Gopi");

if (result === "Hello, Gopi! Welcome to Node.js CI/CD practice.") {
    console.log("✅ Test passed");
} else {
    console.log("❌ Test failed");
    process.exit(1);
}