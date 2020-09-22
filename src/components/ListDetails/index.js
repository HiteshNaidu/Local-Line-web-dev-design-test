import React from "react";
import clear from "../../asset/ic_clear_black_24px.svg";
import InfoPanel from "../common/InfoPanel";
import Button from "../common/Button/index";

export default function ListDetails(prop) {
  const { business_name, province, city, customer_info } = prop.selectedData;
  const handleClear = () => {
    prop.setSelectedData(null);
  };
  let date = "N/A";
  let month = "";
  if (customer_info.last_delivery_date) {
    date = new Date(
      customer_info.last_delivery_date
    ).toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
    month = date.split(" ")[0].toUpperCase() + " ";
  }
  return (
    <div className="backdrop">
      <div className="foreground">
        <div className="row-modal">
          <div className="col-left" style={{ fontWeight: "700" }}>
            {business_name}
          </div>
          <div className="col-right">
            <button className="button-clear" onClick={handleClear}>
              <img src={clear} alt="clear" />
            </button>
          </div>
        </div>
        <div className="row-modal-label">
          <div className="col-left-label">
            <InfoPanel
              label={"LOCATION"}
              data={city + ", " + province}
            ></InfoPanel>
          </div>
          <div className="col-right-label">
            <InfoPanel label={"PHONE"} data={"(123) 456-7890"}></InfoPanel>
          </div>
        </div>
        <div className="row-modal-label">
          <div className="col-left-label">
            <InfoPanel label={"PRODUCT CATALOG"}>
              <select style={{ marginTop: "4px", color: "#a7a7a7" }}>
                <option>Select a catalog</option>
              </select>
            </InfoPanel>
          </div>
          <div className="col-right-label">
            <InfoPanel label={"LAST DELIVERY"} data={date}></InfoPanel>
          </div>
        </div>
        <div className="row-modal-label">
          <div className="col-left-label">
            <Button label="SEND CATALOG" styles="button-view"></Button>
          </div>
          <div className="col-right-label">
            <Button label="ADD NOTE" styles="button-add-note"></Button>
          </div>
        </div>
        <div className="row-modal-label">
          <div className="col-left-label">
            <InfoPanel
              label={"AVERAGE ORDER"}
              data={"$" + customer_info.buyer_average_order}
            ></InfoPanel>
          </div>
          <div className="col-right-label">
            <InfoPanel
              label={month + "ORDERS"}
              data={customer_info.orders_this_month}
            ></InfoPanel>
          </div>
        </div>
        <div
          className="row-modal-label"
          style={{ borderBottom: "2px solid #e2e2e2" }}
        >
          <div className="col-left-label">
            <InfoPanel label={month + "SALES"} data={"$0.01"}></InfoPanel>
          </div>
          <div className="col-right-label">
            <InfoPanel label={"TOTAL SALES"} data={"$0.01"}></InfoPanel>
          </div>
        </div>
      </div>
    </div>
  );
}
