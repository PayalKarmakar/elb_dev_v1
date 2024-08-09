Populating master_posts table:
npm i
stop the server
node faker/postSeeder.js

ReactJS starter packages:
npm i @reduxjs/toolkit @tanstack/react-query axios dayjs dotenv exceljs nanoid react-bootstrap react-datepicker react-icons react-redux react-router-dom react-select react-toastify uuid crypto-js --save

NodeJS starter packages:
npm i bcrypt concurrently cookie-parser datauri dayjs dotenv express express-async-errors express-validator http-status-codes jsonwebtoken morgan multer nanoid nodemon pg pg-hstore uuid --save

Node JS .env

APP_PORT=3000
APP_ENV=development
APP_TZ=Asia/Kolkata

# Database connection ------

DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASS=postgres
DB_NAME=elb

# JWT ------

JWT_SECRET=ZHJpdmVuLWZlcnJldC01Ny5jbGVyay5hY2NvdW50cy5kZXYk
JWT_EXPIRY=1d
JWT_REMEMBER_ME_EXPIRY=30d

# Pagination ------

ITEMS_PER_PAGE=10
