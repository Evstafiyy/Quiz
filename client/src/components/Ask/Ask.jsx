import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import request from "../../services/axios";

function Ask() {
  const { id } = useParams();
  const [asks, setAsks] = useState({});
    const [count, setCount] = useState(0);

  useEffect(() => {
    request.get(`/ask/${id}`).then((response) => setAsks(response.data));
  }, []);

//   const handleNextClick = () => {
//     setCount((prev) => prev + 1);
//   }

  return (
    <div>
      <h1>Вопрос</h1>
      <div>
        <p>{asks?.image}</p>
        <p>{asks?.question}</p>
      </div>
      <button>Далее
        {/* <Link to={`/ask/${+id + 1}`}>Далее</Link> */}
        </button>
    </div>
  );
}

export default Ask;
