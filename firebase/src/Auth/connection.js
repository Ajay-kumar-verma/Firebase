import { getAuth} from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAa96ew3zVAhvXVkS-GmiO9MtkWVcJ784A",
  authDomain: "reactapp-b6634.firebaseapp.com",
  databaseURL: "https://reactapp-b6634-default-rtdb.firebaseio.com",
  projectId: "reactapp-b6634",
  storageBucket: "reactapp-b6634.appspot.com",
  messagingSenderId: "908502620872",
  appId: "1:908502620872:web:dae16dc9f55b7f6715e3fd"
};
const app = initializeApp(firebaseConfig);

export  const auth=getAuth();
