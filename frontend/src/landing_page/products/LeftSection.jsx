export default function LeftSection({
    imageUrl,
    productName,
    productDescription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore,
}) {
  return (
    <div className="container">
      <div className="row p-5 mt-5">
        <div className="col-6 p-2 mt-5">
          <img src={imageUrl}/>
        </div>
        <div className="col-1"></div>
        <div className="col-4 mt-5 text-muted">
          <h1 className="fs-3 mt-3">{productName}</h1>
          <p className="mt-3" style={{lineHeight:"1.8",fontSize:"1.2em"}}>
            {productDescription}
          </p>
          <div>
            <a href={tryDemo} className="">Try Dmeo<i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            <a href={learnMore} className=" mx-5">Learn More<i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
          </div>
          <div className="mt-3">
          <a href={googlePlay}><img src="/media/images/googlePlayBadge.svg" className=""/></a>
          <a href={appStore}><img src="/media/images/appstoreBadge.svg" className=" mx-3"/></a>
          </div>
        </div>
      </div>
    </div>
  );
}
