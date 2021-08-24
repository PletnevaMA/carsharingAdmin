import { useSelector } from "react-redux";
import { Login } from "./components/Login/Login";
import './styles.scss';

function App() {
  const { isAutoresUser } = useSelector((state) => state.isAutoresUser);
  if (!isAutoresUser) {
    return <Login />;
  }
}
export default App;
