export default function Summary() {
  return (
    <div className="summary-container">
      <div className="summary">
        <h3>Hi, User!</h3>
        <div className="summary-mid">
          <h3 className="summary-equaity"><i className="fa-regular fa-clock"></i>  Equity</h3>
          <h1 className="Summary-number">3.74k</h1>
          <p>Margin available</p>
        </div>
        <div className="summary-equity-right">
          <p className="summary-equity-p">Margins used <span className="summary-span">0</span></p>
          <p>Opening balance <span className="summary-span">3.74k</span></p>
        </div>
        <div className="summary-mid">
          <h3 className="summary-equaity">Holdings (13)</h3>
          <h1 className="Summary-number-last">1.55K</h1>
          <p>P&L</p>
        </div>
         <div className="summary-last-right">
          <p className="su">Current Value  <span className="summary-span">31.43k</span></p>
          <p>Opening balance <span className="summary-span">29.88k</span></p>
        </div>
      </div>
    </div>
  );
}
