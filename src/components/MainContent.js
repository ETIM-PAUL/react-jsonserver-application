import React from 'react'
import Tasker from './contents/Tasker';
import NumG from './contents/NumGame';


const MainContent = () => {
    return(
    <div className="row">
        <br/>
        <div className="content-task"><Tasker/></div>
        <div className="content-game"><NumG/></div>
    </div>
)
}

export default MainContent;