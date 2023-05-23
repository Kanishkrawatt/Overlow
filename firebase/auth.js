import { getAuth } from "firebase/auth";

import app from "./config";

const auth = getAuth(app);

export default auth;
