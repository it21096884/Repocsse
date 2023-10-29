import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";
import MaterialTable from "material-table";
import ButterToast, { Cinnamon } from "butter-toast";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import { Button, Box } from "@material-ui/core";

function SiteDisplay() {
  const [construction, setConstruction] = useState([]);

  useEffect(() => onReload(), []);

  const onReload = () => {
    const url = "http://localhost:3500/Constructions";
    axios.get(url).then((response) => {
      console.log(response["data"]);
      setConstruction(response["data"]);
    });
  };

  const validation = (
    orderNo,
    quantity,
    supplier,
    description,
    site,
    Construction_Phase,
    Location_within_Site,
    Special_Requirements
  ) => {
    console.log("bb");
    var Error = false;

    if (orderNo === "") {
      ButterToast.raise({
        content: (
          <Cinnamon.Crisp
            title="Validation Error!"
            content="OrderNo Required!"
            scheme={Cinnamon.Crisp.SCHEME_RED}
            icon={<ErrorOutlineIcon />}
          />
        ),
      });
      Error = true;
    }

    if (quantity === "") {
      ButterToast.raise({
        content: (
          <Cinnamon.Crisp
            title="Validation Error!"
            content="Quantity Required!"
            scheme={Cinnamon.Crisp.SCHEME_RED}
            icon={<ErrorOutlineIcon />}
          />
        ),
      });
      Error = true;
    }

    if (supplier === "") {
      ButterToast.raise({
        content: (
          <Cinnamon.Crisp
            title="Validation Error!"
            content="Supplier Required!"
            scheme={Cinnamon.Crisp.SCHEME_RED}
            icon={<ErrorOutlineIcon />}
          />
        ),
      });
      Error = true;
    }

    if (description === "") {
      ButterToast.raise({
        content: (
          <Cinnamon.Crisp
            title="Validation Error!"
            content="description Required!"
            scheme={Cinnamon.Crisp.SCHEME_RED}
            icon={<ErrorOutlineIcon />}
          />
        ),
      });
      Error = true;
    }

    if (site === "") {
      ButterToast.raise({
        content: (
          <Cinnamon.Crisp
            title="Validation Error!"
            content="Site Required!"
            scheme={Cinnamon.Crisp.SCHEME_RED}
            icon={<ErrorOutlineIcon />}
          />
        ),
      });
      Error = true;
    }

    if (Construction_Phase === "") {
      ButterToast.raise({
        content: (
          <Cinnamon.Crisp
            title="Validation Error!"
            content="phase Required!"
            scheme={Cinnamon.Crisp.SCHEME_RED}
            icon={<ErrorOutlineIcon />}
          />
        ),
      });
      Error = true;
    }

    if (Location_within_Site === "") {
      ButterToast.raise({
        content: (
          <Cinnamon.Crisp
            title="Validation Error!"
            content="Location Required!"
            scheme={Cinnamon.Crisp.SCHEME_RED}
            icon={<ErrorOutlineIcon />}
          />
        ),
      });
      Error = true;
    }
    if (Special_Requirements === "") {
      ButterToast.raise({
        content: (
          <Cinnamon.Crisp
            title="Validation Error!"
            content="Special_Requirements Required!"
            scheme={Cinnamon.Crisp.SCHEME_RED}
            icon={<ErrorOutlineIcon />}
          />
        ),
      });
      Error = true;
    }

    if (Error) {
      return false;
    }

    return true;
  };

  const onDelete = (id) => {
    const url = "http://localhost:3500/constructions/siteRemove/";
    axios.delete(url + id).then((res) => {
      ButterToast.raise({
        content: (
          <Cinnamon.Crisp
            title="Success!"
            content="Delete Successful!"
            scheme={Cinnamon.Crisp.SCHEME_GREEN}
            icon={<CheckCircleOutlineIcon />}
          />
        ),
      });
      onReload();
    });
  };

  const SubmitForm = async (newRow, oldRow) => {
    if (
      validation(
        newRow["orderNo"],
        newRow["quantity"],
        newRow["supplier"],
        newRow["description"],
        newRow["selectedSite"],
        newRow["constructionPhase"],
        newRow["location"],
        newRow["specialRequirements"]
      )
    ) {
      const url = "http://localhost:3500/Constructions/site/" + oldRow["_id"];
      const data = JSON.stringify({
        orderNo: newRow["orderNo"],
        quantity: newRow["quantity"],
        supplier: newRow["supplier"],
        description: newRow["description"],
        site: newRow["selectedSite"],
        constructionPhase: newRow["constructionPhase"],
        location: newRow["location"],
        specialRequirements: newRow["specialRequirements"],
      });
      console.log(data);
      await axios
        .put(url, data, {
          headers: { "Content-Type": "application/json" },
        })
        .then((res) => {
          console.log(res.data);
          onReload();
          ButterToast.raise({
            content: (
              <Cinnamon.Crisp
                title="Success!"
                content="Update Successful!"
                scheme={Cinnamon.Crisp.SCHEME_GREEN}
                icon={<CheckCircleOutlineIcon />}
              />
            ),
          });
        });
    }
  };

  const columns = [
    { title: "Order No", field: "orderNo" },
    { title: "Quantity", field: "quantity" },
    { title: "Supplier", field: "supplier" },
    { title: "Description", field: "description" },
    { title: "Construction Site", field: "selectedSite" },
    { title: "Construction Phase", field: "constructionPhase" },
    { title: "Location within Site", field: "location" },
    { title: "Special Requirements", field: "specialRequirements" },
  ];
  console.log(construction);
  return (
    <div>
      <br />
      <MaterialTable
        title="Site Allocation Table"
        columns={columns}
        data={construction}
        style={{
          maxWidth: "95%",
          padding: "50px 10px",
          margin: "0 auto",
          fontFamily: "Arial, sans-serif",
        }}
        options={{
          filtering: true,
          sorting: true,
          actionsColumnIndex: -1,
        }}
        editable={{
          onRowUpdate: (newRow, oldRow) =>
            new Promise(async (resolve, reject) => {
              SubmitForm(newRow, oldRow);
              console.log(oldRow._id);
              setTimeout(() => resolve(), 300);
            }),
          onRowDelete: (selectedRow) =>
            new Promise((resolve, reject) => {
              console.log(selectedRow);
              onDelete(selectedRow._id);
              setTimeout(() => resolve(), 300);
            }),
        }}
      />
      <br />
    </div>
  );
}

export default SiteDisplay;
