import React from 'react';
import '../css/TrumpThink.css'

class TrumpThink extends React.Component {

    render() {
        return (
            <div className='trumpThought'>
                <img src={this.props.trumpPic} alt="Donald Trump" />
                <p>{this.props.thought}</p>
            </div>
        );
    }
}

export default TrumpThink;