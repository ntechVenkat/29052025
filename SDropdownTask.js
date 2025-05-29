import React, { useState } from "react";

const ConditionalDropDown = () => {
  const [regionDetails, setRegionDetails] = useState({
    country: "india",
    state: "andhraPradesh",
  });
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setRegionDetails({ ...regionDetails, [name]: value });
  };
  console.log(regionDetails);

  let states;
  let districts;
  if (regionDetails.country === "india") {
    states = (
      <>
        <option value="andhraPradesh">Andhra Pradesh</option>
        <option value="telangana">Telangana</option>
        <option value="maharashtra">Maharashtra</option>
      </>
    );
    if (regionDetails.state === "andhraPradesh") {
      districts = (
        <>
          <option value="guntur">Guntur</option>
          <option value="vizag">Vizag</option>
          <option value="tirupathi">Tirupathi</option>
        </>
      );
    } else if (regionDetails.state === "telangana") {
      districts = (
        <>
          <option value="hyderabad">Hyderabad</option>
          <option value="warangal">Warangal</option>
          <option value="karimnagar">Karimnagar</option>
        </>
      );
    } else {
      districts = (
        <>
          <option value="mumbai">Mumbai</option>
          <option value="pune">Pune</option>
          <option value="bangalore">Bangalore</option>
        </>
      );
    }
  } else if (regionDetails.country === "unitedStates") {
    states = (
      <>
        <option value="california">California</option>
        <option value="texas">Texas</option>
        <option value="hawaii">Hawaii</option>
      </>
    );
    if (regionDetails.state === "california") {
      districts = (
        <>
          <option value="redding">Redding</option>
          <option value="eureka">Eureka</option>
          <option value="sausalito">Sausalito</option>
        </>
      );
    } else if (regionDetails.state === "texas") {
      districts = (
        <>
          <option value="dallas">Dallas</option>
          <option value="austin">Austin</option>
          <option value="sanAntonio">San Antonio</option>
        </>
      );
    } else {
      districts = (
        <>
          <option value="honolulu">Honolulu</option>
          <option value="kona">Kona</option>
          <option value="hilo">Hilo</option>
        </>
      );
    }
  } else {
    states = (
      <>
        <option value="turonto">Turonto</option>
        <option value="quebec">Quebec</option>
        <option value="alberta">Alberta</option>
      </>
    );
    if (regionDetails.state === "turonto") {
      districts = (
        <>
          <option value="distillery">Distillery</option>
          <option value="westQueenWest">West Queen West</option>
          <option value="kensingtonMarket">Kensington Market</option>
        </>
      );
    } else if (regionDetails.state === "quebec") {
      districts = (
        <>
          <option value="saintRoch">Saint Roch</option>
          <option value="montreal">Montreal</option>
          <option value="placeRoyale">Place Royale</option>
        </>
      );
    } else {
      districts = (
        <>
          <option value="battleRiver">Battle River</option>
          <option value="foothillsMetis">Foothill Metis</option>
          <option value="medicineHats">Medicine Hat's</option>
        </>
      );
    }
  }

  return (
    <div className="m-3">
      <h1 className="text-primary">Conditional Dropdown Application</h1>
      <label>Country : </label>
      <select
        name="country"
        className="m-2"
        value={regionDetails.country}
        onChange={changeHandler}
      >
        <option value="india">India</option>
        <option value="unitedStates">United States</option>
        <option value="Canada">Canada</option>
      </select>
      <br />
      <label>State : </label>
      <select
        name="state"
        className="m-2"
        value={regionDetails.state}
        onChange={changeHandler}
      >
        {states}
      </select>
      <br />
      <label>District : </label>
      <select name="district" className="m-2">
        {districts}
      </select>
    </div>
  );
};
export default ConditionalDropDown;
