import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function TileInfo() {
  let params = useParams();

  const [tile, setTile] = useState({
    tname: "",
    tsize: "",
    tquantityperbox: "",
    tpriceperbox: "",
    tcatagory: "",
    timage: "",
    tdescription: ""
  });

  useEffect(() => {
    fetch(`http://localhost:3003/product/${params.id}`, {
      method: "GET"
    })
      .then((res) => res.json())
      .then((res) => {
        setTile(res);
      })
      .catch((error) => console.error("Error fetching tile data:", error));
  }, [params.id]);

  return (
    <div className="container mt-5" style={{ marginTop: "120", marginLeft: "500", justifyContent: "center" }}>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <h1 className="card-header">Product Information</h1>
            <div className="card-body">
              <div className="text-center mb-4" style={{ marginTop: "50", marginLeft: "-400" }}>
                <img
                  src={tile.timage}
                  alt="Tile"
                  style={{ maxWidth: "100%", maxHeight: "400px", border: "1px solid #ccc", boxShadow: "0px 0px 10px 0px #ccc", borderRadius: "10px", marginBottom: "50px" }}
                />
              </div>
              <div className="mb-3">
                <p><strong>Tile Name:</strong> {tile.tname}</p>
              </div>
              <div className="mb-3">
                <p><strong>Tile Size:</strong> {tile.tsize}</p>
              </div>
              <div className="mb-3">
                <p><strong>Tile Quantity:</strong> {tile.tquantityperbox}</p>
              </div>
              <div className="mb-3">
                <p><strong>Box Price:</strong> {tile.tpriceperbox}</p>
              </div>
              <div className="mb-3">
                <p><strong>Tile Category:</strong> {tile.tcatagory}</p>
              </div>
              <div className="mb-3">
                <p><strong>Tile Description:</strong> {tile.tdescription}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TileInfo;
