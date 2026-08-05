import Apps from "./Apps";
import Orders from "./Orders";
import Holdings from "./Holdings";
import { Route, Routes } from "react-router-dom";
import Funds from "./Funds";
import WatchList from "./WatchList";
import Positions from "./Positions";
import Summary from "./Summary";
import {GeneralContextProvider} from "./GeneralContext";

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>
      <div className="content">
        <Routes>
          <Route path="/" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<Apps />} />
        </Routes>
      </div>
    </div>
  );
}
