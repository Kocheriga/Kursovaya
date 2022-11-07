import React, {Component} from 'react';
import classes from "./Authorization.module.css"
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import {Link} from "react-router-dom";
import auth from "../../images/auth.png";
import mobile from "../../images/mobile.png"

class Authorization extends Component {
    render() {
        return (
            <div className={classes.Window}>
                <Header>
                    <Link to={"/chooseRegistration"}> <button className={classes.Button}>Зарегистрироваться</button></Link>
                    <Link to={"/"}><button className={classes.Button2}>На главную страницу</button></Link>
                </Header>
                <div className={classes.Content}>
                    <div className={classes.Container}>
                        <div className={classes.form}>
                            <img className={classes.authImg} src={auth} alt={"Картинка"} />
                            <div className={classes.Inputs}>
                                <input className={classes.textBox} type={'text'} placeholder={"Почта"}/>
                                <input className={classes.textBox} type={'password'}  placeholder={"Пароль"}/>
                                <br/>
                                <Link to={"/profile"}><button className={classes.sigIn}>Войти</button></Link>
                            </div>
                            <div className={classes.Text}>
                                У вас нет аккаунта? <Link to={"/chooseRegistration"} className={classes.Link}>Зарегистрируйтесь</Link>
                            </div>
                        </div>
                        <img className={classes.mobileImg} src={mobile} alt={"Картинка"} />
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Authorization;