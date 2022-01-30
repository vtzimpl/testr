
import React from 'react';

function Name(props) {
  return (
    <div className="Name">
  
        <h2>
		Όνομα: {props.onoma} {props.epitheto}
        </h2>
      

    </div>
  );
}

export default Name;
