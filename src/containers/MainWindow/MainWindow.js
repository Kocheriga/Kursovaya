import React, {Component} from 'react';
import classes from "./MainWindow.module.css"
import MainImg from "./images/MainImg.svg"

class MainWindow extends Component {
    render() {
        return (
            <div className={classes.MainWindow}>


                <header className={classes.Header}>
                    <img src={require("./images/HeaderLogo.jpg")} className={classes.Logo}  alt={"Картинка"}/>
                    <div className={classes.HeaderText}>Pet Hotel</div>
                    <div className={classes.HeaderButtons}>
                        <button className={classes.Button}>Войти</button>
                        <button className={classes.Button2}>Зарегистрироваться</button>
                    </div>

                </header>


                <div className={classes.MainWindowContent}>
                    <img src={MainImg} className={classes.MainImg} alt={"Картинка"}/>
                    <div className={classes.MainWinText}>
                        Добро пожаловать в веб-приложение для поиска временного дома для вашего питомца
                    </div>
                </div>


                <footer className={classes.Footer}>
                    <div className={classes.FooterContent}>
                        <img src={require("./images/FooterImg.png")} className={classes.FooterImg} alt={"Картинка"}/>
                        <div className={classes.FooterText}>
                            <p>Контакты</p>
                            <p>+7 (xxx)xxx-xx-xx</p>
                            <p>+7 (xxx)xxx-xx-xx</p>
                            <br/>
                            <p>@2022-2023 PetHotel.ru Все права защищены</p>
                        </div>
                        <div className={classes.FooterShare}>
                            Мы в соцсетях
                            <div className={classes.FooterShareImg}>
                                <img className={classes.FooterImg1} src={require("./images/telega.png")} alt={"Картинка"}/>
                                <img className={classes.FooterImg2} src={require("./images/vk.png")} alt={"Картинка"}/>
                            </div>
                        </div>
                    </div>
                </footer>


            </div>
        );
    }
}

export default MainWindow;