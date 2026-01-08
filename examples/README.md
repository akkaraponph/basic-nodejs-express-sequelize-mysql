<div align="center">

# 📁 ตัวอย่างโค้ดตาม Module และ Section

**โค้ดตัวอย่างที่แยกตาม Module และ Section ตาม Tutorial**

[⬆ กลับไปที่ README หลัก](../README.md)

---

</div>

## 📂 โครงสร้างโฟลเดอร์

```
examples/
├── module-1/                    # 📡 Basic API
│   ├── section-1-1/              # 🎯 Intro
│   │   └── server.js
│   ├── section-1-2/              # 🛣️ สร้าง Route ด้วย Express
│   │   └── app.js
│   ├── section-1-3/              # 💡 ตัวอย่างการสร้าง API
│   │   └── app-demo.js
│   ├── section-1-4/              # ⚙️ การสร้าง Scripts
│   │   └── package.json
│   ├── section-1-5/              # 🔄 RESTful API
│   │   ├── app-demo.js
│   │   └── db.json
│   ├── section-1-6/              # 📥 Method GET and API Params
│   │   ├── api-demo.js
│   │   └── db.json
│   ├── section-1-7/              # 📤 Using JSON and Method POST
│   │   ├── api-demo.js
│   │   └── db.json
│   ├── section-1-8/              # ✏️ Method PUT
│   │   ├── api-demo.js
│   │   └── db.json
│   └── section-1-9/              # 🗑️ Method DELETE
│       ├── api-demo.js
│       └── db.json
│
├── module-2/                    # 💾 Basic API MySQL
│   ├── section-2-1/              # 🚀 Create New App Express and MySQL
│   │   ├── index.js
│   │   └── package.json
│   ├── section-2-2/              # 🔌 Connect MySQL Database
│   │   └── index.js
│   ├── section-2-3/              # ➕ CREATE USER
│   │   └── index.js
│   ├── section-2-4/              # ✏️ UPDATE USER
│   │   └── index.js
│   └── section-2-5/              # 🗑️ DELETE USER
│       └── index.js
│
├── module-3/                    # 🗄️ Sequelize
│   ├── section-3-2/              # 🚀 New Project for Sequelize Demo
│   │   ├── server.js
│   │   └── package.json
│   ├── section-3-3/              # ⚙️ Config Sequelize
│   │   ├── config/
│   │   │   └── db.config.js
│   │   ├── models/
│   │   │   └── index.js
│   │   ├── server.js
│   │   └── package.json
│   ├── section-3-4/              # 📋 สร้างโมเดล Student และ Faculty
│   │   ├── config/
│   │   │   └── db.config.js
│   │   ├── models/
│   │   │   ├── index.js
│   │   │   ├── faculty.model.js
│   │   │   └── student.model.js
│   │   ├── server.js
│   │   └── package.json
│   ├── section-3-5/              # 🎮 การสร้าง Controllers
│   │   ├── config/
│   │   │   └── db.config.js
│   │   ├── models/
│   │   │   ├── index.js
│   │   │   ├── faculty.model.js
│   │   │   └── student.model.js
│   │   ├── controllers/
│   │   │   ├── faculty.controller.js
│   │   │   └── student.controller.js
│   │   ├── server.js
│   │   └── package.json
│   ├── section-3-6/              # 🛣️ การสร้าง Faculty Routes
│   │   ├── config/
│   │   ├── models/
│   │   ├── controllers/
│   │   ├── routes/
│   │   │   └── faculty.route.js
│   │   ├── server.js
│   │   └── package.json
│   ├── section-3-7/              # 🛣️ การสร้าง Student Routes
│   │   ├── config/
│   │   ├── models/
│   │   ├── controllers/
│   │   ├── routes/
│   │   │   ├── faculty.route.js
│   │   │   └── student.route.js
│   │   ├── server.js
│   │   └── package.json
│   ├── section-3-8/              # ➕ CRUD Complete (Faculty)
│   │   ├── config/
│   │   ├── models/
│   │   ├── controllers/
│   │   │   └── faculty.controller.js (CRUD Complete)
│   │   ├── routes/
│   │   │   └── faculty.route.js (CRUD Complete)
│   │   ├── server.js
│   │   └── package.json
│   └── section-3-9/              # 👨‍🎓 CRUD Student
│       ├── config/
│       ├── models/
│       ├── controllers/
│       │   └── student.controller.js (CRUD Complete)
│       ├── routes/
│       │   ├── faculty.route.js
│       │   └── student.route.js
│       ├── server.js
│       └── package.json
│
└── module-4/                    # 🔐 Authorization with JWT
    ├── section-4-1/              # 🔑 JWT Authentication
    │   ├── config/
    │   ├── models/
    │   ├── controllers/
    │   │   └── student.controller.js (with login)
    │   ├── routes/
    │   │   └── student.route.js
    │   ├── server.js
    │   └── package.json
    ├── section-4-2/              # 🛡️ สร้าง Middleware สำหรับ Verify Token
    │   ├── config/
    │   ├── models/
    │   ├── middlewares/
    │   │   └── verify-token.js
    │   └── package.json
    ├── section-4-3/              # 🔐 การใช้งาน Middleware เพื่อป้องกัน Routes
    │   ├── config/
    │   ├── models/
    │   ├── controllers/
    │   │   ├── faculty.controller.js
    │   │   └── student.controller.js
    │   ├── routes/
    │   │   ├── faculty.route.js (Protected)
    │   │   └── student.route.js (Protected)
    │   ├── middlewares/
    │   │   └── verify-token.js
    │   ├── server.js
    │   └── package.json
    ├── section-4-4/              # 📝 ตัวอย่างโค้ดเต็ม
    │   ├── config/
    │   ├── models/
    │   ├── controllers/
    │   │   ├── faculty.controller.js
    │   │   └── student.controller.js (Complete)
    │   ├── routes/
    │   │   ├── faculty.route.js
    │   │   └── student.route.js
    │   ├── middlewares/
    │   │   └── verify-token.js
    │   ├── server.js
    │   └── package.json
    └── section-4-5/              # 🔧 การใช้ Environment Variables
        ├── config/
        │   └── db.config.js (ใช้ .env)
        ├── models/
        ├── controllers/
        │   ├── faculty.controller.js
        │   └── student.controller.js (ใช้ .env)
        ├── routes/
        ├── middlewares/
        │   └── verify-token.js (ใช้ .env)
        ├── .env.example
        ├── server.js (ใช้ dotenv)
        └── package.json
```

