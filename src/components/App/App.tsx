import React from 'react';
import './App.css';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {config} from "./App.config";
import {BrowserRouter, Route} from "react-router-dom";

const App = () => <BrowserRouter>
    <div className="App">
        <Header/>
        <div style={{marginTop: 110, marginLeft: 50, marginRight: 50, marginBottom: 50}}>
            {
                config.routes.map((route: any) =>
                    <Route
                        exact={route.exact || false}
                        key={route.key}
                        path={route.route}
                        component={route.component}
                    />)
            }
        </div>
        <Footer/>
    </div>
</BrowserRouter>;

export default App;
