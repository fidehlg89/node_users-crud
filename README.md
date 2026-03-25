# Node Users CRUD

A simple Node.js and Express API to manage users with MongoDB. This project includes basic user management features and data seeding capabilities.

## 🚀 Features

- **User Management**: Simple CRUD structure to handle user data.
- **Data Seeding**: Integration with [Faker](https://github.com/marak/Faker.js/) to generate mock user data.
- **Database Integration**: Seamless connection to MongoDB using Mongoose.
- **Middleware**: Includes Morgan for request logging and CORS support.

## 🛠️ Tech Stack

- **Runtime**: [Node.js](https://nodejs.org/)
- **Framework**: [Express.js](https://expressjs.com/)
- **Database**: [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/)
- **Utilities**: [Cors](https://www.npmjs.com/package/cors), [Morgan](https://www.npmjs.com/package/morgan), [Dotenv](https://www.npmjs.com/package/dotenv), [Faker](https://www.npmjs.com/package/faker)

## 📋 Prerequisites

To run this project, you need:
- **Node.js** (v14 or higher recommended)
- **MongoDB** (running locally or a cloud instance like MongoDB Atlas)

## ⚙️ Installation

1.  **Clone or download** the project.
2.  Navigate to the project directory:
    ```bash
    cd node_users-crud
    ```
3.  Install the dependencies:
    ```bash
    npm install
    # or if you use yarn
    yarn install
    ```

## 🔐 Environment Variables

Create a `.env` file in the root directory and add your MongoDB connection string:

```env
MONGODB_URI=mongodb://localhost/node_users-crud
```

## 🚀 Usage

To start the server in development mode with `nodemon`:

```bash
npm run dev
```

The server will be running on `http://localhost:4000`.

## 📡 API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/users/create` | Seeds 5 fake users into the database. |
| `GET` | `/api/users` | Returns a JSON list of all users. |

## 🏗️ Project Structure

```text
├── src/
│   ├── models/        # Database schemas
│   ├── routes/        # API route definitions
│   ├── app.js         # Express app configuration
│   ├── database.js    # Database connection logic
│   └── index.js       # Entry point
├── .env.example       # Example of environment variables
├── package.json       # Project dependencies and scripts
└── README.md          # Project documentation
```

## 📄 License

This project is licensed under the MIT License.
