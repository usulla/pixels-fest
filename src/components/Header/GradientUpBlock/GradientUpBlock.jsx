import React, { Component } from "react";
import style from "./gradientupblock.scss";

class GradientUpBlock extends Component {
    constructor() {
        super();
        this.state = { 
            showGradientText: false
         };
    }
    showGradientText = (e) => {
        const self = e.currentTarget;
        document.querySelector('.gradient-up-block__content').classList.add('active');
        this.setState({ showGradientText:true});
        document.querySelector('.pages').classList.add('fixheader');
        setTimeout(function() {
            document.querySelector('.fulltext').classList.add('show');
        }, 500);
        setTimeout(function() {
            document.querySelector('.fulltext').classList.add('animate');
        }, 600);
    }
    render() {
    return (
        <div className="gradient-up-block">
            <span className="theme-title">
                {this.props.title}
            <div className="gradient-up-block__content"> 
                <div className="theme-gradientblock" onClick={this.showGradientText}>
                </div>
                <span className="fulltext">{this.state.showGradientText ?  this.props.description : null}</span> 
            </div>
            </span> 
        </div>
    );
}
}

export default GradientUpBlock;
