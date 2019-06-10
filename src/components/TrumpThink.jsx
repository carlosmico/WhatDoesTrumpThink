import React from 'react';

class TrumpThink extends React.Component{
    
    render(){
        return(
            <div className='trumpThought'>
                <p>{this.props.thought}</p>
            </div>
        );
    }
}

export default TrumpThink;