import React from 'react'
import { useRef } from 'react'
import cls from './Header.module.css'

function HeaderContent() {
	const unputSerch = useRef('*')
	return (
		<div className={cls.block}>
			<div className={cls.blockSearch}>
				<input placeholder='search' className={cls.blockSearchInput} ref={unputSerch} />
			</div>
		</div>
	)
}

export default HeaderContent