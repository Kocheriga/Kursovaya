import React, {Component} from 'react';
import classes from "./MainWindow.module.css"
import MainImg from "./images/MainImg.svg"
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import {Link} from "react-router-dom";

class MainWindow extends Component {
    render() {
        return (
            <div className={classes.MainWindow}>
                <Header>
                    <Link to={"/chooseRegistration"}><button className={classes.Button2}>Зарегистрироваться</button></Link>
                    <Link to={"/auth"}> <button className={classes.Button}>Войти</button></Link>
                </Header>
                <div className={classes.MainWindowContent}>
                    <div className={classes.content}>
                        <img src={MainImg} className={classes.MainImg} alt={"Картинка"}/>
                        <div className={classes.MainWinText}>
                            Добро пожаловать в веб-приложение для поиска временного дома для вашего питомца
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default MainWindow;