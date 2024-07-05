import React, { useEffect, useState } from 'react'
import request from '../../services/axios';


function Category() {
    const [categories, setCategories ] = useState([]);
    useEffect(() => {
        request.get('/category').then((data) => setCategories(data.data))
   }, [])
  return (
    <div>
        <h1>{categories.map((category) => (category.name))}</h1>

    </div>
  )
}

export default Category