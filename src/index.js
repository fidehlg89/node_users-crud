const app = require('./app');
const { connectToDatabase } = require('./database');

async function main() {
    // Database Connection
    await connectToDatabase();

    // Express Application
    await app.listen(4000);
    console.log('Server on port 4000: Connected');
};

main();