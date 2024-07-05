import React, { useEffect, useState } from 'react'
import request from '../../services/axios';
import './Category.css';
// const path = require('path');


function Category() {
	const [categories, setCategories] = useState([]);
	useEffect(() => {
		request.get('/category').then((data) => setCategories(data.data))
	}, [])
	return (
		<div>
			<h1>Выбери категорию</h1>
			<div className='card-block'>
				{categories.map((category) =>
					<a href= {`category/${category.id}`}>
						<div className='category-card'>
							<img src={category.image} alt='category-picture' />
							<div className='cat-title'>{category.name}</div>
						</div>
					</a>
				)} </div>
		</div>
	)
}

export default Category