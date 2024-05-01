import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminAdd = () => {
    const navigate = useNavigate();
    const [Tiles, setTiles] = useState({
        tname: "",
        tsize: "",
        tquantityperbox: "",
        tpriceperbox: "",
        tcatagory: "",
        timage: "",
        tdescription: ""
    });

    const categories = ["Wall Tiles", "Parking Tiles", "GVT", "Porcelain Tiles"];


    return (
        <div className="container vh-100 d-flex justify-content-center align-items-center" style={{ marginTop: '120px' }}>
            <div className="card p-4 shadow">
                <h2 className="text-center mb-4">Add Product</h2>
                <div className="mb-3">
                    <label htmlFor="tname" className="form-label">Tile Name</label>
                    <input
                        type="text"
                        id="tname"
                        className="form-control"
                        name="tname"
                        value={Tiles.tname}
                        onChange={(e) => setTiles({ ...Tiles, tname: e.target.value })}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="tsize" className="form-label">Tile Size</label>
                    <input
                        type="text"
                        id="tsize"
                        className="form-control"
                        name="tsize"
                        value={Tiles.tsize}
                        onChange={(e) => setTiles({ ...Tiles, tsize: e.target.value })}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="tquantityperbox" className="form-label">Tile Quantity</label>
                    <input
                        type="text"
                        id="tquantityperbox"
                        className="form-control"
                        name="tquantityperbox"
                        value={Tiles.tquantityperbox}
                        onChange={(e) => setTiles({ ...Tiles, tquantityperbox: e.target.value })}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="tpriceperbox" className="form-label">Tile Price</label>
                    <input
                        type="text"
                        id="tpriceperbox"
                        className="form-control"
                        name="tpriceperbox"
                        value={Tiles.tpriceperbox}
                        onChange={(e) => setTiles({ ...Tiles, tpriceperbox: e.target.value })}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="tcatagory" className="form-label">Tile catagory</label>
                    <select
                        id="tcatagory"
                        className="form-control"
                        value={Tiles.tcatagory}
                        onChange={(e) => setTiles({ ...Tiles, tcatagory: e.target.value })}
                    >
                        <option value="">Select catagory</option>
                        {categories.map((catagory, index) => (
                            <option key={index} value={catagory}>{catagory}</option>
                        ))}
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="timage" className="form-label">Tile Image</label>
                    <input
                        type="text"
                        id="timage"
                        className="form-control"
                        name="timage"
                        value={Tiles.timage}
                        onChange={(e) => setTiles({ ...Tiles, timage: e.target.value })}
                    />
                </div>


                <div className="mb-3">
                    <label htmlFor="tdescription" className="form-label">Tile Description</label>
                    <input
                        type="text"
                        id="tdescription"
                        className="form-control"
                        name="tdescription"
                        value={Tiles.tdescription}
                        onChange={(e) => setTiles({ ...Tiles, tdescription: e.target.value })}
                    />
                </div>
                <button
                    type="button"
                    className="btn btn-success"
                    onClick={() => {
                        fetch("http://localhost:3003/product", {
                            method: "POST",
                            body: JSON.stringify(Tiles),
                            headers: {
                                "Content-Type": "application/json"
                            }
                        })
                            .then((res) => {
                                setTiles(Tiles);
                                navigate("/adminlogin/admindisplay");
                            });
                    }}
                    style={{ marginTop: '10px' }}
                >
                    Add & Submit
                </button>
            </div>
        </div>
    );
};

export default AdminAdd;
