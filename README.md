# Shipmnts# Movie Management System

## Project Setup

### Prerequisites

- Node.js installed
- MongoDB installed

1. Open Visual Studio Code and start a new terminal.

2. Initialize the project:

    ```bash
    npm init -y
    ```

3. Install dependencies:

    ```bash
    npm install express dotenv mongoose body-parser bcrypt jsonwebtoken
    npm install --save-dev nodemon
    ```

4. Manually create a `.env` file in the root directory of your project and add the following:

    ```env
    mongodb+srv://asthabhatt1210:abc@dbcluster.bxf7uwi.mongodb.net/?retryWrites=true&w=majority&appName=dbcluster
    ```

5. Run the server:

    ```bash
    node index.js
    ```
    
6. Git Comments:
   
   ```bash
   git init
   git remote add origin https://github.com/asthabhatt1210/Shipmnts.git
   git fetch origin
   git checkout main
   git rebase origin/main
   git add .
   git rebase --continue
   git push origin main --force
   git commit -m "user:create,update,delete and sdisplay"
   git push origin main
   ```

7. Postman setup:

   ```bash
   git add Shipmnts_postman_collection.json
   git commit -m "Adding the postman collection"
   git push origin main
   ```



   


