import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";
import MaterialTable from "material-table";
import ButterToast, { Cinnamon } from "butter-toast";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import { Button, Box } from '@material-ui/core'

function CusOrder() {
  const [orders, setOrders] = useState([]);

  useEffect(() => onReload(), []);

  const onReload = () => {
    const url = "http://localhost:3500/order/"
    axios.get(url).then((response) => {
      console.log(response["data"])
      setOrders(response["data"])
    });
  };

  const columns = [
    { title: "Item Name", field: "itemName"},
    { title: "Quantity", field: "quantity" , type: "numeric"},
    { title: "Supplier", field: "supplier" },
    { title: 'Site', field: 'site' }
  ];
  return (
    <div>
      <br />
      <MaterialTable
        title="Orders Table"
        columns={columns}
        data={orders}
        style={{
          maxWidth: "80%",
          padding: "20px 5px",
          margin: "0 auto",
          fontFamily: "Arial, sans-serif",
        }}
        options={{
          filtering: true,
          sorting: true,
          actionsColumnIndex: -1,
        }}
      />
      <br />
    </div>
  );
}

export default CusOrder;
