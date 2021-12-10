import React from 'react';
import ReactDOM from 'react-dom';
import Icon from './icon';

const fn = ()=>{
    console.log('22222');
    
}

function App(){
    return (
        <div>
            <Icon name="alipay" onClick={fn} />
        </div>
    )
}
ReactDOM.render(<App />, document.getElementById('app'))


