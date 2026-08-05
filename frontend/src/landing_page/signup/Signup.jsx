import OpenAccount from "../OpenAccount";
import Auth from "./Auth";

export default function Hero() {
  return (
    <div className="container">
      <div className="text-center m">
        <h1 className="mt-5 pt-5" style={{ fontSize: "1.6em" }}>
          Open a free demat and trading account online
        </h1>
        <h3 className="mt-4 text-muted" style={{ fontSize: "1.2em" }}>
          Start investing brokerage free and join a community of 1.6+ crore
          investors and traders
        </h3>
      </div>

      <div className="row">
        <div className="col-6 p-5">
          <img src="media/images/signup.png" alt="Signup Image" />
        </div>
        <div className="col-2"></div>
        <div className="col-4 p-5">
          <Auth/>
        </div>
      </div>

      <div className="row text-center">
        <h3 className="mt-5" style={{fontSize: "1.6em"}}>Already have a demat account?</h3>
        <h3 className="text-muted mt-4" style={{fontSize: "1.2em", fontWeight:"normal"}}>Move your holdings to Zerodha and we'll cover your transfer costs, up to ₹500, learn more.</h3>
      </div>
       <OpenAccount/>
    </div>
  );
}
