import React, { useEffect, useState } from "react";
import { ProductGetApi } from "../../../Api/AllApi";
import { useNavigate } from "react-router-dom";

const Displaycake = () => {
    const navigate = useNavigate()
  const [cakes, setCakes] = useState([]);
  const ProductGetApiCalling = async () => {
    try {
      const res = await ProductGetApi();
      console.log(res);
      
      if (res.status == 200) {
        setCakes(res.data.data);
      } else {
        setCakes([]);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(()=>{
    ProductGetApiCalling()
  },[])
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Cake Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>brandName</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
      {cakes && cakes.map((item)=>(
        <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12">
                    {item.pimage?<img
                      src={`http://localhost:5000/uploads/${item.pimage}`}
                      alt="Avatar Tailwind CSS Component"
                    />:
                       <img
                      src="/nof.jpg"
                      alt="Not Found"
                    />}
                 
                  </div>
                </div>
              </div>
            </td>
            <td>
             {item.pname}
              <br />
              
            </td>
            <td>{item.pprice}</td>
            <th>
            
              <button className="btn btn-ghost btn-xs" onClick={()=>navigate(`/admin/show-cake-details/${item._id}`)} >details</button>
            </th>
          </tr>
      ))}
          
          
        </tbody>
        {/* foot */}
        <tfoot>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th></th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Displaycake;
