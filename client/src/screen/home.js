import '../assets/css/home.css';
import { homeConstant } from '../constants/home';
//import {withRouter} from 'react-router-dom';
import React from 'react';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
        this.login = this.login.bind(this);
        this.yoyo = this.yoyo.bind(this);
    }

    componentDidMount() {

    }

    login() {
        //this.props.history.push(homeConstant.loginUrl)
    }

    yoyo() {
        console.log("yoyo");alert("yolo");
        fetch("http://localhost:3000/docrawl").then(res => { console.log(res); }).catch(e => { console.log(e); });
    }

    render() {
        return (
            <div className="homeDiv">
                <div className="homeLogin" onClick={this.yoyo}>
                    {/* <button onClick={this.yoyo}> */}
                        {homeConstant.login}
                    {/* </button> */}
                </div>
            </div>
        );
    }
}

export default Home;