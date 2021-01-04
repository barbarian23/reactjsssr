import React from "react";
import ReactDOM from "react-dom";
import MainRouter from "./routerclient";
import { BrowserRouter, Switch } from "react-router-dom";


class Client extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <MainRouter />
                </Switch>
            </BrowserRouter>
        );
    }
}

ReactDOM.hydrate(<Client />, document.getElementById("root"));