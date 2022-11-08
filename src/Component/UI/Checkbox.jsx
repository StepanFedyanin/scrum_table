import React, { useState } from 'react'
import cls from './Checkbox.module.css'

import img1 from '../../Resourses/favourites_no.png'
import img2 from '../../Resourses/favourites_yes.png'

function CheckboxChange() {
    const [checkbox, setCheckbox] = useState(false)
    const CheckboxTrue = (e) => {
        setCheckbox(true)
        console.log(e.currentTarget.getAttribute('booleancheckbox'));
    }
    const CheckboxFalse = (e) => {
        setCheckbox(false)
        console.log(e.currentTarget.getAttribute('booleancheckbox'));
    }
	return (
		<div>
			{checkbox?
                <img booleancheckbox="false" src={img2} alt="" onClick={CheckboxFalse} className={cls.img}/>:<img booleancheckbox="true" src={img1} alt="" onClick={CheckboxTrue} className={cls.img}/>    
            }
		</div>
	)
}

export default CheckboxChange