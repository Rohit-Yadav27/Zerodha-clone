export default function RightSection({
  productName,
  productDescription,
  learnMore,
  imageUrl,
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col p-5 mt-5 text-muted" style={{ lineHeight: "1.8", fontSize: "1.2em" }}>
          <h1 className="fs-3 p-3 mt-5">{productName}</h1>
          <p className="mx-3">
            {productDescription}
          </p>
          <a href={learnMore} className="mx-3">
            Kite Connect  <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
        <div className="col">
          <div className="col p-3">
            <img src={imageUrl} />
          </div>
        </div>
      </div>
    </div>
  );
}
