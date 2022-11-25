import {Routes, Route} from "react-router-dom";
import Authorization from "./containers/Authorization/Authorization";
import Registration from "./containers/Registration/Registration";
import MainWindow from "./containers/MainWindow/MainWindow";
import ChooseRegistration from "./containers/ChooseRegistration/ChooseRegistration";
import Profile from "./containers/Profile/Profile"
import Posts from "./containers/Posts/Posts";
import AddPost from "./containers/Posts/AddPost/AddPost";
import CheckPost from "./containers/CheckPost/Checkpost"

function App() {
  return (
    <>
        <Routes>
            <Route path='/auth' element={<Authorization/>}/>
            <Route path='/registration' element={<Registration/>}/>
            <Route path='/' element={<MainWindow/>}/>
            <Route path='/chooseRegistration' element={<ChooseRegistration/>}/>
            <Route path={'/profile'} element={<Profile/>}/>
            <Route path={'/posts'} element={<Posts/>}/>
            <Route path={'/posts/addPost'} element={<AddPost/>}/>
            <Route path={'/posts/post'} element={<CheckPost/>}/>
        </Routes>
    </>
  );
}
export default App;
