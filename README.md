<div align="center">

หมายเหตุ Tutorial นี้ได้จัดทำขึ้นเมื่อ (April 4th, 2023) และได้รับการปรับปรุงเมื่อ (January 8th, 2026) 


# 🚀 การสร้าง API โดยใช้ JavaScript Node.js Express

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=sequelize&logoColor=white)

**คู่มือการพัฒนา RESTful API แบบครบวงจรด้วย Node.js, Express, Sequelize และ MySQL**

[⬆ กลับไปด้านบน](#-การสร้าง-api-โดยใช้-javascript-nodejs-express) • [📚 สารบัญ](#-สารบัญ)

---

</div>

## 📖 คำนำ

เอกสารฉบับนี้เป็นการพัฒนา **web service** หรือ **RESTful API** โดยใช้ภาษา **JavaScript Node.js** ร่วมกับเฟรมเวิร์กและไลบรารี่ต่าง ๆ ได้แก่:

- 🌐 **Express HTTP Framework** - สำหรับสร้าง web server
- 🗄️ **Sequelize** - ORM สำหรับจัดการฐานข้อมูล
- 💾 **MySQL** - ฐานข้อมูลเชิงสัมพันธ์
- 🔧 **POSTMAN** - สำหรับทดสอบ API

---

## 📚 สารบัญ

### [Module 1: 📡 Basic API](#module-1--basic-api)
- [Section 1-1 - 🎯 Intro](#section-1-1-----intro)
- [Section 1-2 - 🛣️ สร้าง Route ด้วย Express](#section-1-2-----สร้าง-route-ด้วย-express)
- [Section 1-3 - 💡 ตัวอย่างการสร้าง API](#section-1-3-----ตัวอย่างการสร้าง-api)
- [Section 1-4 - ⚙️ การสร้าง Scripts](#section-1-4-----การสร้าง-scripts)
- [Section 1-5 - 🔄 RESTful API](#section-1-5-----restful-api)
- [Section 1-6 - 📥 Method GET and API Params](#section-1-6-----method-get-and-api-params)
- [Section 1-7 - 📤 Using JSON and Method POST](#section-1-7-----using-json-and-method-post)
- [Section 1-8 - ✏️ Method PUT](#section-1-8-----method-put)
- [Section 1-9 - 🗑️ Method DELETE](#section-1-9-----method-delete)

### [Module 2: 💾 Basic API MySQL](#module-2--basic-api-mysql)
- [Section 2-1 - 🚀 Create New App Express and MySQL](#section-2-1-----create-new-app-express-and-mysql)
- [Section 2-2 - 🔌 Connect MySQL Database](#section-2-2-----connect-mysql-database)
- [Section 2-3 - ➕ CREATE USER](#section-2-3-----create-user)
- [Section 2-4 - ✏️ UPDATE USER](#section-2-4-----update-user)
- [Section 2-5 - 🗑️ DELETE USER](#section-2-5-----delete-user)

### [Module 3: 🗄️ Sequelize](#module-3--sequelize)
- [Section 3-1 - 📦 การติดตั้ง Sequelize](#section-3-1-----การติดตั้ง-sequelize)
- [Section 3-2 - 🚀 New Project for Sequelize Demo](#section-3-2-----new-project-for-sequelize-demo)
- [Section 3-3 - ⚙️ Config Sequelize](#section-3-3-----config-sequelize)
- [Section 3-4 - 📋 สร้างโมเดล Student และ Faculty](#section-3-4-----สร้างโมเดล-student-และ-faculty)
- [Section 3-5 - 🎮 การสร้าง Controllers](#section-3-5-----การสร้าง-controllers)
- [Section 3-6 - 🛣️ การสร้าง Faculty Routes](#section-3-6-----การสร้าง-faculty-routes)
- [Section 3-7 - 🛣️ การสร้าง Student Routes](#section-3-7-----การสร้าง-student-routes)
- [Section 3-8 - ➕ การสร้าง Routes เพิ่มเติมใน Faculty (CRUD Complete)](#section-3-8-----การสร้าง-routes-เพิ่มเติมใน-faculty-crud-complete)
- [Section 3-9 - 👨‍🎓 การสร้าง Controller & Route สำหรับ CRUD Student](#section-3-9-----การสร้าง-controller--route-สำหรับ-crud-student)

### [Module 4: 🔐 Authorization with JWT](#module-4--authorization-with-jwt)
- [Section 4-1 - 🔑 JWT Authentication](#section-4-1-----jwt-authentication)
- [Section 4-2 - 🛡️ สร้าง Middleware สำหรับ Verify Token](#section-4-2-----สร้าง-middleware-สำหรับ-verify-token)
- [Section 4-3 - 🔐 การใช้งาน Middleware เพื่อป้องกัน Routes](#section-4-3-----การใช้งาน-middleware-เพื่อป้องกัน-routes)
- [Section 4-4 - 📝 ตัวอย่างโค้ดเต็ม](#section-4-4-----ตัวอย่างโค้ดเต็ม)
- [Section 4-5 - 🔧 การใช้ Environment Variables](#section-4-5-----การใช้-environment-variables) 

---

## Module 1: 📡 Basic API

<div align="center">

### เรียนรู้พื้นฐานการสร้าง API ด้วย Node.js และ Express

[⬆ กลับไปที่สารบัญ](#-สารบัญ)

</div>

---

### Section 1-1 - 🎯 Intro

<div align="right">

[⬆ กลับไปที่สารบัญ](#-สารบัญ)

</div>

#### 📝 เริ่มต้นสร้าง Server ด้วย HTTP Library

สร้างไฟล์ `server.js` สำหรับสร้าง server พื้นฐานโดยใช้ HTTP library ของ Node.js

**ไฟล์: `server.js`**

```javascript
const http = require('http')
const HOSTNAME = '127.0.0.1';
const PORT = 3000;

const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.end('Hello World \n')
})

server.listen(PORT, HOSTNAME, () => {
	console.log(`Server running at http://${HOSTNAME}:${PORT}`)
})
```

> ⚠️ **หมายเหตุ:** ในโค้ดตัวอย่างมีการใช้ตัวแปร `hostname` และ `port` แบบตัวพิมพ์เล็ก ซึ่งควรเป็น `HOSTNAME` และ `PORT` ตามที่ประกาศไว้

---

#### 🔧 ติดตั้ง Nodemon

**Nodemon** เป็นเครื่องมือที่ช่วยให้ server รีสตาร์ทอัตโนมัติเมื่อมีการแก้ไขไฟล์

##### 📦 ติดตั้งสำหรับ Development Dependencies

```bash
npm install -D nodemon
```

หรือ

```bash
npm install --save-dev nodemon
```

##### 🌐 ติดตั้งแบบ Global

```bash
npm install -g nodemon
```

##### ▶️ วิธีใช้งาน

```bash
nodemon index.js
```

> 💡 **เคล็ดลับ:** แทนที่ `index.js` ด้วยชื่อไฟล์แอปพลิเคชันของเราดูครับ


---

### Section 1-2 - 🛣️ สร้าง Route ด้วย Express

<div align="right">

[⬆ กลับไปที่สารบัญ](#-สารบัญ)

</div>

#### 📦 ติดตั้ง Express Framework

```bash
npm install express --save
```

---

#### 📄 สร้างไฟล์ `app.js`

สร้างไฟล์ `app.js` และเพิ่มโค้ดสำหรับ import Express และสร้าง route พื้นฐาน

**ไฟล์: `app.js`**

```javascript
const express = require('express');
const app = express();
app.use(express.json())
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello Express!');
});

app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`);
});
```

##### 🔍 อธิบายโค้ด:

- `express()` - สร้าง Express application instance
- `app.use(express.json())` - เปิดใช้งาน JSON parser middleware
- `app.get('/')` - สร้าง GET route ที่ path `/`
- `app.listen()` - เริ่มต้น server ที่ port ที่กำหนด

##### ▶️ รันแอปเพื่อทดสอบ

```bash
nodemon app.js
```

เปิดเบราว์เซอร์ไปที่ `http://localhost:3000` เพื่อดูผลลัพธ์

---

### Section 1-3 - 💡 ตัวอย่างการสร้าง API

<div align="right">

[⬆ กลับไปที่สารบัญ](#-สารบัญ)

</div>

#### 📄 สร้างไฟล์ `app-demo.js`

ตัวอย่างการสร้าง API แบบง่าย ๆ พร้อมการกำหนด PORT จาก environment variable

**ไฟล์: `app-demo.js`**

```javascript
const express = require('express')
const app = express();
const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
	res.send("Hello! Node.js")
})

app.listen(PORT, () => {
	console.log(`SERVER ON PORT ${PORT}`)
})
```

##### 🔍 จุดเด่นของโค้ด:

- ✅ ใช้ `process.env.PORT` เพื่อรองรับการ deploy บน cloud platforms
- ✅ มีค่า default เป็น `5000` หากไม่มีการกำหนด PORT
- ✅ โครงสร้างโค้ดเรียบง่ายและเข้าใจง่าย

##### ▶️ รันแอปเพื่อทดสอบ

```bash
nodemon app-demo.js
```

หรือกำหนด PORT ก่อนรัน:

```bash
PORT=3000 nodemon app-demo.js
```


---

### Section 1-4 - ⚙️ การสร้าง Scripts

<div align="right">

[⬆ กลับไปที่สารบัญ](#-สารบัญ)

</div>

#### 📝 สร้าง Scripts ใน package.json

สร้าง script เพื่อรันแอปพลิเคชันได้ง่ายขึ้น โดยเราสามารถแก้ไขได้ที่ `package.json` ในส่วน `scripts`

**ตัวอย่างการตั้งค่า:**

```json
"scripts": {
  "dev": "nodemon ./server.js"
}
```

##### 📸 ตัวอย่าง package.json

<img src="https://raw.githubusercontent.com/billowdev/api-03-04-april-2023/main/readme/img/img_1.png" alt="example package json" width="600">

**ไฟล์: `package.json`**

```json
{
  "name": "server",
  "version": "1.0.0",
  "description": "example javascript or node.js application that use express http framework",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "nodemon ./server.js"
  },
  "keywords": [],
  "author": "billowdev",
  "license": "ISC",
  "dependencies": {
    "express": "^4.18.2",
    "mysql2": "^3.2.0",
    "sequelize": "^6.30.0"
  },
  "devDependencies": {
    "nodemon": "^2.0.22"
  }
}
```

##### ▶️ วิธีใช้งาน Script

หลังจากเพิ่ม script แล้ว ลองรันแอปด้วยคำสั่งนี้ดูครับ

```bash
npm run dev
```

> 💡 **ประโยชน์:** ไม่ต้องพิมพ์ `nodemon ./server.js` ทุกครั้ง แค่พิมพ์ `npm run dev` ก็พอ

---

### Section 1-5 - 🔄 RESTful API

<div align="right">

[⬆ กลับไปที่สารบัญ](#-สารบัญ)

</div>

#### 📄 สร้างไฟล์ `db.json` สำหรับจำลองข้อมูล

สร้างไฟล์ `db.json` เพื่อใช้เป็นฐานข้อมูลจำลองสำหรับทดสอบ API

**ไฟล์: `db.json`**

```json
[
	{
		"id": 1,
		"username": "user1",
		"name": "Alice"
	},
	{
		"id": 2,
		"username": "user2",
		"name": "Lac"
	},
	{
		"id": 3,
		"username": "user3",
		"name": "Billo"
	}
]
```

---

#### 📥 Import ข้อมูลจาก db.json

```javascript
const users = require('./db.json')
```

---

#### 🛣️ สร้าง Route สำหรับดึงข้อมูล Users

```javascript
app.get('/users', (req, res) => {
	res.json(users)
})
```

---

#### 📝 ตัวอย่างโค้ดเต็มใน `app-demo.js`

**ไฟล์: `app-demo.js`**

```javascript
const express = require('express')
const app = express();
const PORT = process.env.PORT || 5000

const users = require('./db.json')

app.get('/', (req, res) => {
	res.send("Hello! Node.js")
})

app.get('/users', (req, res) => {
	res.json(users)
})

app.listen(PORT, () => {
	console.log(`SERVER ON PORT ${PORT}`)
})
```

##### 🧪 ทดสอบ API

1. รันแอปพลิเคชัน:
   ```bash
   nodemon app-demo.js
   ```

2. ทดสอบด้วย Browser หรือ Postman:
   - `GET http://localhost:5000/` - ดูข้อความต้อนรับ
   - `GET http://localhost:5000/users` - ดูรายการ users ทั้งหมด

---

### Section 1-6 - 📥 Method GET and API Params

<div align="right">

[⬆ กลับไปที่สารบัญ](#-สารบัญ)

</div>

#### 🎯 สร้าง Route สำหรับดึงข้อมูล User ตาม ID

สร้าง API route ที่มี endpoint เป็น `/users/:id` เพื่อดึงข้อมูล user เฉพาะคนจาก `users` array

##### 📌 Route Parameters

```javascript
app.get('/users/:id', (req, res) => {
	res.json(users.find(el => el.id === Number(req.params.id)))
})
```

##### 🔍 อธิบายโค้ด:

- `:id` - Route parameter ที่จะรับค่า id จาก URL
- `req.params.id` - ดึงค่า id จาก URL parameter
- `Number()` - แปลง string เป็น number
- `find()` - ค้นหา user ที่มี id ตรงกับที่ระบุ

##### 📝 ตัวอย่างโค้ดเต็มใน `api-demo.js`

**ไฟล์: `api-demo.js`**

```javascript
const express = require('express')
const app = express();
const PORT = process.env.PORT || 5000

const users = require('./db.json')

app.get('/', (req, res) => {
	res.send("Hello! Node.js")
})

app.get('/users', (req, res) => {
	res.status(200).json(users)
})

app.get('/users/:id', (req, res) => {
	res.json(users.find(el => el.id === Number(req.params.id)))
})

app.listen(PORT, () => {
	console.log(`SERVER ON PORT ${PORT}`)
})
```

##### 🧪 ทดสอบ API

- `GET http://localhost:5000/users/1` - ดึงข้อมูล user ที่มี id = 1
- `GET http://localhost:5000/users/2` - ดึงข้อมูล user ที่มี id = 2
- `GET http://localhost:5000/users/3` - ดึงข้อมูล user ที่มี id = 3

> ⚠️ **หมายเหตุ:** หากไม่พบ user ที่ระบุ จะได้ค่า `undefined` แนะนำให้เพิ่มการตรวจสอบและส่ง error response กันนะครับ

---

### Section 1-7 - 📤 Using JSON and Method POST

<div align="right">

[⬆ กลับไปที่สารบัญ](#-สารบัญ)

</div>

#### 📦 ติดตั้ง body-parser (Optional)

> 💡 **หมายเหตุ:** ใน Express 4.16+ เราสามารถใช้ `express.json()` แทน `body-parser` ได้โดยไม่ต้องติดตั้งเพิ่มนะครับ

```bash
npm install body-parser --save
```

---

#### 🔧 วิธีใช้งาน JSON Parser

##### วิธีที่ 1: ใช้ body-parser

```javascript
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
```

##### วิธีที่ 2: ใช้ Express (แนะนำ) ⭐

```javascript
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
```

> ✅ **แนะนำ:** ใช้วิธีที่ 2 กันนะครับ เพราะไม่ต้องติดตั้ง package เพิ่ม และ Express รองรับอยู่แล้ว

---

#### ➕ สร้าง User โดยใช้ Method POST

```javascript
app.post('/users', (req, res) => {
	// push ข้อมูลจาก body ไปใน users array
	users.push(req.body)
	// ดึงเฉพาะข้อมูล username เก็บไว้ในตัวแปร username
	let username = req.body.username
	// ส่ง response กลับไปให้ผู้ใช้ API
	res.json(`Add user: '${username}' was successfully.`)
})
```

##### 🔍 อธิบายโค้ด:

- `app.post()` - สร้าง POST route
- `req.body` - ข้อมูลที่ส่งมาจาก client (JSON)
- `users.push()` - เพิ่มข้อมูลใหม่เข้าไปใน array
- `res.json()` - ส่ง response กลับเป็น JSON

---

#### 📝 ตัวอย่างโค้ดเต็มใน `api-demo.js`

**ไฟล์: `api-demo.js`**

```javascript
const express = require('express')
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const PORT = process.env.PORT || 5000

const users = require('./db.json')

app.get('/', (req, res) => {
	res.send("Hello! Node.js")
})

app.get('/users', (req, res) => {
	res.status(200).json(users)
})

app.get('/users/:id', (req, res) => {
	res.json(users.find(el => el.id === Number(req.params.id)))
})

// สร้าง users
app.post('/users', (req, res) => {
	// push ข้อมูลจาก body ไปใน users array
	users.push(req.body)
	// ดึงเฉพาะข้อมูล username เก็บไว้ในตัวแปร username
	let username = req.body.username
	// ส่ง response กลับไปให้ผู้ใช้ API
	res.json(`Add user: '${username}' was successfully.`)
})

app.listen(PORT, () => {
	console.log(`SERVER ON PORT ${PORT}`)
})
```

##### 🧪 ทดสอบ API ด้วย Postman

1. **Method:** `POST`
2. **URL:** `http://localhost:5000/users`
3. **Headers:** 
   ```
   Content-Type: application/json
   ```
4. **Body (raw JSON):**
   ```json
   {
     "id": 4,
     "username": "user4",
     "name": "John"
   }
   ```

##### ✅ Response ที่คาดหวัง:

```json
"Add user: 'user4' was successfully."
```

---

### Section 1-8 - ✏️ Method PUT

<div align="right">

[⬆ กลับไปที่สารบัญ](#-สารบัญ)

</div>

#### 🔄 อัปเดตข้อมูล User โดยใช้ Method PUT

Method PUT ใช้สำหรับอัปเดตข้อมูลที่มีอยู่แล้ว

##### 📌 Route สำหรับอัปเดต User

```javascript
app.put('/users/:id', (req, res) => {
	// ค้นหา index ของ user ด้วย id ที่รับมาจาก params
	const userIndex = users.findIndex(user => user.id === Number(req.params.id))
	
	// ตรวจสอบว่าพบ user หรือไม่
	if (userIndex !== -1) {
		// อัปเดตข้อมูล user
		users[userIndex] = { ...users[userIndex], ...req.body }
		res.json(`Update user id: '${users[userIndex].id}' was successfully.`)
	} else {
		res.status(404).json({ message: 'User not found' })
	}
})
```

##### 🔍 อธิบายโค้ด:

- `findIndex()` - ค้นหา index ของ user ใน array
- `...users[userIndex]` - spread operator เพื่อคงข้อมูลเดิม
- `...req.body` - spread operator เพื่ออัปเดตข้อมูลใหม่
- ตรวจสอบ `userIndex !== -1` เพื่อยืนยันว่าพบ user

---

#### 📝 ตัวอย่างโค้ดเต็มใน `api-demo.js`

**ไฟล์: `api-demo.js`**

```javascript
const express = require('express')
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const PORT = process.env.PORT || 5000

const users = require('./db.json')

app.get('/', (req, res) => {
	res.send("Hello! Node.js")
})

app.get('/users', (req, res) => {
	res.status(200).json(users)
})

app.get('/users/:id', (req, res) => {
	res.json(users.find(el => el.id === Number(req.params.id)))
})

// สร้าง users
app.post('/users', (req, res) => {
	users.push(req.body)
	let username = req.body.username
	res.json(`Add user: '${username}' was successfully.`)
})

// อัปเดต user
app.put('/users/:id', (req, res) => {
	// ค้นหา user ด้วย id ที่รับมาจาก params
	const userIndex = users.findIndex(user => user.id === Number(req.params.id))
	
	if (userIndex !== -1) {
		// อัปเดตข้อมูล
		users[userIndex] = { ...users[userIndex], ...req.body }
		res.json(`Update user id: '${users[userIndex].id}' was successfully.`)
	} else {
		res.status(404).json({ message: 'User not found' })
	}
})

app.listen(PORT, () => {
	console.log(`SERVER ON PORT ${PORT}`)
})
```

##### 🧪 ทดสอบ API ด้วย Postman

1. **Method:** `PUT`
2. **URL:** `http://localhost:5000/users/1`
3. **Headers:** 
   ```
   Content-Type: application/json
   ```
4. **Body (raw JSON):**
   ```json
   {
     "username": "user1_updated",
     "name": "Alice Updated"
   }
   ```

##### ✅ Response ที่คาดหวัง:

```json
"Update user id: '1' was successfully."
```


---

### Section 1-9 - 🗑️ Method DELETE

<div align="right">

[⬆ กลับไปที่สารบัญ](#-สารบัญ)

</div>

#### 🗑️ ลบข้อมูล User โดยใช้ Method DELETE

Method DELETE ใช้สำหรับลบข้อมูลที่มีอยู่แล้ว

##### 📌 Route สำหรับลบ User

```javascript
app.delete('/users/:id', (req, res) => {
	const userIndex = users.findIndex(user => user.id === Number(req.params.id))
	
	if (userIndex !== -1) {
		const deletedUser = users[userIndex]
		// ลบ user ออกจาก array
		users.splice(userIndex, 1)
		res.json(`Delete user '${deletedUser.username}' was successfully.`)
	} else {
		res.status(404).json({ message: 'User not found' })
	}
})
```

##### 🔍 อธิบายโค้ด:

- `findIndex()` - ค้นหา index ของ user ใน array
- `splice(userIndex, 1)` - ลบ element 1 ตัวที่ตำแหน่ง userIndex
- ตรวจสอบ `userIndex !== -1` เพื่อยืนยันว่าพบ user

---

#### 📝 ตัวอย่างโค้ดเต็มใน `api-demo.js` (CRUD Complete)

**ไฟล์: `api-demo.js`**

```javascript
const express = require('express')
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const PORT = process.env.PORT || 5000

const users = require('./db.json')

// Home route
app.get('/', (req, res) => {
	res.send("Hello! Node.js")
})

// Get all users
app.get('/users', (req, res) => {
	res.status(200).json(users)
})

// Get user by id
app.get('/users/:id', (req, res) => {
	const user = users.find(el => el.id === Number(req.params.id))
	if (user) {
		res.json(user)
	} else {
		res.status(404).json({ message: 'User not found' })
	}
})

// Create user
app.post('/users', (req, res) => {
	users.push(req.body)
	let username = req.body.username
	res.status(201).json(`Add user: '${username}' was successfully.`)
})

// Update user
app.put('/users/:id', (req, res) => {
	const userIndex = users.findIndex(user => user.id === Number(req.params.id))
	
	if (userIndex !== -1) {
		users[userIndex] = { ...users[userIndex], ...req.body }
		res.json(`Update user id: '${users[userIndex].id}' was successfully.`)
	} else {
		res.status(404).json({ message: 'User not found' })
	}
})

// Delete user
app.delete('/users/:id', (req, res) => {
	const userIndex = users.findIndex(user => user.id === Number(req.params.id))
	
	if (userIndex !== -1) {
		const deletedUser = users[userIndex]
		users.splice(userIndex, 1)
		res.json(`Delete user '${deletedUser.username}' was successfully.`)
	} else {
		res.status(404).json({ message: 'User not found' })
	}
})

app.listen(PORT, () => {
	console.log(`SERVER ON PORT ${PORT}`)
})
```

##### 🧪 ทดสอบ API ด้วย Postman

1. **Method:** `DELETE`
2. **URL:** `http://localhost:5000/users/1`

##### ✅ Response ที่คาดหวัง:

```json
"Delete user 'user1' was successfully."
```

---

## 🎉 สรุป Module 1

เราได้เรียนรู้การสร้าง **RESTful API** แบบพื้นฐานครบทั้ง **CRUD Operations** กันแล้ว:

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/users` | ดึงข้อมูล users ทั้งหมด |
| `GET` | `/users/:id` | ดึงข้อมูล user ตาม id |
| `POST` | `/users` | สร้าง user ใหม่ |
| `PUT` | `/users/:id` | อัปเดตข้อมูล user |
| `DELETE` | `/users/:id` | ลบ user |

---

<div align="center">

**🎊 ยินดีด้วยครับ! เราได้เรียนรู้พื้นฐานการสร้าง API กันแล้ว**

[⬆ กลับไปที่สารบัญ](#-สารบัญ) • [➡️ ไปยัง Module 2: Basic API MySQL](#module-2--basic-api-mysql)

</div>

---

## Module 2: 💾 Basic API MySQL

<div align="center">

### เรียนรู้การเชื่อมต่อและใช้งาน MySQL Database กับ Express

[⬆ กลับไปที่สารบัญ](#-สารบัญ)

</div>

---

### Section 2-1 - 🚀 Create New App Express and MySQL

<div align="right">

[⬆ กลับไปที่สารบัญ](#-สารบัญ)

</div>

#### 📁 สร้างโปรเจกต์ใหม่

##### 1. สร้างโฟลเดอร์ `demo-mysql`

```bash
mkdir demo-mysql
```

##### 2. เข้าไปในโฟลเดอร์ `demo-mysql`

```bash
cd demo-mysql
```

> ⚠️ **หมายเหตุ:** คำสั่ง `cd mkdir demo-mysql` ในเอกสารเดิมไม่ถูกต้องนะครับ ควรใช้ `cd demo-mysql` หลังจากสร้างโฟลเดอร์แล้ว

##### 3. สร้าง Node.js Application

```bash
npm init -y
```

คำสั่งนี้จะสร้างไฟล์ `package.json` อัตโนมัติ

---

#### 📄 สร้างไฟล์ `index.js`

**ไฟล์: `index.js`**

```javascript
const express = require('express')
const cors = require('cors')  // ⚠️ แก้ไข: ควรเป็น 'cors' ไม่ใช่ 'express'
const PORT = process.env.PORT || 5000
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.listen(PORT, () => {
	console.log(`CORS enabled server listening on ${PORT}`)
})
```

> ⚠️ **หมายเหตุ:** ในโค้ดเดิมมีการ `require('express')` สำหรับ cors ซึ่งไม่ถูกต้องนะครับ ควรเป็น `require('cors')`

---

#### 📦 ติดตั้ง Packages ที่จำเป็น

##### ติดตั้ง Packages หลัก

```bash
npm install express mysql2 cors --save
```

##### ติดตั้ง Nodemon สำหรับ Development

**Development Dependencies:**

```bash
npm install -D nodemon
```

**Global Installation (Optional):**

```bash
npm install -g nodemon
```

##### 📋 Packages ที่ติดตั้ง:

| Package | Description |
|---------|-------------|
| `express` | Web framework สำหรับ Node.js |
| `mysql2` | MySQL client สำหรับ Node.js |
| `cors` | Middleware สำหรับจัดการ Cross-Origin Resource Sharing |
| `nodemon` | Auto-restart server เมื่อมีการแก้ไขไฟล์ |


---

### Section 2-2 - 🔌 Connect MySQL Database

<div align="right">

[⬆ กลับไปที่สารบัญ](#-สารบัญ)

</div>

#### 📦 Import MySQL2

**เพิ่มในไฟล์: `index.js`**

```javascript
const mysql = require('mysql2');
```

---

#### 🔌 เชื่อมต่อฐานข้อมูล MySQL

##### วิธีที่ 1: ใช้ค่าคงที่

```javascript
const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'basic_api_express_db'
});
```

##### วิธีที่ 2: ใช้ Environment Variables (แนะนำ) ⭐

```javascript
const connection = mysql.createConnection({
	host: process.env.DB_HOSTNAME || 'localhost',
	user: process.env.DB_USERNAME || 'root',
	password: process.env.DB_PASSWORD || '',
	database: process.env.DB_DATABASE || 'basic_api_express_db'
});
```

> 💡 **แนะนำ:** ใช้วิธีที่ 2 เพื่อความปลอดภัยและยืดหยุ่นในการ deploy

---

#### 📥 ทดสอบดึงข้อมูลจากฐานข้อมูล

**เพิ่มในไฟล์: `index.js`**

```javascript
// Get all users
app.get('/users', (req, res, next) => {
	try {
		connection.query(
			'SELECT * FROM `users`',
			(err, results, fields) => {
				if (err) {
					return res.status(500).json({ message: "Database error", error: err });
				}
				res.status(200).json(results);
			}
		);
	} catch (error) {
		res.status(400).json({ message: "get user was failed", error: error.message });
	}
})

// Get user by id
app.get('/users/:id', (req, res, next) => {
	try {
		const id = req.params.id;
		connection.query(
			'SELECT * FROM `users` WHERE `id` = ?',
			[id],
			(err, results) => {
				if (err) {
					return res.status(500).json({ message: "Database error", error: err });
				}
				if (results.length === 0) {
					return res.status(404).json({ message: "User not found" });
				}
				res.status(200).json({ payload: results });
			}
		);
	} catch (error) {
		res.status(400).json({ message: "get user by id was failed", error: error.message });
	}
})
```

##### 🧪 ทดสอบ API

```bash
GET http://localhost:5000/users
GET http://localhost:5000/users/1
```


---

### Section 2-3 - ➕ CREATE USER

<div align="right">

[⬆ กลับไปที่สารบัญ](#-สารบัญ)

</div>

#### ➕ สร้าง User ใหม่

**เพิ่มในไฟล์: `index.js`**

```javascript
app.post('/users', (req, res, next) => {
	try {
		const { fname, lname, username, password, avatar } = req.body;
		
		connection.query(
			'INSERT INTO `users`(`fname`, `lname`, `username`, `password`, `avatar`) VALUES (?, ?, ?, ?, ?)',
			[fname, lname, username, password, avatar],
			(err, results) => {
				if (err) {
					return res.status(500).json({ 
						message: "create user was failed", 
						error: err.message 
					});
				}
				res.status(201).json({ 
					message: "create user was successfully", 
					payload: results 
				});
			}
		);
	} catch (error) {
		res.status(400).json({ 
			message: "create user was failed", 
			error: error.message 
		});
	}
})
```

##### 🔍 อธิบายโค้ด:

- `INSERT INTO` - คำสั่ง SQL สำหรับเพิ่มข้อมูล
- `?` - Placeholder สำหรับป้องกัน SQL injection
- `status(201)` - HTTP status code สำหรับการสร้างข้อมูลสำเร็จ

##### 🧪 ทดสอบ API

```bash
POST http://localhost:5000/users
Content-Type: application/json

{
  "fname": "John",
  "lname": "Doe",
  "username": "johndoe",
  "password": "password123",
  "avatar": "https://example.com/avatar.jpg"
}
```

---

### Section 2-4 - ✏️ UPDATE USER

<div align="right">

[⬆ กลับไปที่สารบัญ](#-สารบัญ)

</div>

#### ✏️ อัปเดตข้อมูล User

**เพิ่มในไฟล์: `index.js`**

```javascript
app.put('/users/:id', (req, res, next) => {
	try {
		const id = req.params.id;
		const { fname, lname, username, password, avatar } = req.body;
		
		connection.query(
			'UPDATE `users` SET `fname`= ?, `lname`= ?, `username`= ?, `password`= ?, `avatar`= ? WHERE id = ?',
			[fname, lname, username, password, avatar, id],
			(err, results) => {
				if (err) {
					return res.status(500).json({ 
						message: "update user was failed", 
						error: err.message 
					});
				}
				if (results.affectedRows === 0) {
					return res.status(404).json({ 
						message: "User not found" 
					});
				}
				res.status(200).json({ 
					message: "update user was successfully", 
					payload: results 
				});
			}
		);
	} catch (error) {
		res.status(400).json({ 
			message: "update user was failed", 
			error: error.message 
		});
	}
})
```

##### 🔍 อธิบายโค้ด:

- `UPDATE` - คำสั่ง SQL สำหรับอัปเดตข้อมูล
- `affectedRows` - จำนวนแถวที่ถูกอัปเดต (0 = ไม่พบข้อมูล)

##### 🧪 ทดสอบ API

```bash
PUT http://localhost:5000/users/1
Content-Type: application/json

{
  "fname": "Jane",
  "lname": "Doe",
  "username": "janedoe",
  "password": "newpassword123",
  "avatar": "https://example.com/new-avatar.jpg"
}
```

---

### Section 2-5 - 🗑️ DELETE USER

<div align="right">

[⬆ กลับไปที่สารบัญ](#-สารบัญ)

</div>

#### 🗑️ ลบข้อมูล User

**เพิ่มในไฟล์: `index.js`**

```javascript
app.delete('/users/:id', (req, res, next) => {
	try {
		const id = req.params.id;
		
		connection.query(
			'DELETE FROM `users` WHERE id = ?',
			[id],
			(err, results) => {
				if (err) {
					return res.status(500).json({ 
						message: "delete user was failed", 
						error: err.message 
					});
				}
				if (results.affectedRows === 0) {
					return res.status(404).json({ 
						message: "User not found" 
					});
				}
				res.status(200).json({ 
					message: "delete user was successfully", 
					payload: results 
				});
			}
		);
	} catch (error) {
		res.status(400).json({ 
			message: "delete user was failed", 
			error: error.message 
		});
	}
})
```

##### 🔍 อธิบายโค้ด:

- `DELETE FROM` - คำสั่ง SQL สำหรับลบข้อมูล
- `affectedRows` - จำนวนแถวที่ถูกลบ (0 = ไม่พบข้อมูล)

##### 🧪 ทดสอบ API

```bash
DELETE http://localhost:5000/users/1
```

---

## 🎉 สรุป Module 2

เราได้เรียนรู้การเชื่อมต่อและใช้งาน **MySQL Database** กับ Express ครบทั้ง **CRUD Operations**:

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/users` | ดึงข้อมูล users ทั้งหมด |
| `GET` | `/users/:id` | ดึงข้อมูล user ตาม id |
| `POST` | `/users` | สร้าง user ใหม่ |
| `PUT` | `/users/:id` | อัปเดตข้อมูล user |
| `DELETE` | `/users/:id` | ลบ user |

---

<div align="center">

**🎊 ยินดีด้วยครับ! เราได้เรียนรู้การใช้งาน MySQL Database แล้ว**

[⬆ กลับไปที่สารบัญ](#-สารบัญ) • [➡️ ไปยัง Module 3: Sequelize](#module-3--sequelize)

</div>

---

## Module 3: 🗄️ Sequelize

<div align="center">

### เรียนรู้การใช้ Sequelize ORM สำหรับจัดการฐานข้อมูล

[⬆ กลับไปที่สารบัญ](#-สารบัญ)

</div>

---

### Section 3-1 - 📦 การติดตั้ง Sequelize

<div align="right">

[⬆ กลับไปที่สารบัญ](#-สารบัญ)

</div>

#### 📥 ติดตั้ง Sequelize

Sequelize เป็น **ORM (Object-Relational Mapping)** ที่ช่วยให้เราจัดการฐานข้อมูลได้ง่ายขึ้น

```bash
npm install --save sequelize
```

> 📚 **เอกสารเพิ่มเติม:** ดูข้อมูลเพิ่มเติมได้ที่ [Sequelize Documentation](https://sequelize.org/docs/v6/getting-started)

---

#### 🔌 ติดตั้ง Database Driver

เราต้องติดตั้ง **driver** สำหรับฐานข้อมูลที่เราจะใช้ด้วยนะครับ

| Database | Driver Package | คำสั่งติดตั้ง |
|----------|---------------|--------------|
| **PostgreSQL** | `pg`, `pg-hstore` | `npm install --save pg pg-hstore` |
| **MySQL** | `mysql2` | `npm install --save mysql2` |
| **MariaDB** | `mariadb` | `npm install --save mariadb` |
| **SQLite** | `sqlite3` | `npm install --save sqlite3` |
| **Microsoft SQL Server** | `tedious` | `npm install --save tedious` |
| **Oracle Database** | `oracledb` | `npm install --save oracledb` |

##### 💡 ตัวอย่างสำหรับ MySQL (ที่เราจะใช้ในบทเรียนนี้):

```bash
npm install --save sequelize mysql2
```
---

### Section 3-2 - 🚀 New Project for Sequelize Demo

<div align="right">

[⬆ กลับไปที่สารบัญ](#-สารบัญ)

</div>

#### 📁 สร้างโปรเจกต์ใหม่

##### 1. สร้างโปรเจกต์ Node.js

```bash
npm init -y
```

##### 2. ติดตั้ง Packages ที่จำเป็น

```bash
npm install express mysql2 cors sequelize
npm install -D nodemon
```

##### 📋 Packages ที่ติดตั้ง:

| Package | Description |
|---------|-------------|
| `express` | Web framework |
| `mysql2` | MySQL driver สำหรับ Sequelize |
| `cors` | Cross-Origin Resource Sharing middleware |
| `sequelize` | ORM สำหรับจัดการฐานข้อมูล |
| `nodemon` | Auto-restart server (dev dependency) |

---

#### 📄 สร้างไฟล์ `server.js`

**ไฟล์: `server.js`**

```javascript
const express = require('express')
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
	res.json({ message: "Welcome to my app" })
})

app.listen(PORT, () => {
	console.log(`SERVER ON PORT ${PORT}`)
})
```

##### ▶️ รันแอปพลิเคชัน

```bash
nodemon server.js
```

หรือเพิ่ม script ใน `package.json`:

```json
{
  "scripts": {
    "dev": "nodemon server.js"
  }
}
```

แล้วรันด้วย:

```bash
npm run dev
```

---

### Section 3-3 - ⚙️ Config Sequelize

<div align="right">

[⬆ กลับไปที่สารบัญ](#-สารบัญ)

</div>

#### 📁 สร้างโฟลเดอร์และไฟล์ Config

##### 1. สร้างโฟลเดอร์ `config`

```bash
mkdir config
```

##### 2. สร้างไฟล์ `db.config.js`

**ไฟล์: `config/db.config.js`**

```javascript
module.exports = {
	DB_HOST: "localhost",
	DB_USERNAME: "root",
	DB_PASSWORD: "",
	DB_DATABASE: "db_std",
	dialect: "mysql",
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000
	}
};
```

##### 🔍 อธิบาย Config:

- `DB_HOST` - ที่อยู่ของ MySQL server
- `DB_USERNAME` - ชื่อผู้ใช้ MySQL
- `DB_PASSWORD` - รหัสผ่าน MySQL
- `DB_DATABASE` - ชื่อฐานข้อมูล
- `dialect` - ประเภทฐานข้อมูล (mysql, postgres, sqlite, etc.)
- `pool` - การตั้งค่า connection pool

---

#### 📄 สร้างไฟล์ `models/index.js`

ไฟล์นี้จะใช้สำหรับเชื่อมต่อ Sequelize กับฐานข้อมูลและ register models

**ไฟล์: `models/index.js`**

```javascript
const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
	dbConfig.DB_DATABASE, 
	dbConfig.DB_USERNAME, 
	dbConfig.DB_PASSWORD, 
	{
		host: dbConfig.DB_HOST,
		dialect: dbConfig.dialect,
		operatorsAliases: false,
		pool: {
			max: dbConfig.pool.max,
			min: dbConfig.pool.min,
			acquire: dbConfig.pool.acquire,
			idle: dbConfig.pool.idle
		}
	}
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Register models here
// db.students = require("./student.model.js")(sequelize, Sequelize);
// db.faculty = require("./faculty.model.js")(sequelize, Sequelize);

module.exports = db;
```

> 💡 **หมายเหตุ:** เราจะ register models ในขั้นตอนถัดไปนะครับ

---

#### 🔄 Sync Database ใน `server.js`

**ไฟล์: `server.js`**

```javascript
const express = require('express')
const app = express();
const db = require("./models");

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
	res.json({ message: "Welcome to my app" })
})

// Sync database
db.sequelize.sync({ force: false })
	.then(() => {
		console.log("Database was synchronized successfully.");
		app.listen(PORT, () => {
			console.log(`SERVER ON PORT ${PORT}`)
		})
	})
	.catch((err) => {
		console.log("Failed to synchronize database: " + err.message);
	});
```

##### 🔍 อธิบาย `sync()`:

- `force: false` - ไม่ลบตารางที่มีอยู่แล้ว (ใช้ `true` เพื่อลบและสร้างใหม่)
- `sync()` - สร้างตารางตาม models ที่เรากำหนด

---

### Section 3-4 - 📋 สร้างโมเดล Student และ Faculty

<div align="right">

[⬆ กลับไปที่สารบัญ](#-สารบัญ)

</div>

#### 🏛️ สร้างโมเดล Faculty

**ไฟล์: `models/faculty.model.js`**

```javascript
module.exports = (sequelize, Sequelize) => {
	const Faculty = sequelize.define("faculty", {
		facultyId: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			field: "fac_id"
		},
		facultyName: {
			type: Sequelize.STRING,
			field: "fac_name",
		},
	}, {
		sequelize,
		tableName: 'faculty',
		freezeTableName: true,
		timestamps: false
	});

	Faculty.associate = (models) => {
		Faculty.hasMany(models.student, {
			foreignKey: 'fac_id',
			sourceKey: 'fac_id',
			onDelete: "cascade",
		});
	}
	
	return Faculty;
}
```

##### 🔍 อธิบายโค้ด:

- `sequelize.define()` - สร้างโมเดลใหม่
- `primaryKey: true` - กำหนดเป็น primary key
- `autoIncrement: true` - เพิ่มค่า id อัตโนมัติ
- `field: "fac_id"` - กำหนดชื่อคอลัมน์ในฐานข้อมูล
- `freezeTableName: true` - ใช้ชื่อตารางตามที่กำหนด (ไม่เติม 's')
- `timestamps: false` - ไม่ใช้ created_at และ updated_at
- `hasMany()` - กำหนดความสัมพันธ์ one-to-many (1 คณะมีหลายนักศึกษา)

---

#### 👨‍🎓 สร้างโมเดล Student

**ไฟล์: `models/student.model.js`**

```javascript
module.exports = (sequelize, Sequelize) => {
	const Student = sequelize.define("student", {
		stdId: {
			primaryKey: true,
			type: Sequelize.STRING,
			field: "std_id",
		},
		stdPass: {
			type: Sequelize.STRING,
			field: "std_pass",
		},
		stdName: {
			type: Sequelize.STRING,
			field: "std_name",
		},
		facId: {
			type: Sequelize.INTEGER,
			field: "fac_id",
			unique: false
		},
	}, {
		sequelize,
		tableName: 'student',
		freezeTableName: true,
		timestamps: false
	});

	Student.associate = (models) => {
		Student.belongsTo(models.faculty, {
			foreignKey: 'fac_id',
			sourceKey: 'fac_id',
			onDelete: "cascade",
		});
	}

	return Student;
};
```

##### 🔍 อธิบายโค้ด:

- `belongsTo()` - กำหนดความสัมพันธ์ many-to-one (หลายนักศึกษาอยู่ใน 1 คณะ)
- `onDelete: "cascade"` - เมื่อลบ faculty จะลบ student ที่เกี่ยวข้องด้วย

---

#### 📝 Register Models ใน `models/index.js`

หลังจากสร้างโมเดลแล้ว เราต้อง register ใน `models/index.js` นะครับ

**ไฟล์: `models/index.js`**

```javascript
const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
	dbConfig.DB_DATABASE, 
	dbConfig.DB_USERNAME, 
	dbConfig.DB_PASSWORD, 
	{
		host: dbConfig.DB_HOST,
		dialect: dbConfig.dialect,
		operatorsAliases: false,
		pool: {
			max: dbConfig.pool.max,
			min: dbConfig.pool.min,
			acquire: dbConfig.pool.acquire,
			idle: dbConfig.pool.idle
		}
	}
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Register models
db.students = require("./student.model.js")(sequelize, Sequelize);
db.faculty = require("./faculty.model.js")(sequelize, Sequelize);

// Initialize associations
Object.keys(db).forEach(modelName => {
	if (db[modelName].associate) {
		db[modelName].associate(db);
	}
});

module.exports = db;
```

##### 🔍 จุดสำคัญ:

- Register models ก่อนใช้
- เรียก `associate()` เพื่อกำหนดความสัมพันธ์ระหว่างโมเดล

---

### Section 3-5 - 🎮 การสร้าง Controllers

<div align="right">

[⬆ กลับไปที่สารบัญ](#-สารบัญ)

</div>

#### 📁 สร้างโฟลเดอร์ Controllers

```bash
mkdir controllers
```

---

#### 🏛️ สร้าง Faculty Controller

**ไฟล์: `controllers/faculty.controller.js`**

```javascript
const db = require('../models')
const facultyModel = db.faculty;
const Op = db.Sequelize.Op;

// Get all faculty
exports.findAll = async (req, res) => {
	try {
		const response = await facultyModel.findAll()
		res.status(200).json({
			message: "get all faculty was successfully",
			payload: response
		})
	} catch (error) {
		res.status(500).json({
			message: error.message || "get all faculty was failed"
		})
	}
}
```

##### 🔍 อธิบายโค้ด:

- `facultyModel.findAll()` - ดึงข้อมูล faculty ทั้งหมด
- `async/await` - ใช้ async function เพื่อจัดการ Promise
- `try/catch` - จัดการ error

---

#### 👨‍🎓 สร้าง Student Controller

**ไฟล์: `controllers/student.controller.js`**

```javascript
const db = require('../models')
const studentModel = db.students;

// Get all student
exports.findAll = async (req, res) => {
	try {
		const response = await studentModel.findAll()
		res.status(200).json({
			message: "get all student was successfully",
			payload: response
		})
	} catch (error) {
		res.status(500).json({
			message: error.message || "get all student was failed"
		})
	}
}
```

> 💡 **หมายเหตุ:** ใช้ `db.students` (มี s) ตามที่ register ใน `models/index.js` นะครับ

---

### Section 3-6 - 🛣️ การสร้าง Faculty Routes

<div align="right">

[⬆ กลับไปที่สารบัญ](#-สารบัญ)

</div>

#### 📁 สร้างโฟลเดอร์ Routes

```bash
mkdir routes
```

---

#### 🏛️ สร้าง Faculty Route

**ไฟล์: `routes/faculty.route.js`**

```javascript
const express = require("express");
const router = express.Router();
const facultyController = require("../controllers/faculty.controller");

router.get("/", facultyController.findAll);

module.exports = router;
```

##### 🔍 อธิบายโค้ด:

- `express.Router()` - สร้าง router instance
- `router.get("/", ...)` - สร้าง GET route ที่ path `/`
- `facultyController.findAll` - เรียกใช้ controller function

---

#### 🔗 เพิ่ม Route ใน `server.js`

**ไฟล์: `server.js`**

```javascript
const express = require('express')
const app = express();
const db = require("./models");

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
	res.json({ message: "Welcome to my app" })
})

// Faculty routes
const facultyRoute = require("./routes/faculty.route");
app.use("/api/faculty", facultyRoute);

// Sync database
db.sequelize.sync({ force: false })
	.then(() => {
		console.log("Database was synchronized successfully.");
		app.listen(PORT, () => {
			console.log(`SERVER ON PORT ${PORT}`)
		})
	})
	.catch((err) => {
		console.log("Failed to synchronize database: " + err.message);
	});
```

##### 🧪 ทดสอบ API

```bash
GET http://localhost:5000/api/faculty
```


---

### Section 3-7 - 🛣️ การสร้าง Student Routes

<div align="right">

[⬆ กลับไปที่สารบัญ](#-สารบัญ)

</div>

#### 👨‍🎓 สร้าง Student Route

**ไฟล์: `routes/student.route.js`**

```javascript
const express = require("express");
const router = express.Router();
const studentController = require("../controllers/student.controller");

router.get("/", studentController.findAll);

module.exports = router;
```

---

#### 🔗 เพิ่ม Route ใน `server.js`

**ไฟล์: `server.js`**

```javascript
const express = require('express')
const app = express();
const db = require("./models");

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
	res.json({ message: "Welcome to my app" })
})

// Faculty routes
const facultyRoute = require("./routes/faculty.route");
app.use("/api/faculty", facultyRoute);

// Student routes
const studentRoute = require("./routes/student.route");
app.use("/api/student", studentRoute);

// Sync database
db.sequelize.sync({ force: false })
	.then(() => {
		console.log("Database was synchronized successfully.");
		app.listen(PORT, () => {
			console.log(`SERVER ON PORT ${PORT}`)
		})
	})
	.catch((err) => {
		console.log("Failed to synchronize database: " + err.message);
	});
```

##### 🧪 ทดสอบ API

```bash
GET http://localhost:5000/api/student
```

---

### Section 3-8 - ➕ การสร้าง Routes เพิ่มเติมใน Faculty (CRUD Complete)

<div align="right">

[⬆ กลับไปที่สารบัญ](#-สารบัญ)

</div>

#### ➕ สร้าง Function `createOne` ใน Controller

**เพิ่มในไฟล์: `controllers/faculty.controller.js`**

```javascript
exports.createOne = async (req, res) => {
	try {
		const response = await facultyModel.create(req.body)
		res.status(201).json({
			message: "create one faculty was successfully",
			payload: response
		})
	} catch (error) {
		res.status(500).json({
			message: error.message || "create one faculty was failed"
		})
	}
}
```

##### 🔍 อธิบายโค้ด:

- `facultyModel.create()` - สร้าง record ใหม่ในฐานข้อมูล
- `req.body` - ข้อมูลที่ส่งมาจาก client
- `status(201)` - HTTP status code สำหรับการสร้างข้อมูลสำเร็จ

---

#### 🔗 เพิ่ม Route สำหรับ Create

**เพิ่มในไฟล์: `routes/faculty.route.js`**

```javascript
router.post("/", facultyController.createOne);
```

##### 📝 ตัวอย่างโค้ดเต็ม `faculty.route.js` (หลังจากเพิ่ม POST)

```javascript
const express = require("express");
const router = express.Router();
const facultyController = require("../controllers/faculty.controller");

router.get("/", facultyController.findAll);
router.post("/", facultyController.createOne);

module.exports = router;
```

##### 🧪 ทดสอบ API

```bash
POST http://localhost:5000/api/faculty
Content-Type: application/json

{
  "facultyName": "คณะวิศวกรรมศาสตร์"
}
```


---

#### ✏️ สร้าง Function `update` ใน Controller

**เพิ่มในไฟล์: `controllers/faculty.controller.js`**

```javascript
exports.update = async (req, res) => {
	try {
		const id = req.params.id
		const body = req.body
		
		const response = await facultyModel.update(body, {
			where: { fac_id: id },
		})
		
		if (response[0] == 1) {
			res.status(200).json({
				message: "update one faculty was successfully",
				payload: response
			})
		} else {
			res.status(400).json({
				message: `update one faculty was failed faculty with fac_id=${id}. Maybe fac was not found or req.body is empty!`
			});
		}
	} catch (error) {
		res.status(500).json({
			message: error.message || "update one faculty was failed"
		})
	}
}
```

##### 🔍 อธิบายโค้ด:

- `facultyModel.update()` - อัปเดตข้อมูลในฐานข้อมูล
- `where: { fac_id: id }` - เงื่อนไขการค้นหา
- `response[0]` - จำนวนแถวที่ถูกอัปเดต (1 = สำเร็จ, 0 = ไม่พบข้อมูล)
---

#### 🔗 เพิ่ม Route สำหรับ Update

**เพิ่มในไฟล์: `routes/faculty.route.js`**

```javascript
router.put("/:id", facultyController.update);
```

##### 🧪 ทดสอบ API

```bash
PUT http://localhost:5000/api/faculty/1
Content-Type: application/json

{
  "facultyName": "คณะวิศวกรรมศาสตร์ (แก้ไข)"
}
```


---

#### 🗑️ สร้าง Function `delete` ใน Controller

**เพิ่มในไฟล์: `controllers/faculty.controller.js`**

```javascript
exports.delete = async (req, res) => {
	try {
		const id = req.params.id;
		const response = await facultyModel.destroy({
			where: {
				fac_id: id
			}
		})
		
		if (response == 1) {
			res.status(200).json({
				message: "delete faculty was successfully",
				payload: response
			})
		} else {
			res.status(400).json({
				message: `delete faculty was failed faculty with fac_id=${id}. Maybe faculty was not found!`
			});
		}
	} catch (error) {
		res.status(500).json({
			message: error.message || "delete faculty was failed"
		})
	}
}
```

##### 🔍 อธิบายโค้ด:

- `facultyModel.destroy()` - ลบข้อมูลจากฐานข้อมูล
- `response == 1` - จำนวนแถวที่ถูกลบ (1 = สำเร็จ, 0 = ไม่พบข้อมูล)

---

#### 🔗 เพิ่ม Route สำหรับ Delete

**เพิ่มในไฟล์: `routes/faculty.route.js`**

```javascript
router.delete("/:id", facultyController.delete);
```

---

#### 📝 ตัวอย่างโค้ดเต็ม `faculty.controller.js` (CRUD Complete)

**ไฟล์: `controllers/faculty.controller.js`**

```javascript
const db = require('../models')
const facultyModel = db.faculty;
const Op = db.Sequelize.Op;

// Get all faculty
exports.findAll = async (req, res) => {
	try {
		const response = await facultyModel.findAll()
		res.status(200).json({
			message: "get all faculty was successfully",
			payload: response
		})
	} catch (error) {
		res.status(500).json({
			message: error.message || "get all faculty was failed"
		})
	}
}

// Create faculty
exports.createOne = async (req, res) => {
	try {
		const response = await facultyModel.create(req.body)
		res.status(201).json({
			message: "create one faculty was successfully",
			payload: response
		})
	} catch (error) {
		res.status(500).json({
			message: error.message || "create one faculty was failed"
		})
	}
}

// Update faculty
exports.update = async (req, res) => {
	try {
		const id = req.params.id
		const body = req.body
		
		const response = await facultyModel.update(body, {
			where: { fac_id: id },
		})
		
		if (response[0] == 1) {
			res.status(200).json({
				message: "update one faculty was successfully",
				payload: response
			})
		} else {
			res.status(400).json({
				message: `update one faculty was failed faculty with fac_id=${id}. Maybe fac was not found or req.body is empty!`
			});
		}
	} catch (error) {
		res.status(500).json({
			message: error.message || "update one faculty was failed"
		})
	}
}

// Delete faculty
exports.delete = async (req, res) => {
	try {
		const id = req.params.id;
		const response = await facultyModel.destroy({
			where: {
				fac_id: id
			}
		})
		
		if (response == 1) {
			res.status(200).json({
				message: "delete faculty was successfully",
				payload: response
			})
		} else {
			res.status(400).json({
				message: `delete faculty was failed faculty with fac_id=${id}. Maybe faculty was not found!`
			});
		}
	} catch (error) {
		res.status(500).json({
			message: error.message || "delete faculty was failed"
		})
	}
}
```

---

#### 📝 ตัวอย่างโค้ดเต็ม `faculty.route.js` (CRUD Complete)

**ไฟล์: `routes/faculty.route.js`**

```javascript
const express = require("express");
const router = express.Router();
const facultyController = require("../controllers/faculty.controller");

router.get("/", facultyController.findAll);
router.post("/", facultyController.createOne);
router.put("/:id", facultyController.update);
router.delete("/:id", facultyController.delete);

module.exports = router;
```

##### 🧪 ทดสอบ API

```bash
DELETE http://localhost:5000/api/faculty/1
```

---

## 🎉 สรุป Module 3

เราได้เรียนรู้การใช้งาน **Sequelize ORM** ครบทั้ง:

| ฟีเจอร์ | คำอธิบาย |
|---------|----------|
| 📦 **ติดตั้ง Sequelize** | ติดตั้ง ORM และ database driver |
| ⚙️ **Config Database** | ตั้งค่าการเชื่อมต่อฐานข้อมูล |
| 📋 **สร้าง Models** | สร้างโมเดลและความสัมพันธ์ |
| 🎮 **Controllers** | สร้าง business logic |
| 🛣️ **Routes** | สร้าง API endpoints |
| 🔄 **CRUD Operations** | Create, Read, Update, Delete |

---

<div align="center">

**🎊 ยินดีด้วยครับ! เราได้เรียนรู้การใช้งาน Sequelize ORM แล้ว**

[⬆ กลับไปที่สารบัญ](#-สารบัญ) • [➡️ ไปยัง Module 4: Authorization with JWT](#module-4--authorization-with-jwt)

</div>

#### สร้าง controller สำหรับ findOne ใน `faculty.controller.js`
```js
exports.findOne = async (req, res) => {
    try {
        const id = req.params.id
        const response = await facultyModel.findOne({
            where: { fac_id: id }
        })
        console.log(facultyModel)
        res.status(200).json({
            message: "get one faculty was successfully",
            payload: response
        })
    } catch (error) {
        res.status(500).json({
            message: error.message || "get one faculty was failed"
        })
    }
}
```

#### สร้าง route สำหรับ findOne ใน `faculty.route.js`
```js
router.get("/:id", facultyController.findOne)
```


---

### Section 3-9 - 👨‍🎓 การสร้าง Controller & Route สำหรับ CRUD Student

<div align="right">

[⬆ กลับไปที่สารบัญ](#-สารบัญ)

</div>

#### 📝 สร้าง Function `findOne` ใน Student Controller

**เพิ่มในไฟล์: `controllers/student.controller.js`**

```javascript
// Get student by id
exports.findOne = async (req, res) => {
	try {
		const id = req.params.id
		const response = await studentModel.findOne({
			where: { std_id: id }
		})
		
		if (response) {
			res.status(200).json({
				message: "get one student was successfully",
				payload: response
			})
		} else {
			res.status(404).json({
				message: "Student not found"
			})
		}
	} catch (error) {
		res.status(500).json({
			message: error.message || "get one student was failed"
		})
	}
}
```

---

#### 🔗 เพิ่ม Route สำหรับ findOne

**เพิ่มในไฟล์: `routes/student.route.js`**

```javascript
router.get("/:id", studentController.findOne);
```

---

#### 📝 ตัวอย่างโค้ดเต็ม `student.controller.js` (CRUD Complete)

**ไฟล์: `controllers/student.controller.js`**

```javascript
const db = require('../models')
const studentModel = db.students;

// Get all students
exports.findAll = async (req, res) => {
	try {
		const response = await studentModel.findAll()
		res.status(200).json({
			message: "get all student was successfully",
			payload: response
		})
	} catch (error) {
		res.status(500).json({
			message: error.message || "get all student was failed"
		})
	}
}

// Get student by id
exports.findOne = async (req, res) => {
	try {
		const id = req.params.id
		const response = await studentModel.findOne({
			where: { std_id: id }
		})
		
		if (response) {
			res.status(200).json({
				message: "get one student was successfully",
				payload: response
			})
		} else {
			res.status(404).json({
				message: "Student not found"
			})
		}
	} catch (error) {
		res.status(500).json({
			message: error.message || "get one student was failed"
		})
	}
}
```

---

#### 📝 ตัวอย่างโค้ดเต็ม `student.route.js` (CRUD Complete)

**ไฟล์: `routes/student.route.js`**

```javascript
const express = require("express");
const router = express.Router();
const studentController = require("../controllers/student.controller");

router.get("/", studentController.findAll);
router.get("/:id", studentController.findOne);

module.exports = router;
```

##### 🧪 ทดสอบ API

```bash
GET http://localhost:5000/api/student
GET http://localhost:5000/api/student/12345
```


---

## Module 4: 🔐 Authorization with JWT

<div align="center">

### เรียนรู้การสร้างระบบ Authentication และ Authorization ด้วย JWT

[⬆ กลับไปที่สารบัญ](#-สารบัญ)

</div>

---

### Section 4-1 - 🔑 JWT Authentication

<div align="right">

[⬆ กลับไปที่สารบัญ](#-สารบัญ)

</div>

#### 📚 JWT คืออะไร?

**JWT (JSON Web Token)** เป็นมาตรฐานสำหรับสร้าง access token ที่ใช้ในการยืนยันตัวตน (Authentication) และกำหนดสิทธิ์ (Authorization)

##### 🔍 องค์ประกอบของ JWT:

1. **Header** - ระบุประเภท token และ algorithm
2. **Payload** - ข้อมูลที่ต้องการส่ง (เช่น user ID)
3. **Signature** - ใช้สำหรับตรวจสอบความถูกต้องของ token

---

#### 📦 ติดตั้ง jsonwebtoken

```bash
npm install jsonwebtoken
```

---

#### 📥 Import jsonwebtoken

```javascript
const jwt = require('jsonwebtoken');
```

---

#### 🔐 สร้าง Login Controller

**เพิ่มในไฟล์: `controllers/student.controller.js`**

```javascript
const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
	try {
		const id = req.body.stdId;
		const pass = req.body.stdPass;
		
		// ค้นหานักศึกษาจากฐานข้อมูล
		const response = await studentModel.findOne({
			where: {
				std_id: id,
				std_pass: pass
			},
			raw: true
		})

		if (response) {
			// ⚠️ ในทางปฏิบัติ ควรเก็บ SECRETKEY ไว้ใน .env
			const SECRETKEY = process.env.JWT_SECRET || "secret1234";
			
			// สร้าง JWT token
			const token = jwt.sign({
				std_id: response.stdId,
			}, SECRETKEY, {
				expiresIn: "1h", // Token หมดอายุใน 1 ชั่วโมง
			});
			
			// ลบ password ออกจาก response
			delete response.stdPass;
			
			res.status(200).json({
				message: "login was successfully",
				payload: { ...response, token }
			})
		} else {
			res.status(401).json({
				message: "Invalid credentials"
			})
		}

	} catch (error) {
		res.status(500).json({
			message: error.message || "login student was failed"
		})
	}
}
```

##### 🔍 อธิบายโค้ด:

- `jwt.sign()` - สร้าง JWT token
- `expiresIn: "1h"` - กำหนดอายุ token (1 ชั่วโมง)
- `delete response.stdPass` - ลบ password ก่อนส่ง response
- `status(401)` - HTTP status code สำหรับ Unauthorized

> ⚠️ **คำเตือน:** ในทางปฏิบัติ ควรเก็บ `SECRETKEY` ไว้ในไฟล์ `.env` หรือ environment variables เพื่อความปลอดภัยนะครับ


---

#### 🛣️ เพิ่ม Login Route

**เพิ่มในไฟล์: `routes/student.route.js`**

```javascript
router.post("/login", studentController.login);
```

##### 🧪 ทดสอบ Login API

```bash
POST http://localhost:5000/api/student/login
Content-Type: application/json

{
  "stdId": "12345",
  "stdPass": "password123"
}
```

##### ✅ Response ที่คาดหวัง:

```json
{
  "message": "login was successfully",
  "payload": {
    "stdId": "12345",
    "stdName": "John Doe",
    "facId": 1,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

---

### Section 4-2 - 🛡️ สร้าง Middleware สำหรับ Verify Token

<div align="right">

[⬆ กลับไปที่สารบัญ](#-สารบัญ)

</div>

#### 📁 สร้างโฟลเดอร์ Middlewares

```bash
mkdir middlewares
```

---

#### 🔒 สร้าง Verify Token Middleware

**ไฟล์: `middlewares/verify-token.js`**

```javascript
const jwt = require('jsonwebtoken');

module.exports = {
	verifyToken(req, res, next) {
		let token;
		
		// ตรวจสอบ token จากหลายแหล่ง
		if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
			// Token จาก Authorization header: Bearer <token>
			token = req.headers.authorization.split(' ')[1];
		} else if (req.query && req.query.token) {
			// Token จาก query parameter: ?token=<token>
			token = req.query.token;
		} else if (req.cookies && req.cookies.token) {
			// Token จาก cookie
			token = req.cookies.token;
		}
		
		// ⚠️ ในทางปฏิบัติ ควรเก็บ SECRETKEY ไว้ใน .env
		const SECRETKEY = process.env.JWT_SECRET || "secret1234";
		
		if (!token) {
			return res.status(401).json({ 
				auth: false, 
				message: 'No token provided.' 
			});
		}
		
		jwt.verify(token, SECRETKEY, function (err, decoded) {
			if (err) {
				return res.status(401).json({ 
					auth: false, 
					message: 'Failed to authenticate token.' 
				});
			}
			
			// เก็บข้อมูล decoded token ใน req.user สำหรับใช้ใน routes อื่น
			req.user = decoded;
			next();
		});
	}
}
```

##### 🔍 อธิบายโค้ด:

- `verifyToken()` - Middleware function สำหรับตรวจสอบ token
- `jwt.verify()` - ตรวจสอบความถูกต้องของ token
- `req.user` - เก็บข้อมูลจาก decoded token
- `next()` - เรียกใช้ middleware หรือ route ถัดไป

> ⚠️ **คำเตือน:** ในทางปฏิบัติ ควรเก็บ `SECRETKEY` ไว้ในไฟล์ `.env` หรือ environment variables เพื่อความปลอดภัยนะครับ

---

### Section 4-3 - 🔐 การใช้งาน Middleware เพื่อป้องกัน Routes

<div align="right">

[⬆ กลับไปที่สารบัญ](#-สารบัญ)

</div>

#### 🛡️ ป้องกัน Faculty Routes

**แก้ไขไฟล์: `routes/faculty.route.js`**

```javascript
const express = require("express");
const router = express.Router();
const facultyController = require("../controllers/faculty.controller");
const VerifyToken = require('../middlewares/verify-token');

// Protected routes - ต้องมี token ถึงจะเข้าถึงได้
router.get("/", VerifyToken.verifyToken, facultyController.findAll);
router.get("/:id", VerifyToken.verifyToken, facultyController.findOne);
router.post("/", VerifyToken.verifyToken, facultyController.createOne);
router.put("/:id", VerifyToken.verifyToken, facultyController.update);
router.delete("/:id", VerifyToken.verifyToken, facultyController.delete);

module.exports = router;
```

---

#### 🛡️ ป้องกัน Student Routes

**แก้ไขไฟล์: `routes/student.route.js`**

```javascript
const express = require("express");
const router = express.Router();
const studentController = require("../controllers/student.controller");
const VerifyToken = require('../middlewares/verify-token');

// Public route - ไม่ต้องมี token
router.post("/login", studentController.login);

// Protected routes - ต้องมี token ถึงจะเข้าถึงได้
router.get("/", VerifyToken.verifyToken, studentController.findAll);
router.get("/:id", VerifyToken.verifyToken, studentController.findOne);

module.exports = router;
```

---

#### 🧪 ทดสอบ Protected Routes

##### ✅ ทดสอบด้วย Token (สำเร็จ)

```bash
GET http://localhost:5000/api/faculty
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

##### ❌ ทดสอบโดยไม่มี Token (ล้มเหลว)

```bash
GET http://localhost:5000/api/faculty
```

**Response:**
```json
{
  "auth": false,
  "message": "No token provided."
}
```

---

### Section 4-4 - 📝 ตัวอย่างโค้ดเต็ม

<div align="right">

[⬆ กลับไปที่สารบัญ](#-สารบัญ)

</div>

#### 📄 ตัวอย่าง Student Controller (สมบูรณ์)

**ไฟล์: `controllers/student.controller.js`**

```javascript
const db = require('../models')
const studentModel = db.students;
const jwt = require('jsonwebtoken');

// Get all students (Protected)
exports.findAll = async (req, res) => {
	try {
		const response = await studentModel.findAll()
		res.status(200).json({
			message: "get all student was successfully",
			payload: response
		})
	} catch (error) {
		res.status(500).json({
			message: error.message || "get all student was failed"
		})
	}
}

// Get student by id (Protected)
exports.findOne = async (req, res) => {
	try {
		const id = req.params.id
		const response = await studentModel.findOne({
			where: { std_id: id }
		})
		
		if (response) {
			res.status(200).json({
				message: "get one student was successfully",
				payload: response
			})
		} else {
			res.status(404).json({
				message: "Student not found"
			})
		}
	} catch (error) {
		res.status(500).json({
			message: error.message || "get one student was failed"
		})
	}
}

// Login (Public)
exports.login = async (req, res) => {
	try {
		const id = req.body.stdId;
		const pass = req.body.stdPass;
		
		const response = await studentModel.findOne({
			where: {
				std_id: id,
				std_pass: pass
			},
			raw: true
		})

		if (response) {
			const SECRETKEY = process.env.JWT_SECRET || "secret1234";
			
			const token = jwt.sign({
				std_id: response.stdId,
			}, SECRETKEY, {
				expiresIn: "1h",
			});
			
			delete response.stdPass;
			
			res.status(200).json({
				message: "login was successfully",
				payload: { ...response, token }
			})
		} else {
			res.status(401).json({
				message: "Invalid credentials"
			})
		}

	} catch (error) {
		res.status(500).json({
			message: error.message || "login student was failed"
		})
	}
}
```

---

#### 📄 ตัวอย่าง Student Routes (สมบูรณ์)

**ไฟล์: `routes/student.route.js`**

```javascript
const express = require("express");
const router = express.Router();
const studentController = require("../controllers/student.controller");
const VerifyToken = require('../middlewares/verify-token');

// Public routes
router.post("/login", studentController.login);

// Protected routes
router.get("/", VerifyToken.verifyToken, studentController.findAll);
router.get("/:id", VerifyToken.verifyToken, studentController.findOne);

module.exports = router;
```

---

### Section 4-5 - 🔧 การใช้ Environment Variables

<div align="right">

[⬆ กลับไปที่สารบัญ](#-สารบัญ)

</div>

#### 📦 ติดตั้ง dotenv

```bash
npm install dotenv
```

---

#### 📄 สร้างไฟล์ `.env`

**ไฟล์: `.env`**

```env
JWT_SECRET=your_super_secret_key_here_change_this_in_production
DB_HOST=localhost
DB_USERNAME=root
DB_PASSWORD=
DB_DATABASE=db_std
PORT=5000
```

> ⚠️ **สำคัญ:** อย่าลืมเพิ่ม `.env` ใน `.gitignore` เพื่อไม่ให้ commit ไฟล์นี้ขึ้น GitHub นะครับ

---

#### 🔧 แก้ไข `server.js` เพื่อใช้ dotenv

**ไฟล์: `server.js`**

```javascript
require('dotenv').config(); // เพิ่มบรรทัดนี้ไว้ด้านบนสุด

const express = require('express')
const app = express();
const db = require("./models");

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const PORT = process.env.PORT || 5000

// ... routes และโค้ดอื่นๆ
```

---

#### 🔧 แก้ไข Middleware และ Controller

**ไฟล์: `middlewares/verify-token.js`**

```javascript
const jwt = require('jsonwebtoken');

module.exports = {
	verifyToken(req, res, next) {
		// ... โค้ดเดิม
		const SECRETKEY = process.env.JWT_SECRET; // ใช้จาก .env
		// ... โค้ดเดิม
	}
}
```

**ไฟล์: `controllers/student.controller.js`**

```javascript
// ... โค้ดเดิม
const SECRETKEY = process.env.JWT_SECRET; // ใช้จาก .env
// ... โค้ดเดิม
```

---

## 🎉 สรุป Module 4

เราได้เรียนรู้การสร้างระบบ **Authentication และ Authorization** ด้วย JWT ครบทั้ง:

| ฟีเจอร์ | คำอธิบาย |
|---------|----------|
| 🔑 **JWT Authentication** | สร้าง token สำหรับยืนยันตัวตน |
| 🛡️ **Middleware Protection** | ป้องกัน routes ด้วย middleware |
| 🔒 **Token Verification** | ตรวจสอบความถูกต้องของ token |
| 🔐 **Secure Routes** | แยก public และ protected routes |
| 🌍 **Environment Variables** | เก็บ secret keys อย่างปลอดภัย |

---

## 📋 สรุป API Endpoints

### Public Endpoints (ไม่ต้องมี Token)

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/student/login` | Login และรับ token |

### Protected Endpoints (ต้องมี Token)

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/faculty` | ดึงข้อมูล faculty ทั้งหมด |
| `GET` | `/api/faculty/:id` | ดึงข้อมูล faculty ตาม id |
| `POST` | `/api/faculty` | สร้าง faculty ใหม่ |
| `PUT` | `/api/faculty/:id` | อัปเดตข้อมูล faculty |
| `DELETE` | `/api/faculty/:id` | ลบ faculty |
| `GET` | `/api/student` | ดึงข้อมูล student ทั้งหมด |
| `GET` | `/api/student/:id` | ดึงข้อมูล student ตาม id |

---

## 🧪 ตัวอย่างการใช้งาน

### 1. Login เพื่อรับ Token

```bash
POST http://localhost:5000/api/student/login
Content-Type: application/json

{
  "stdId": "12345",
  "stdPass": "password123"
}
```

### 2. ใช้ Token เพื่อเข้าถึง Protected Routes

```bash
GET http://localhost:5000/api/faculty
Authorization: Bearer <your_token_here>
```

---

<div align="center">

**🎊 ยินดีด้วยครับ! เราได้เรียนรู้การสร้างระบบ Authentication และ Authorization ด้วย JWT แล้ว**

[⬆ กลับไปที่สารบัญ](#-สารบัญ)

</div>