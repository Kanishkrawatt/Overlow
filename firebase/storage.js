import { getStorage } from "firebase/storage";
import app from "./config";
const storage = getStorage(app);

export default storage;
