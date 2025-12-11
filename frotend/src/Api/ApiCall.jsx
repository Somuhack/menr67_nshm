import React, { useEffect, useState } from "react";
import axios from "axios";
import { data } from "react-router-dom";
const ApiCall = () => {
  const [apidata, setApiData] = useState([]);

  const GetData=async()=>{
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos")
    setApiData(res.data)
  }
  const PostData=async()=>{
    const res = await axios.post("https://jsonplaceholder.typicode.com/todos",{
    title: 'Bipin Bask',
    body: 'Human body',
    userId: 1,
  })
  console.log(res);    
  }

  useEffect(() => {
    // axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
    //   console.log(res);

    //   return setApiData(res.data);

    // });
    // fetch("https://jsonplaceholder.typicode.com/todos")
    //   .then((res) => res.json())
    //   .then((jsodata) => {
    //     console.log(jsodata);

    //     return setApiData(jsodata);
    //   });
        GetData()
  }, [data]);

  return (
    <div>
      ApiCall:
      {apidata.map((item) => (
        <div key={item.id}>
          <p>id :{item.id}</p>
          <p>title :{item.title}</p>
        </div>
      ))}
      <button onClick={PostData}>Click to Post</button>
    </div>
  );
};

export default ApiCall;