---

## 🚀 วิธีใช้งาน

### 1. เลือก Module และ Section ที่ต้องการศึกษา

เข้าไปในโฟลเดอร์ที่เกี่ยวข้อง เช่น:

```bash
cd examples/module-1/section-1-1
```

### 2. ติดตั้ง Dependencies

ถ้ามีไฟล์ `package.json` ให้ติดตั้ง dependencies:

```bash
npm install
```

### 3. รันโค้ด

```bash
# Development mode (ถ้ามี nodemon)
npm run dev

# หรือ Production mode
npm start

# หรือรันโดยตรง
node server.js
# หรือ
node index.js
# หรือ
node app.js
```

---

## 📋 รายละเอียดแต่ละ Module

### Module 1: 📡 Basic API

เรียนรู้พื้นฐานการสร้าง API ด้วย Node.js และ Express

- **Section 1-1**: สร้าง server พื้นฐานด้วย HTTP library
- **Section 1-2**: สร้าง route ด้วย Express
- **Section 1-3**: ตัวอย่างการสร้าง API
- **Section 1-4**: การสร้าง scripts
- **Section 1-5**: RESTful API พื้นฐาน
- **Section 1-6**: Method GET และ API Params
- **Section 1-7**: Method POST
- **Section 1-8**: Method PUT
- **Section 1-9**: Method DELETE (CRUD Complete)

---

### Module 2: 💾 Basic API MySQL

เรียนรู้การเชื่อมต่อและใช้งาน MySQL Database กับ Express

- **Section 2-1**: สร้างโปรเจกต์ใหม่
- **Section 2-2**: เชื่อมต่อ MySQL Database
- **Section 2-3**: CREATE USER
- **Section 2-4**: UPDATE USER
- **Section 2-5**: DELETE USER (CRUD Complete)

---

### Module 3: 🗄️ Sequelize

เรียนรู้การใช้ Sequelize ORM สำหรับจัดการฐานข้อมูล

- **Section 3-2**: สร้างโปรเจกต์ใหม่
- **Section 3-3**: Config Sequelize
- **Section 3-4**: สร้างโมเดล Student และ Faculty
- **Section 3-5**: สร้าง Controllers
- **Section 3-6**: สร้าง Faculty Routes
- **Section 3-7**: สร้าง Student Routes
- **Section 3-8**: CRUD Complete (Faculty)
- **Section 3-9**: CRUD Complete (Student)

---

### Module 4: 🔐 Authorization with JWT

เรียนรู้การสร้างระบบ Authentication และ Authorization ด้วย JWT

- **Section 4-1**: JWT Authentication (Login)
- **Section 4-2**: สร้าง Middleware สำหรับ Verify Token
- **Section 4-3**: การใช้งาน Middleware เพื่อป้องกัน Routes
- **Section 4-4**: ตัวอย่างโค้ดเต็ม
- **Section 4-5**: การใช้ Environment Variables

---

## 📝 หมายเหตุ

- ✅ แต่ละ Section มีโค้ดตัวอย่างที่สมบูรณ์ตาม Tutorial
- ⚠️ บาง Section อาจต้องใช้ dependencies จาก Section ก่อนหน้า
- 🔧 ควรติดตั้ง dependencies ก่อนรันโค้ด
- 📦 ไฟล์ `package.json` มี dependencies ที่จำเป็นครบถ้วน
- 🔐 สำหรับ Module 4 Section 4-5 ควรสร้างไฟล์ `.env` จาก `.env.example`

---

## 🎯 Quick Start

### ตัวอย่าง: Module 1 Section 1-2

```bash
cd examples/module-1/section-1-2
npm install
node app.js
```

### ตัวอย่าง: Module 2 Section 2-1

```bash
cd examples/module-2/section-2-1
npm install
npm run dev
```

### ตัวอย่าง: Module 3 Section 3-4

```bash
cd examples/module-3/section-3-4
npm install
npm run dev
```

### ตัวอย่าง: Module 4 Section 4-5

```bash
cd examples/module-4/section-4-5
cp .env.example .env
# แก้ไข .env ตามต้องการ
npm install
npm run dev
```

---

<div align="center">

**📚 ศึกษาเพิ่มเติมได้ที่ [README หลัก](../README.md)**

</div>

