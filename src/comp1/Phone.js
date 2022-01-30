import React from 'react';


function Phone(props) {
  return (
    <div className="Phone">
         <h2>
        Τηλέφωνο : +{props.countrycode}-{props.number}
        </h2>
     </div>
  );
}

export default Phone;
