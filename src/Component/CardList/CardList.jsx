import React from 'react'
import { useState } from 'react'
import cls from './CardList.module.css'


function CardList({ children, openModal, add, title, listShow, changeShow, id }) {
	const addCardModule = () => { openModal(true) }
	//изменение открытого листа при адаптиве
	const innerWidth = () => {
		if (window.innerWidth < 768) {
			changeShow(id)
		}
	}
	return (
		<div className={listShow ? cls.blockAdaptive : cls.block}>
			<div className={cls.blockHeader} onClick={innerWidth}>
				<div className={cls.blockHeaderRotate}>
					<p className={cls.blockHeaderTitle}>{title}</p>
				</div>
				{
					add ?
						<div className={cls.blockHeaderAddHide}>
							<div className={cls.blockHeaderAdd} onClick={addCardModule}>
								<button className={cls.blockHeaderAdd_btn}>+ add task</button>
							</div>
						</div>

						: null
				}
			</div>
			<div className={listShow ? cls.listContentShow : cls.listContent}>
				{
					add ?
						<div className={cls.blockContentAdd}>
							<div className={cls.blockHeaderAdd} onClick={addCardModule}>
								<button>+ add task</button>
							</div>
						</div>
						: null
				}
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