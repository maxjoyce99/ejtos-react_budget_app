import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import { DropdownItem } from 'react-bootstrap';
import { useState } from 'react';

const CurrencyDropdown = () => {
  const {dispatch} = useContext(AppContext);
  const [currentCurrency, setCurrentCurrency] = useState("$");

  const changeCurrency = (value) => {
    console.log("Change currency to " + value + ".");
    setCurrentCurrency(value);
    dispatch({
      type: 'CHG_CURRENCY',
      payload: value
    })
  };

  const dropdownItemStyle = {
    backgroundColor: 'green',
    color: 'white',
    
  };

  const dropdownItemHoverStyle = {
    backgroundColor: 'white',
    color: 'black',
  };

   
    return (
    <Dropdown onSelect={changeCurrency}>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Currency ({currentCurrency})
      </Dropdown.Toggle>

      <Dropdown.Menu background-color = 'green' color="white">
        <Dropdown.Item eventKey="$" style={dropdownItemStyle} onMouseEnter={(e) => e.target.style = dropdownItemHoverStyle}
          onMouseLeave={(e) => e.target.style = dropdownItemStyle}>$ Dollar</Dropdown.Item>
        <Dropdown.Item eventKey="£" style={dropdownItemStyle} onMouseEnter={(e) => e.target.style = dropdownItemHoverStyle}
          onMouseLeave={(e) => e.target.style = dropdownItemStyle}>£ Pound</Dropdown.Item>
        <Dropdown.Item eventKey="€" style={dropdownItemStyle} onMouseEnter={(e) => e.target.style = dropdownItemHoverStyle}
          onMouseLeave={(e) => e.target.style = dropdownItemStyle}>€ Euro</Dropdown.Item>
        <Dropdown.Item eventKey="₹" style={dropdownItemStyle} onMouseEnter={(e) => e.target.style = dropdownItemHoverStyle}
          onMouseLeave={(e) => e.target.style = dropdownItemStyle}>₹ Rupee</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    );
};
export default CurrencyDropdown;


/*<div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown button
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a className="dropdown-item" href="#">Action</a>
    <a className="dropdown-item" href="#">Another action</a>
    <a className="dropdown-item" href="#">Something else here</a>
  </div>
</div>*/


/*<div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Currency Change
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a className="dropdown-item" value="$" href="#">$ Dollar</a>
    <a className="dropdown-item" value="£" href="#">£ Pound</a>
    <a className="dropdown-item" value="€" href="#">€ Euro</a>
    <a className="dropdown-item" value="₹" href="#">₹ Rupee</a>
  </div>
</div>*/
