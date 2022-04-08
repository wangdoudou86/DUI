import React from 'react';
import Button from './button';

const ButtonExample: React.FunctionComponent = ()=>{
    return (
        <div id='button-example'>
           <Button buttonType='primary'>Primary Button</Button>
           <Button>Default Button</Button>
           <Button buttonType="dashed">Dashed Button</Button>
           <Button buttonType="text">Text Button</Button>
           <Button buttonType="link">Link Button</Button>
        </div>
    )
}

export default ButtonExample;