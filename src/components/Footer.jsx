import React from 'react';

class Footer extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <footer>
                <p>{this.props.copyright}</p>
            </footer>
        );
    }
}

export default Footer;