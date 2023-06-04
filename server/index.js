import { mongoDb } from "./db.js";
import { PORT } from "./confi.js";
import app from "./app.js";

mongoDb();

app.listen(PORT);

console.log("El serve esta Corriendo en ", PORT);