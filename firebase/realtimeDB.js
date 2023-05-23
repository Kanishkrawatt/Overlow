import { getDatabase } from "firebase/database";

import app from "./config";

const db = getDatabase(app);

export default db;
