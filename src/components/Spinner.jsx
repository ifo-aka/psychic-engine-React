const Spinner =()=>{
    return <div className="my5 spinner  d-flex align-items-center justify-content-center" style={{height:"100vh"}}>
    <div className="d-flex justify-content-center  text-white ">
  <div className="spinner-border" style={{width:"5rem", height: "5rem"}} role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
</div>
</div>
}
export default Spinner;