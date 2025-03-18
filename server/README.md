# Simple Express API with Sequelize

This is a basic Express.js API that connects to a database using Sequelize ORM. It sets up a server, connects to a database, and synchronizes the database models.

## Features

-   **Express.js:** Sets up a basic web server.
-   **Sequelize ORM:** Connects to and interacts with a database.
-   **CORS:** Enables Cross-Origin Resource Sharing.
-   **Body Parser:** Parses incoming request bodies.
-   **Environment Variables:** Uses `.env` file for configuration.
-   **Database Synchronization:** Automatically creates or updates database tables based on defined models.

## Getting Started

### Prerequisites

-   Node.js and npm (or yarn) installed on your machine.
-   A database (e.g., MySQL, PostgreSQL, SQLite) configured and running.
-   `.env` file configured with database connection details.

### Installation

1.  Clone the repository:

    ```bash
    git clone https://github.com/VictoryOseiwe/ChatBox.git
    cd ChatBox
    ```

2.  Install dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

3.  Create a `.env` file in the root directory with the following variables, replacing the placeholders with your actual database credentials:

    ```
    PORT=3000
    DB_NAME=your_database_name
    DB_USER=your_database_user
    DB_PASSWORD=your_database_password
    DB_HOST=your_database_host
    DB_DIALECT=mysql # or postgres, sqlite, etc.
    ```

### Running the Application

1.  Start the server:

    ```bash
    npm start
    # or
    yarn start
    ```

2.  The server will start, and you will see console messages indicating successful database connection and server startup.

## Code Explanation

-   **`express`:** Imports the Express.js framework.
-   **`dotenv`:** Imports the `dotenv` library to load environment variables from the `.env` file.
-   **`cors`:** Imports the `cors` middleware to handle Cross-Origin Resource Sharing.
-   **`body-parser`:** Imports the `body-parser` middleware to parse request bodies.
-   **`sequelize`:** Imports the Sequelize instance from `config/db.js`.
-   **`User`:** Imports the `User` model from `models/Users.js`.
-   **`env.config()`:** Loads environment variables from the `.env` file.
-   **`app.use(cors())`:** Enables CORS for all routes.
-   **`app.use(express.json())`:** Parses incoming JSON request bodies.
-   **`app.use(bodyParser.urlencoded({ extended: true }))`:** Parses URL-encoded request bodies.
-   **`PORT`:** Retrieves the port number from the environment variables.
-   **`sequelize.authenticate()`:** Attempts to connect to the database and logs success or failure.
-   **`sequelize.sync()`:** Synchronizes the database models with the database, creating or updating tables as needed.
-   **`app.listen(PORT, ...)`:** Starts the Express server and listens on the specified port.

## Project Structure

-   **`config/db.js`:** Contains the Sequelize instance and database connection configuration.
-   **`models/Users.js`:** Defines the `User` model using Sequelize.
-   **`index.js`:** The main server file.
-   **`.env`:** Contains environment variables for database credentials and port.

## Customization

-   You can add more models by creating new files in the `models` directory.
-   You can define routes and controllers to handle API requests.
-   You can customize the database connection details in the `.env` file and `config/db.js`.
-   You can add middleware for authentication, logging, and other purposes.

## Contributing

Feel free to contribute by submitting pull requests or opening issues for bug reports or feature requests.
