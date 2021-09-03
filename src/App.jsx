import { useSelector } from "react-redux";
import  Login  from "./components/Login/Login";
import AdminPanel from './components/AdminPanel/AdminPanel';
import './styles.scss';

const App = () => {
  const { isAutoresUser } = useSelector((state) => state.isAutoresUser);
  console.log(isAutoresUser);
    return <AdminPanel />;
}
export default App;
