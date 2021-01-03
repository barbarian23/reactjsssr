import React from "react";
import ReactDOM from "react-dom";
import MainRouter from "./routerclient";
import { BrowserRouter } from "react-router-dom";


class Client extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <MainRouter />
            </BrowserRouter>
        );
    }
}

ReactDOM.hydrate(<Client />, document.getElementById("root"));