const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDb = require("./config/db");

// import routes
const SuperAdminRoutes = require("./routes/superAdminRoutes");
const InstituteRoutes = require("./routes/instituteRoutes");
const AdminRoutes = require("./routes/adminRoutes");
const NormalSiteRoutes = require("./routes/normalSiteRoutes");

const StudentRoutes = require("./routes/studentRoutes");
const qrGenerator = require("./routes/QrsGenRoutes");
const AttendanceRouter = require("./routes/attndnceRoutes");
const PaymentRouter = require("./routes/paymentRoutes");
const TuteRouter = require("./routes/tuteRoutes");
const ClassRouter = require("./routes/classRoutes");
const EmailRouter = require("./routes/emailRoute");
const SmsRouter = require("./routes/smsRoutes");



dotenv.config();

// express app
const app = express();

// middleware
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

//------
app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});
//-------

// Routes
app.use("/api/superAdmin", SuperAdminRoutes);
app.use("/api/institute", InstituteRoutes);
app.use("/api/admin", AdminRoutes);
app.use("/api/site", NormalSiteRoutes);
app.use("/api/students",StudentRoutes);
app.use("/api/qr",qrGenerator)
app.use("/api/attendance",AttendanceRouter);
app.use("/api/payments",PaymentRouter);
app.use("/api/tutes",TuteRouter);
app.use("/api/class",ClassRouter);
app.use("/api/emails",EmailRouter);
app.use("/api/sms",SmsRouter);


// connect to db
connectDb();

const PORT = process.env.PORT || 4000;

// listen for requests
app.listen(PORT);
