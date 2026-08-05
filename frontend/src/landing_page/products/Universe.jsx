import { Link } from "react-router-dom";

export default function Universe() {
  return (
    <div className="container p-5 mt-5">
      <div className="row text-center">
        <h1 className="fs-2">The Zerodha Universe</h1>
        <p className="mt-3">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 mt-5">
          <a href="" className=""><img src="/media/images/smallcaseLogo.png" style={{width:"50%"}}/>
          <p className="text-muted mt-3 fw-normal mb-5" style={{fontSize:"13px"}}>
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
          </a>
        </div>

        <div className="col-4 mt-5">
          <a href=""><img src="/media/images/streakLogo.png" style={{ width: "40%" }} />
          <p className="text-muted mt-3 fw-normal mb-5" style={{fontSize:"13px"}}>
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p></a>
        </div>
        <div className="col-4 mt-5">
          <a href=""><img src="/media/images/sensibullLogo.svg" style={{width:"55%"}}/>
          <p className="text-muted mt-3 fw-normal mb-5" style={{fontSize:"13px"}}>
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
          </a>
        </div>
        <div className="col-4 mt-5">
         <a href=""><img
            src="/media/images/zerodhaFundhouse.png"
            style={{ width: "50%" }}
          />
          <p className="text-muted mt-3 fw-normal" style={{fontSize:"13px"}}>
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
          </a>
          </div>
        <div className="col-4 mt-5">
          <a href=""><img src="/media/images/goldenpiLogo.png" style={{width:"50%"}}/>
          <p className="text-muted mt-3 fw-normal" style={{fontSize:"13px"}}>Bonds Tranding Platform</p>
          </a>  
        </div>

        <div className="col-4 mt-5">
          <a href=""><img src="/media/images/dittoLogo.png" style={{ width: "30%" }} />
          <p className="text-muted mt-3 fw-normal" style={{fontSize:"13px"}}>
            Personalized advice on life and health insurance. No spam and no
            mis-selling. Sign up for free
          </p>
          </a> 
        </div>
        <Link to="/signup"
            className="p-2 btn btn-primary fs-5 mt-5"
            style={{ width: "20%", margin: "0 auto" }}
          >
            Sign up for free
          </Link>
      </div>
    </div>
  );
}
