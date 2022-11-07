import React, {PureComponent} from 'react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import {Link} from "react-router-dom";
import reg from "../../images/reg.svg"
import classes from "./ChooseRegistration.module.css"

class ChooseRegistration extends PureComponent {
    render() {
        return (
            <div className={classes.Window}>
                <Header>
                    <Link to={"/auth"}> <button className={classes.Button}>Войти</button></Link>
                    <Link to={"/"}><button className={classes.Button2}>На главную страницу</button></Link>
                </Header>
                <div className={classes.Content}>
                    <div className={classes.Container}>
                        <img className={classes.Logo} src={reg} alt={"logo"}></img>
                        <div className={classes.Text}>Выберите способ регистрации</div>
                        <div className={classes.Buttons}>
                            <Link  to={"/"}><button style={{width: 300, height:60, fontSize:30}} className={classes.Button2}>Пользователь</button></Link>
                            <Link  to={"/registration"}><button style={{width: 300, height:60, fontSize:30}} className={classes.Button2}>Компания</button></Link>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default ChooseRegistration;