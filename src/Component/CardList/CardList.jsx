import React from 'react'
import { useState } from 'react'
import cls from './CardList.module.css'


function CardList({ children, openModal, add, title, listShow, setListShow, changeShow, id }) {
	const addCardModule = () => { openModal(true) }
	return (
		<div className={cls.block}>
			<div className={cls.blockHeader} onClick={() => changeShow(id)}>
				{title}
			</div>
			<div className={listShow ? cls.listContentShow : cls.listContent}>
				<div className={cls.listContentItems}>
					{
						children
					}
				</div>
				{
					add ?
						<div className={cls.blockHeaderAdd} onClick={addCardModule}>
							<button>+ add task</button>
						</div>
						:
						""
				}
			</div>

		</div>
	)
}

export default CardList