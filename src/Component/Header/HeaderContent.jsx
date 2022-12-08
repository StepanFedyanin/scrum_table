import React from 'react'
import { useRef } from 'react'
import cls from './Header.module.css'

function HeaderContent({ setSerchValue }) {
	return (
		<div className={cls.block}>
			<div className={cls.blockSearch}>
				<input placeholder='search' className={cls.blockSearchInput} onChange={(e) => setSerchValue(e.target.value)} />
			</div>
		</div>
	)
}

export default HeaderContent