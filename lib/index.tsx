import React from 'react';
import ReactDOM from 'react-dom';
import Icon from './icon';

const fn: React.MouseEventHandler = (e)=>{
    console.log(e.target);
}

function App(){
    return (
        <div>
            <Icon name="alipay" onClick={fn} />
        </div>
    )
}
ReactDOM.render(<App />, document.getElementById('app'))


