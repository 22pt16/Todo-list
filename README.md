# 📝 Todo List Application using MERN

**Todo List Application using MERN** is a web application that implements basic CRUD operations using the MERN stack (MongoDB, Express JS, Node JS, React JS). Users can read, add, update, and delete their to-do list in a table using the web interface. The application also allows users to add deadlines to their tasks, reminding them of the due dates.
![image](https://github.com/22pt16/todo/assets/131383251/d0dfb504-7f13-4d8a-b5f3-af864b838748)


## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js
- npm 
- MongoDB (locally or using MongoDB Atlas)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/22pt16/todo.git
   cd todo
   ```

2. **Install server dependencies:**

   ```bash
   cd backend
   npm install
   ```

3. **Install client dependencies:**

   ```bash
   cd ../frontend
   npm install
   ```

### Setup

1. **Create a `.env` file in the `backend` directory with the following:**

   ```env
   MONGO_URL=your_mongodb_connection_string
   ```

2. **Start the backend server:**

   ```bash
   cd backend
   npm start
   ```

3. **Start the frontend application:**

   ```bash
   cd ../frontend
   npm start
   ```

4. **Open your browser and navigate to:**

   ```
   http://localhost:3000
   ```

## 🌟 Features

- 🗒️ **Create Tasks**: Add new tasks to your to-do list.
- ✏️ **Edit Tasks**: Update tasks as needed.
- ✅ **Complete Tasks**: Mark tasks as completed.
- 🗑️ **Delete Tasks**: Remove tasks no longer needed.
- 📅 **Due Dates**: Set and view due dates for tasks.

## 🛠️ Technologies Used

- **Frontend**: React.js, Bootstrap, Axios, React Router
- **Backend**: Node.js, Express.js, MongoDB, Mongoose
- **Other**: HTML, CSS, JavaScript

## 📂 Project Structure

```bash
todolts/
├── frontend/      # Frontend code
│   ├── public/
│   └── src/
├── backend/       # Backend code
│   ├── models/
│   ├── server.js
│   └── .env       # Environment variables
└── README.md
```

😊 Happy Tasking!
