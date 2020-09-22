import React, { useState } from "react";
import Button from "../common/Button";
import ListDetails from "../ListDetails/index";
import cancel from "../../asset/ic_cancel_black_24px.svg";

export default function List(prop) {
  const [selectedData, setSelectedData] = useState(null);

  const handleClick = (data) => {
    setSelectedData(data);
  };

  return (
    <>
      <div className="list">
        <div className="list-header">MY CUSTOMERS</div>
        <ul className="list-body">
          {prop.custData.map((data, idx) => (
            <li className="row" key={idx}>
              <div className="col-left">
                {data.business_name}
                <div className="sub-item">
                  {data.city}, {data.province}
                </div>
              </div>
              <div className="col-right">
                <div style={{ display: "flex" }}>
                  <Button
                    handleClick={() => handleClick(data)}
                    setSelectedData={setSelectedData}
                    label="VIEW"
                    styles="button-view"
                  ></Button>
                  <img src={cancel} className="button-cancel" alt="cancel" />
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="list-footer">
          <Button label="<"></Button>
          <span className="page-no">1</span>
          <Button label=">"></Button>
        </div>
      </div>
      {selectedData ? (
        <ListDetails
          selectedData={selectedData}
          setSelectedData={setSelectedData}
        ></ListDetails>
      ) : (
        <></>
      )}
    </>
  );
}
