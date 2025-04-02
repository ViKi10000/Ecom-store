import app from "./app.js";
import dotenv from "dotenv";

import connectDb from "./utils/db.js";

dotenv.config();

const PORT = process.env.PORT;

//SERVER

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDb();
});
