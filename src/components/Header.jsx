import React from 'react';

//CSS
import '../css/Header.css'

class Header extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <header>
                <h1>{this.props.title}</h1>
            </header>
        );
    }
}

export default Header;