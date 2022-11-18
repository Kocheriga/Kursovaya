import React, {Component} from 'react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import reg from '../../images/regComp.svg';
import classes from "./Registration.module.css"
import {Link} from "react-router-dom";
import lock from "../../images/lock.png";


let check =false;
class Registration extends Component {

    passwordCheck = () => {
        const elem1 = document.querySelector('#pass1_img');
        const input1 = document.querySelector('#pass_text');
        const elem2 = document.querySelector('#pass2_img');
        const input2 = document.querySelector('#repass_text');
        if(check ===false){
            elem1.className = classes.passwordUnImg;
            check =true;
            input1.type ='text';
            elem2.className = classes.passwordUnImg;
            input2.type ='text';
        }
        else if(check ===true){
            elem1.className = classes.passwordImg;
            check = false;
            input1.type ='password';
            elem2.className = classes.passwordImg;
            input2.type ='password';
        }
    }

    render() {
        return (
            <div className={classes.Window}>
                <Header>
                    <Link to={"/auth"}> <button className={classes.Button}>Войти</button></Link>
                    <Link to={"/"}><button className={classes.Button2}>На главную страницу</button></Link>
                </Header>
                <div className={classes.Contentbg}>
                <div className={classes.Content}>
                    <div className={classes.Container}>
                        <div className={classes.Inputs}>
                            <img className={classes.RegImg} src={reg} alt={'Картинка'}/>
                            <p className={classes.p}>Регистрация</p>
                            <input className={classes.textBox} type={'text'} placeholder={'Введите ИНН Вашего отеля'}/>

                            <br/>

                            <input className={classes.textBox} type={'text'} placeholder={'Введите название Вашего отеля'}/>

                            <br/>

                            <input className={classes.textBox} type={'text'} placeholder={'Введите Вашу почту'}/>

                            <br/>

                            <img alt={'Картинка'} src={lock} className={classes.lockImg}/>
                            <input id={'pass_text'} className={classes.textBox} type={'text'} placeholder={'Введите пароль'}/>
                            <button id={'pass1_img'} className={classes.passwordImg} onClick={this.passwordCheck}/>

                            <br/>

                            <img alt={'Картинка'} src={lock} className={classes.lockImg}/>
                            <input id={'repass_text'} className={classes.textBox} type={'text'} placeholder={'Повторите пароль'}/>
                            <button id={'pass2_img'} className={classes.passwordImg} onClick={this.passwordCheck}/>

                            <Link to={"/profile"}><button className={classes.sigIn}>Войти</button></Link>
                            <div className={classes.Text}>
                                У вас уже есть аккаунт? <Link to={"/auth"} className={classes.Link}>Войти</Link>
                            </div>
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