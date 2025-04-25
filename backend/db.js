import express from "express";
import path from "path";
import mysql from "mysql2/promise";
import cors from "cors";
import bodyParser from "body-parser";
import session from "express-session";
import multer from "multer";
import router from "./routes/routes.js";
import cookieParser from "cookie-parser";
import {errorHandler} from "./middleware/errorMiddleware.js";
import {notFound} from "./middleware/notfoundMiddleware.js";
import morgan from "morgan";
import expressMySQL from "express-mysql-session";

const app = express();
const port = 5000;
const storage = multer.memoryStorage();
const upload = multer({ storage });

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));

const MySQLStore = expressMySQL(session);
const sessionStore = new MySQLStore({
  host: "localhost",
  user: "root",
  password: "",
  database: "ShelfX"
});

app.use(
  session({
    key: "session_cookie_name",
    secret: "asdg34NJSQKK78",
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 24 * 60 * 60 * 1000,
      httpOnly: true,
      secure: false, // Set to true in production with HTTPS
      sameSite: 'lax' // Important for cross-origin requests
    },
  })
);
app.use(express.static(path.join(process.cwd(), "build")));


app.use(router);
app.use(notFound); 
app.use(errorHandler);



const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "ShelfX",
});

export default db;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});