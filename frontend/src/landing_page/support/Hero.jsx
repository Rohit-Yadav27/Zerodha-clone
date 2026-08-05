export default function Hero(){
    return(
        <section className="container-fluid" id="supportHero">
            <div className="" id="supportWrapper">
                <h4 className="mt-5">Support Portal</h4>
                <a href="" className="mt-5">Track Tickets</a>
            </div>
            <div className="row p-5 m-5">
                <div className="col-6 p-5">
                    <h3 className="fs-4 mb-3">Search for an answer or browse help topics to create a topic</h3>
                    <input placeholder="Eg: how do i activate F&O , why is my order getting rejected" className="mb-3"/><br/>
                    <a href="" className="fw-normal">Track account opening</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="" className="fw-normal">Track segment activation</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="" className="fw-normal">Intraday</a> &nbsp;
                    <a href="" className="fw-normal">margins</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                    <a href="" className="fw-normal">Kite User manual</a>
                </div>
                <div className="col-6 p-5 ">
                    <h4>Featuere</h4>
                    <ol>
                        <a href=""><li className="mb-2 fw-normal">Current Takeovers and Delisting-January-2024</li></a>
                        <a href=""><li className="fw-normal">Latset Intraday Leverages-MIS & CO</li></a>
                    </ol>
                </div>
            </div>
        </section>
    )
}