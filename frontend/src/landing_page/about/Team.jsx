export default function Team() {
  return (
    <div className="container">
      <div className="row text-center p-3 mt-3">
        <h2>People</h2>
      </div>
      <div className="row text-muted p-3" style={{lineHeight : "1.8", fontSize:"1.2em"}}>
        <div className="col text-center p-3">
            <img src="/media/images/nithinKamath.jpg" className="rounded-circle" style={{width:"50%"}}/>
            <h1 className="fs-5 mt-4">Nithin Kamath</h1>
            <h1 className="fs-6 mt-4">Founder, CEO</h1>
        </div>
        <div className="col p-3">
          <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the
          hurdles he faced during his decade long stint as a trader. Today,
          Zerodha has changed the landscape of the Indian broking industry.</p> <p>He
          is a member of the SEBI Secondary Market Advisory Committee (SMAC) and
          the Market Data Advisory Committee (MDAC).</p> <p>Playing basketball is his
          zen.</p> <p>Connect on <a href="">Homepage</a> / <a href="">TradingQnA</a> / <a href="">Twitter</a></p>
        </div>
      </div>
    </div>
  );
}
