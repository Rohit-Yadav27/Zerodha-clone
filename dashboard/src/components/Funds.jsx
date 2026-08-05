import { Link } from "react-router-dom";

export default function Funds() {
  return (
    <div className="funds-container">
      <div className="funds-transection">
        <p className="funds-desc">Instan, zero-cost fund transfers with UPI</p>
        <Link className="funds-add btn-green">Add funds</Link>
        <Link className="funds-withdraw btn-blue ">withdraw</Link>
      </div>
      
      <div className="fund-equity">
        <h4>Equity</h4>
        <div className="fund-list">
          <div className="fund-detail">
            <span>Available margin</span>
            <span> 4,043.10</span>
          </div>
          <div className="fund-detail">
            <span>Used margin</span>
            <span className="avail-fund"> 3,757.30</span>
          </div>
          <div className="fund-detail">
            <span>Available cash</span>
            <span className="avail-cash">4,430.10</span>
          </div>
          <hr className="funds-hr"></hr>

          <div className="fund-detail">
            <span>Opening <br></br>Balance</span>
            <span className="opening-balnc">4,043.10</span>
          </div>
          <div className="fund-detail">
            <span>Opening<br></br> Balance</span>
            <span className="opening-balnc">3736.40</span>
          </div>
          <div className="fund-detail">
            <span>Payin</span>
            <span className="fund-payin">4064.00</span>
          </div>
          <div className="fund-detail">
            <span>SPAN</span>
            <span className="fund-span">00.00</span>
          </div>
          <div className="fund-detail">
            <span>Delivery margin </span>
            <span className="fund-delivery">00.00</span>
          </div>
          <div className="fund-detail">
            <span>Exposure </span>
            <span className="fund-exposure">00.00</span>
          </div>
          <div className="fund-detail">
            <span>Options premum </span>
            <span className="fund-premum">00.00</span>
          </div>
          <hr className="funds-hr"></hr>

          <div className="fund-detail">
            <span>collateral (liquid <br></br>funds) </span>
            <span className="fund-collateral-liquid">00.00</span>
          </div>
          <div className="fund-detail">
            <span>collateral (equity) </span>
            <span className="fund-collateral-equity">00.00</span>
          </div>
          <div className="fund-detail">
            <span>Total Collateral </span>
            <span className="fund-total-collateral">00.00</span>
          </div>
        </div>
      </div>
    </div>
  );
}
