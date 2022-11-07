import React, {Component} from 'react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import reg from '../../images/regComp.svg';
import classes from "./Registration.module.css"
import {Link} from "react-router-dom";



class Registration extends Component {
    render() {
        return (
            <div className={classes.Window}>
                <Header/>
                <div className={classes.Content}>
                    <div className={classes.Container}>
                        <div className={classes.Inputs}>
                            <img className={classes.RegImg} src={reg} alt={'Картинка'}/>
                            <p className={classes.p}>Регистрация</p>
                            <input className={classes.textBox} type={'text'} placeholder={'  Введите ИНН Вашего отеля'}/>
                            <br/>
                            <input className={classes.textBox} type={'text'} placeholder={'  Введите название Вашего отеля'}/>
                            <br/>
                            <input className={classes.textBox} type={'text'} placeholder={'  Введите Вашу почту'}/>
                            <br/>
                            <input className={classes.textBox} type={'text'} placeholder={'  Введите пароль'}/>
                            <br/>
                            <input className={classes.textBox} type={'text'} placeholder={'  Повторите пароль'}/>
                            <Link to={"/profile"}><button className={classes.sigIn}>Войти</button></Link>
                            <div className={classes.Text}>
                                У вас уже есть аккаунт? <Link to={"/auth"} className={classes.Link}>Войти</Link>
                            </div>
                        </div>
                     </div>
                 </div>
                <Footer/>
            </div>
        );
    }
}

export default Registration;