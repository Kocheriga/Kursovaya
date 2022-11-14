import React, {PureComponent} from 'react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

class Profile extends PureComponent {
    render() {
        return (
            <div>
                <Header/>
                Profile
                <Footer/>
            </div>
        );
    }
}

export default Profile;
