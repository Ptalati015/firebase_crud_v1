import * as admin from "firebase-admin";
import serviceAccount from "./permissions.json";
import * as dotenv from "dotenv";

dotenv.config();

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
});

const db = admin.firestore();
export {admin, db};
