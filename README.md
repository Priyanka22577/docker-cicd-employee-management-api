# Dockerized Employee Management REST API 🚀

A fully containerized Employee Management system built using Node.js, Express, MongoDB, Docker, and Jenkins CI/CD pipeline.

---

# 📌 Project Overview

This project is a backend REST API that performs CRUD operations on employee data.  
It is fully containerized using Docker and automated using Jenkins pipeline for CI/CD.

---

# ⚙️ Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- Docker
- Docker Compose
- Jenkins (CI/CD)
- Git & GitHub

---

# 📂 Project Structure

```
emp-management-system
│
├── server.js
├── Dockerfile
├── docker-compose.yml
├── Jenkinsfile
├── package.json
├── package-lock.json
└── README.md
```

---

# 🚀 Features

- Create Employee
- Read Employees
- Update Employee
- Delete Employee
- REST API with Express.js
- MongoDB integration
- Dockerized application
- Multi-container setup (App + MongoDB)
- CI/CD pipeline using Jenkins

---

# 🐳 Docker Setup

## Build and Run Containers

```bash
docker compose up --build
```

## Stop Containers

```bash
docker compose down
```

---

# 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | /        | API status |
| POST   | /employee | Add employee |
| GET    | /employees | Get all employees |
| PUT    | /employee/:id | Update employee |
| DELETE | /employee/:id | Delete employee |

---

# 📥 Add Employee Example

```bash
curl -X POST http://localhost:3008/employee \
-H "Content-Type: application/json" \
-d '{"name":"Rahul","department":"IT","salary":50000}'
```

---

# 📤 Get All Employees

Open in browser:

```
http://localhost:3008/employees
```

---

# 🗄 MongoDB Access

Inside container:

```bash
docker exec -it <mongo-container> bash
mongosh
```

Then:

```js
use employees
db.employees.find().pretty()
```

---

# 🔄 Jenkins Pipeline Flow

```text
GitHub → Jenkins → Build Docker Images → Run Containers → Deploy API
```

---

# 📦 Docker Containers

- App Container → Runs Node.js API
- MongoDB Container → Stores employee data

---

# 📈 Learning Outcomes

- Backend API development
- CRUD operations
- MongoDB integration
- Docker containerization
- Multi-container applications
- Jenkins CI/CD automation
- DevOps workflow understanding

---

# 🚀 Future Improvements

- Add authentication (JWT)
- Add frontend UI
- Deploy on AWS EC2
- Add environment variables (.env)
- Add logging & monitoring
- Add GitHub webhook auto-deploy

---

# 👨‍💻 Author

Priyanka

---

# ⭐ Note

This project is a beginner-friendly DevOps + Backend project demonstrating real-world CI/CD pipeline and containerized architecture.
