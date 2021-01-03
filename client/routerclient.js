import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../client/screen/home/home";
import Login from "../client/screen/login/login";

class MainRouter extends React.Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
            </div>
        );
    }
}
export default MainRouter;