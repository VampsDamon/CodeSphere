import app from "./app.js";
import { connectionDB } from "./config/database.js";

const PORT=process.env.PORT

connectionDB();
app.listen(PORT,()=>{
    console.log("Server is working on PORT :",PORT);
})