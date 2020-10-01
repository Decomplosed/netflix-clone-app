import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed';

const config = {
  apiKey: process.env.REACT_APP_FIREABASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREABASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREABASE_DATABASE_UR,
  projectId: process.env.REACT_APP_FIREABASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREABASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREABASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREABASE_APP_ID,
};

const firebase = Firebase.initializeApp(config);

export { firebase };
