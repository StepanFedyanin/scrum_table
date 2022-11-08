import React from 'react'
import cls from './IndexHome.module.css'
import FooterContent from '../Component/Footer/FooterContent'
import HeaderContent from '../Component/Header/HeaderContent'
import MainContent from '../Component/MainContent/MainContent'
function IndexHome() {
	return (
		<div className={cls.ScrumContent}>
			<HeaderContent />
			<MainContent />
			<FooterContent />
		</div>
	)
}

export default IndexHome