import React, { Component } from 'react';
import Header from '../Header/Header.jsx';
import './home.js';
import appData from './appData.json';

class Home extends Component {
    render() {
        const { dataHeader} = appData;
        return (
            <div className='home'>
                <Header {...dataHeader} />
            </div>
        );
    }
}

export default Home;
