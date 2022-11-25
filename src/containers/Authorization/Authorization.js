import React, {Component} from 'react';
import classes from "./Authorization.module.css"
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import {Link} from "react-router-dom";
import auth from "../../images/auth.png";
import mobile from "../../images/mobile.png";
import axios from "axios";


let check =false;
class Authorization extends Component {

    onChangeHandler=()=>{
        let input = document.getElementsByName('login');
        let password = document.getElementsByName('password');
        let isAuthValid =true
        if(input.length>=6 && password.length>=6)
        {
            this.setState({isAuthValid})
        }
    }
    signIn=async (e)=>{

        const elem1 = document.querySelector('#log1');
        const elem2 = document.querySelector('#log2');
        const error1 = document.querySelector('#text1');
        const error2 = document.querySelector('#text2');
        const email = document.querySelector('#log1').value;
        const password = document.querySelector('#log2').value;

        try{
            console.log(email, password)
            const res = await axios.post('https://localhost:5001/api/authentication/login/', {
                email: email,
                password: password
            })
            console.log(res)
            // console.log(res.data)
            localStorage.setItem('token:', res.data.token)
            window.location.href = '/posts';
        }
        catch {
            elem1.className = classes.red;
            error1.className = classes.errorMessage;
            elem2.className = classes.red;
            error2.className = classes.errorMessage;
        }
    }

    passwordCheck=()=>{
        const elem = document.querySelector('#pass_img');
        const input = document.querySelector('#log2');
        if(check ===false){
            elem.className = classes.passwordUnImg;
            check =true;
            input.type ='text';
        }
        else if(check ===true){
            elem.className = classes.passwordImg;
            check = false;
            input.type ='password';
        }
    }
    check=()=>{
        console.log(1);
    }


    render() {
        return (
            <div className={classes.Window}>
                <Header>
                    <Link to={"/chooseRegistration"}> <button className={classes.Button}>Зарегистрироваться</button></Link>
                    <Link to={"/"}><button className={classes.Button2}>На главную страницу</button></Link>
                </Header>
                <div className={classes.ContentBg}>
                    <div className={classes.Content}>
                        <div className={classes.Container}>
                            <div className={classes.form}>
                                <img className={classes.authImg} src={auth} alt={"Картинка"} />
                                <div className={classes.Inputs}>
                                    <input id={'log1'} name={'login'} onChange={this.onChangeHandler} className={classes.textBox} type={'text'} placeholder={"Логин"}/>
                                    <div id={'text1'} className={classes.unErrorMessage}>Введен неверный логин</div>
                                    <input id={'log2'} name={'password'} onChange={this.onChangeHandler} className={classes.textBox} type={'password'}  placeholder={"Пароль"} maxLength={20}/>
                                    <button id={'pass_img'} className={classes.passwordImg} onClick={this.passwordCheck}/>
                                    <div id={'text2'} className={classes.unErrorMessage}>Введен неверный пароль</div>
                                    <br/>
                                    <button onClick={this.signIn} name={'signbutton'} className={classes.sigIn}>Войти</button>
                                </div>
                                <div className={classes.Text}>
                                    У вас нет аккаунта? <Link to={"/chooseRegistration"} className={classes.Link}>Зарегистрируйтесь</Link>
                                </div>
                            </div>
                            <img className={classes.mobileImg} src={mobile} alt={"Картинка"} />
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Authorization;