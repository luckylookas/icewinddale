import React, {Fragment} from 'react';
import './App.css';
import Header from './features/header/Header';
import Content from './features/content/Content';

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
          <Header />
          <Content />
        </div>
    </Fragment>
}

export default App;
