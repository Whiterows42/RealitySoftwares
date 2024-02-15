function FunFact({ icon, title, number }) {
  return (
    <div className="col-md-3 col-sm-6 ">
      <div
        className="funfact border p-4 d-flex flex-column gap-2 rounded-1 ba "
        style={{ backdropFilter: "blur(8px)" }}
      >
        <div className="icom w-100 ">
          <img className="text-warning " src={icon} width={100} alt="" />
        </div>
        <h1 className="fw-bold ">{number}</h1>
        <div className="info text-capitalize fw-bold ">
          <p>{title}</p>
        </div>
      </div>
    </div>
  );
}

export default FunFact;
