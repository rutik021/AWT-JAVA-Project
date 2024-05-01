import { useEffect, useState } from "react";
import AdminCard from "./AdminCard";
import { Link } from "react-router-dom";
import AOS from "aos";
import 'aos/dist/aos.css';
const AdminDisplay = () => {
  
  const [mainProduct, setMainProduct] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    callAPI();
  }, []);
  useEffect(()=>{
    AOS.init({duration:1000});
  })
  const callAPI = async () => {
    const data = await fetch('http://localhost:3003/products');
    const json = await data.json();
    setMainProduct(json);
    setFilteredRestaurant(json);
  };

  return (
    <>
      <div>
         <div className="sidebar">
          <ul className="sidebar-list">
            <li className="row" onClick={() => setFilteredRestaurant(mainProduct)}>
              <div>All products</div>
            </li>
            <li className="row" onClick={() => setFilteredRestaurant(mainProduct.filter((tile) => tile.tcatagory === "Wall Tiles"))}>
              <div>Wall Tiles</div>
            </li>
            <li className="row" onClick={() => setFilteredRestaurant(mainProduct.filter((tile) => tile.tcatagory === "Parking Tiles"))}>
              <div>Parking Tiles</div>
            </li>
            <li className="row" onClick={() => setFilteredRestaurant(mainProduct.filter((tile) => tile.tcatagory === "GVT"))}>
              <div>GVT</div>
            </li>
            <li className="row" onClick={() => setFilteredRestaurant(mainProduct.filter((tile) => tile.tcatagory === "Porceline Tiles"))}>
              <div>Porceline Tiles</div>
            </li>
            <li className="row">
              <div><Link to='/product/adminadd' className="btn btn-success">add product</Link></div>
            </li>
          </ul>
        </div> 
        <div className="card-list"  data-aos="zoom-in">
          {filteredRestaurant.map((card) => (
            <AdminCard key={card._id} tilesMainData={card}  />
          ))}
        </div>
      </div>
    </>
  );
};

export default AdminDisplay;

