import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import request from "../../services/axios";
import './Ask.css'


function Ask() {
  const { id } = useParams();
  const [asks, setAsks] = useState([]);
    const [count, setCount] = useState(0);
	 const [quest, setQuest] = useState(0);
console.log(asks);
  useEffect(() => {
    request.get(`/ask/${id}`).then((response) => setAsks(response.data));
  }, []);

//   const handleNextClick = () => {
//     setCount((prev) => prev + 1);
//   }

  return (
    <div>
      <h2>Вопрос</h2>
      <div className="block">
        <img src={asks[quest]?.image}/> 
        <p>{asks[quest]?.question}</p>
		  <input type="text" />
      </div>
      <button onClick={()=>setQuest((prev)=>prev + 1)}>Далее
        {/* <Link to={`/ask/${+id + 1}`}>Далее</Link> */}
        </button>
    </div>
  );
}

export default Ask;
