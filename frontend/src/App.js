import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CusConstruction from "./components/CusConstruction";
import Construction from "./components/Construction";
import CusOrder from "./components/CusOrder";
import AdminOrders from "./components/AdminOrders";
import Orders from "./components/Orders";
import Nav from "./components/nav";
import Footer from "./components/footer";
import ConstructionForm from "./components/ConstructionForm";
import ButterToast, { POS_RIGHT, POS_TOP } from "butter-toast";
import SiteForm from "./components/SiteForm.js";
import SiteDisplay from "./components/SiteDisplay.js";
import ConstructionHome from "./components/ConstructionHome";

function App() {
  return (
    <Router>
      <div
        className="App"
        style={{
          
          backgroundRepeat: "repeat",
          backgroundSize: "cover",
          height: "100%",
        }}>
        <Nav />
        <Switch>
          <Route path="/cus_construction" component={CusConstruction}></Route>
          <Route path="/construction" component={Construction}></Route>
          <Route path="/cusOrder" component={CusOrder}></Route>
          <Route path="/adminOrders" component={AdminOrders}></Route>
          <Route path="/form" component={ConstructionForm}></Route>
          <Route path="/siteForm" component={SiteForm}></Route>
          <Route path="/siteDisplay" component={SiteDisplay}></Route>
          <Route path="/" component={ConstructionHome}></Route>
        </Switch>
        <ButterToast position={{ vertical: POS_TOP, horizontal: POS_RIGHT }} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
