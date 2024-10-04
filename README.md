# Daddy's Home

This is a React.JS and Python Flask application combined with a ChatGPT API and MongoDB Atlas to give you the father figure you've been missing!

## Getting Started with Yarn Package Management

Yarn Package Manager allows you to install packages needed for web development, launch development servers, build projects into production builds, and much more.

**Note:** I highly recommend using Yarn for package management, but you are welcome to use npm or npx as well.

### How to Install Yarn Globally

#### Linux Environments

1. Update packages and install upgrades:
    ```bash
    sudo apt-get update && sudo apt-get full-upgrade -y
    ```
2. Install npm to install Yarn globally:
    ```bash
    sudo apt-get install npm -y
    sudo npm install -g yarn
    ```

#### macOS Environments

1. Install Homebrew (macOS package installer):
    ```bash
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    ```

2. Install Yarn globally:
    ```bash
    brew install yarn
    ```

#### Windows Environments

1. If you do not have WSL/Bash on Windows (recommended), use the link below to install Yarn:
    [Yarn Installation for Windows](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable)

## Getting Started with Frontend

Frontend development is done using React.js, which combines JavaScript with HTML and CSS.

### Directory Structure
```
frontend
├── node_modules        # Installed npm packages (make sure .gitignore ignores this)
├── public              # Public assets (don’t worry about this)
└── src
    ├── components      # Reusable components (e.g., buttons)
    ├── styles          # CSS/styles and images
    ├── routes          # Additional webpages
    ├── main.js         # Home page JS file
    ├── App.js          # BrowserRouter routing file
    └── index.js        # Entry point (don’t modify this)
├── package.json        # Project blueprint and dependencies
└── .gitignore          # Ensure node_modules is ignored
```

**Note:** Some components and files will be provided for you. For example: navbar.js, login.js, registration.js, etc. They will work with the backend and be fully commented to help you understand the process.

### How to Get It Running

1. **`cd`** into the `frontend` folder.

2. Run **`yarn install`** (**`sudo yarn install`** on Unix-based systems) to download packages specified in `package.json`.

3. Start the development server by running **`yarn start`** (or **`sudo yarn start`**). The server will start at **`http://localhost:3000`**.

    - As you code and make updates, it will compile and show you runtime errors/changes as you develop.

**Note:** Remember to update the BrowserRouter in `App.js` to ensure the application recognizes the new page you create.

## Getting Started with Backend

To conform with future Python LLM implementation, the backend development is done with Python Flask, which communicates with MongoDB Atlas as a non-relational database cloud solution.

- `main.py` will be the main backend code (keeping fewer Python files makes it easier to communicate with the frontend).
- `connect.py` will handle connection to your mongodb atlas instance.

**Note:** To connect to mongodb atlas, make sure you create your valid .env file that contains all relevant api keys, URIs, etc.. The connect.py will already connect to an .env, however, keep in mind this private repo does not include an existing .env for security reasons. Make your own .env and ensure your environment variables align with your code.

**Note:** If you mess up a schema on the backend and need to restart the whole database, let Mj know for backend purposes.

**Note:** login and registration has been commented for you to help you understand what each thing does in order to figure out how it all works together and communicates with the backend. If you still have questions about it ask Mj.

### How to Get It Running

1. If you do not have Python and pip installed, install them first.

2. Install the required packages:
    ```bash
    pip install -r Requirements.txt
    ```

3. Start the backend server:
    ```bash
    python main.py
    ```
    or
    ```bash
    python3 main.py
    ```
   - As you code and make updates, it will compile and show you runtime errors/changes as you develop.