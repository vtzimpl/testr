import React from 'react';



function Address(props) {
  return (
    <div className="Address">
        <h2>
         Διεύθυνση: Οδός {props.street}, Αρ. {props.number}, Πόλη {props.city}
        </h2>
    </div>
  );
}

export default Address;
