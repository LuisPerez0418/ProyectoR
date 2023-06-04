import express from "express";
import fileupload from "express-fileupload";
import Postrouter from "./routers/posts.routes.js";
const app = express();
//middlewares
app.use(express.json())
app.use(fileupload({
    useTempFiles: true,
    tempFileDir:"./upload"
}))
//ruta
app.use(Postrouter);
export default app;