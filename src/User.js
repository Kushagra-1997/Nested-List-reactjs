import React from 'react';
import {withRouter} from 'react-router-dom'

const User = (props) => {
    console.log(props.match.params.name);
    return (
        <div>
            {(props.match.params.name)}
        </div>
    )
}

export default withRouter(User);
