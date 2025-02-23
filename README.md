# 🏦 PayTM Clone

A simple **CRUD MERN application** for learning and experimenting with MongoDB, Express.js, React, and Node.js.

---

## 🚀 **Project Setup**

### 🛢️ **MongoDB Setup (Docker)**

To run a local MongoDB instance with a replica set:

```bash
# Build the MongoDB Docker image
docker build ./ -t mongodb:4.7-replset

# Run the MongoDB container
docker run --name mongodb-replset -p 27017:27017 -d mongodb:4.7-replset
```

Ensure MongoDB is running correctly by checking the container status:

```bash
docker ps
```

### 📦 **Install Dependencies**

Navigate to the project directory and install the necessary packages:

```bash
npm install
```

Or, if using Yarn:

```bash
yarn install
```

---

## 🏃‍♀️ **Running the Application**

Once dependencies are installed and the database is running, start the backend server:

```bash
npm start
```

For the frontend, navigate to the frontend directory and run:

```bash
cd frontend
npm start
```

---

## 📂 **Project Structure**

```
PAYTM
├── backend
│ ├── routes/
│ │ ├── account.js
│ │ ├── index.js
│ │ └── user.js
│ ├── config.js
│ ├── db.js
│ ├── index.js
│ ├── middleware.js
│ ├── .gitignore
│ ├── package.json
│ └── package-lock.json
├── frontend
│ ├── public/
│ ├── src/
│ ├── index.html
│ ├── vite.config.js
│ ├── .gitignore
│ ├── package.json
│ └── package-lock.json
├── README.md
└── Dockerfile
```

---

## 🛠️ **Technologies Used**

- **Frontend:** React, Vite, Tailwind CSS  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **Containerization:** Docker 

---

## 🧠 **Contributing**

Feel free to fork this repository, open issues, and submit pull requests! Contributions are always welcome. 🎯

1. **Fork the repository**
2. **Create a new branch:** `git checkout -b feature-branch`
3. **Commit your changes:** `git commit -m "Add new feature"`
4. **Push to the branch:** `git push origin feature-branch`
5. **Create a pull request**

---



