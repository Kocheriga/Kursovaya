import {Routes, Route} from "react-router-dom";
import Authorization from "./containers/Authorization/Authorization";
import Registration from "./containers/Registration/Registration";
import MainWindow from "./containers/MainWindow/MainWindow";

function App() {
  return (
    <>
        <Routes>
            <Route path='/auth' element={<Authorization/>}/>
            <Route path='/registration' element={<Registration/>}/>
            <Route path='/' element={<MainWindow/>}/>
        </Routes>
    </>
  );
}

export default App;
