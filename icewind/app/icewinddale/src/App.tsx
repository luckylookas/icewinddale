import React, {Fragment} from 'react';
import './App.css';
import Header from './features/header/Header';
import Content from './features/content/Content';
import CharacterForm from "./features/character/Character";
import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";
import {About} from "./features/about/About";
import {Magic} from "./features/magic/Magic";

function App() {
    return <Fragment>
        <div className="bgred">
            <div className="gradient"/>
            <img className="ensure_size" src="blue_red_final.jpg" alt="red aurora"/>
        </div>
        <div className="bggreen">
            <div className="gradient"/>
            <img className="ensure_size" src="blue_red_final.jpg" alt="green aurora"/>
        </div>
        <div className="content">
            <BrowserRouter>
          <Header />
            <Content>

                    <Switch>
                        <Route path={"/character"}>
                            <CharacterForm />
                        </Route>
                        <Route path={"/magic"}>
                            <Magic />
                        </Route>
                        <Route path={"/about"}>
                            <About />
                        </Route>
                    </Switch>
            </Content>
            </BrowserRouter>
        </div>
    </Fragment>
}

export default App;
