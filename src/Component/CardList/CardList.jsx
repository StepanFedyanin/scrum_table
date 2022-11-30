import React from 'react'
import { useState } from 'react'
import cls from './CardList.module.css'


function CardList({ children, openModal, add, title, listShow, changeShow, id }) {
	const addCardModule = () => { openModal(true) }
	const innerWidth = () => {
		if (window.innerWidth < 768) {
			changeShow(id)
		}
	}
	return (
		<div className={cls.block}>
			<div className={cls.blockHeader} onClick={innerWidth}>
				<div className="">
					<p className={cls.blockHeaderTitle}>{title}</p>
				</div>
				{
					add ?
						<div className={cls.blockHeaderAdd} onClick={addCardModule}>
							<button>+ add task</button>
						</div>
						: ''
				}
			</div>
			<div className={listShow ? cls.listContentShow : cls.listContent}>
				<div className={cls.listContentItems}>
					{
						children
					}
				</div>
			</div>

		</div>
	)
}

export default CardList