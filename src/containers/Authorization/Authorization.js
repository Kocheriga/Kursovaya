import React, {Component} from 'react';
import classes from "./Authorization.module.css"
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import {Link} from "react-router-dom";
import auth from "../../images/auth.png";
import mobile from "../../images/mobile.png"


class Authorization extends Component {
    state= {
        isAuthValid:false,
        users:[
            {
                id:1,
                login:'Kocheriga',
                password:'123456'
            }
        ],
    }




    onChangeHandler=()=>{
        let input = document.getElementsByName('login');
        let password = document.getElementsByName('password');
        let isAuthValid =true
        if(input.length>=6 && password.length>=6)
        {
            this.setState({isAuthValid})
        }
    }
    signIn=()=>{
        let input = document.getElementsByName('login')[0].value;
        let password = document.valueOf().getElementsByName('password')[0].value;
        if(input === this.state.users[0].login && password === this.state.users[0].password)
        {
            document.location.replace('/profile');
        }
        else{
            alert("Неверный логин или пароль");
        }
    }


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
                                <input name={'login'} onChange={this.onChangeHandler} className={classes.textBox} type={'text'} placeholder={"Логин"}/>
                                <input name={'password'} onChange={this.onChangeHandler} className={classes.textBox} type={'password'}  placeholder={"Пароль"}/>
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
                <Footer/>
            </div>
        );
    }
}

export default Authorization;