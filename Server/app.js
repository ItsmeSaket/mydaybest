const express = require("express");
const app = express()
const bodyParser = require("body-parser");
const cors = require("cors");

//const cookieParser = require("cookie-parser");
//const sendToken = require("./utils/jwtToken");
const port=process.env.PORT || 4000;
const path = require("path");
const dotenv=require("dotenv");
dotenv.config({ path: './config.env'})

//const client = require('twilio')(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN)
require("./db/conn")
app.use(express.json());
app.use(cors());
app.options('*',cors())
app.use(bodyParser.urlencoded({ extended: true }));


const user = require("./routes/userRoute");
const OperationLog=require("./routes/OperationLogRoute");
const dashboard=require("./routes/dashboardRoute");

app.use("/user", user);
app.use("/operation_Log",OperationLog);
app.use("/dashboard",dashboard);



   if(process.env.NODE_ENV="production")
   {
     app.use(express.static("client/build"))
     app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });

   }

  const server=app.listen(port, () => {
    console.log(`Server is working on http://localhost:${port}`);
  });

  
