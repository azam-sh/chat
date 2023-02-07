import LoginPageComponent from "./components/LoginPage/LoginPage";
import MainComponent from "./components/Main/Main";
import { User } from "./models";

function App() {
  const user: User | string = localStorage.getItem("userName") || "";

  return <>{user ? <MainComponent /> : <LoginPageComponent />}</>;
}

export default App;
