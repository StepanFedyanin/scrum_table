import React, { useState } from 'react'
import cls from './Checkbox.module.css'

import img1 from '../../Resourses/favourites_no.png'
import img2 from '../../Resourses/favourites_yes.png'

function CheckboxChange({ favourites, setFavourites }) {
	const CheckboxTrue = (e) => {
		setFavourites(true)
	}
	const CheckboxFalse = (e) => {
		setFavourites(false)
	}
	return (
		<div>
			{favourites ?
				<img booleancheckbox="false" src={img2} alt="" onClick={CheckboxFalse} className={cls.img} />
				:
				<img booleancheckbox="true" src={img1} alt="" onClick={CheckboxTrue} className={cls.img} />
			}
		</div>
	)
}

export default CheckboxChange