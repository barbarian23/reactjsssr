import '../../assets/css/login/login.css';
import { loginConstant } from '../../constants/login/login';
import { loginKey } from "../../constants/login/login";
import { connect } from 'react-redux';
import React from 'react';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoginIn: false,
            loginStatus: 0,// 0 chưa đăng nhập, 1 đăng nhập thành công, -1 đăng nhập thất bại, 2 đang đăng nhập
            loginStatusText: "",
        }
        this.username = "";
        this.password = "";
        this.login = this.login.bind(this);
        this.userNameInput = this.userNameInput.bind(this);
        this.passwordInput = this.passwordInput.bind(this);
    }

    componentDidMount() {

    }

    /**
     * Bấm nút login
     */
    login() {
        this.setState({
            isLoginIn: true,
            loginStatusText: "Đang đăng nhập"
        });
        this.props.updateState(loginKey.LOGIN);
    }
    /**
     * Khi đang nhập vào ô input username
     * @param {*} e - event
     */
    userNameInput(e) {
        this.username = e.target.value;
    }
    /**
     * Khi đang nhập vào ô input password
     * @param {*} e - event
     */
    passwordInput(e) {
        this.password = e.target.value;
    }

    render() {
        return (
            <div>
                {
                    this.state.isLoginIn === false ?
                        <div className="crawl-login" id="crawl_login"> 

                            <div className="crawl-login-username-password">
                                <div className="crawl-login-username-password-upper">
                                    <span>{loginConstant.loginName}</span>
                                </div>
                                <div className="crawl-login-username-password-below">
                                    <input type="text" id="username" placeholder={loginConstant.loginNamePlaceholder} onChange={this.userNameInput} />
                                </div>
                            </div>

                            <div className="crawl-login-username-password">
                                <div className="crawl-login-username-password-upper">
                                    <span>{loginConstant.loginPassword}</span>
                                </div>
                                <div className="crawl-login-username-password-below">
                                    <input type="password" id="password" placeholder={loginConstant.loginPasswordPlaceholder} onChange={this.passwordInput} />
                                </div>
                            </div>

                            <div className="crawl-login-button-submit" id="crawl_login_button_submit" onClick={this.login}>
                                <span>{loginConstant.loginButton}</span>
                            </div>
                        </div> :
                        <div className="crawl-login" id="crawl_login_success">
                            <div className="crawl-login-success-contain">
                                <h2>{this.state.loginStatusText}</h2>
                            </div>
                        </div>
                }
                <h4 id="crawl_login_error_text">{this.state.loginStatusText}</h4>
            </div >
        );
    }
}

//Set, su dung action
const mapDispatchToProps = dispatch => {
    return {
        updateState: (type, value) => dispatch({ type: type, value: value })
    }
}


//Get
const mapStateToProps = (state, ownProps) => {
    return {

    }
}

export default Login;