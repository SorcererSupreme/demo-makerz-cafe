import React, { Fragment } from 'react';

const Hidden = (props) => {
  if(props.isMobile) {
    return <Fragment>{
    	props.children
    }</Fragment>;
  } else {
    return null;
  }
}

export default Hidden;