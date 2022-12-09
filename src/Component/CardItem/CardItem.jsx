import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import CheckboxChange from '../UI/Checkbox.jsx'
import cls from './CardItem.module.css'
import './PriorityCard.css'

const transferTools = (paramsTools, transferBackTheTable, transferAcrossTheTable) => {
	switch (paramsTools) {
		case 'all':
			return (
				<div className={cls.CardItemTransfer}>
					<div className={cls.pref}>
						<span className={cls.CardItem__btn} onClick={transferBackTheTable}>&lt;</span>
					</div>
					<div className={cls.next}>
						<span className={cls.CardItem__btn} onClick={transferAcrossTheTable}>&gt;</span>
					</div>
				</div>
			)

			break;
		case 'pref':
			return (
				<div className={cls.CardItemTransfer}>
					<div className={cls.pref}>
						<span className={cls.CardItem__btn} onClick={transferBackTheTable}>&lt;</span>
					</div>
				</div>
			)
			break;
		case 'next':
			return (
				<div className={cls.CardItemTransfer}>
					<div className={cls.next}>
						<span className={cls.CardItem__btn} onClick={transferAcrossTheTable}>&gt;</span>
					</div>
				</div>
			)
			break;

		default:

			break;
	}
}

function CardItem({ transferParams, cardList, setCardList, nextCardList, setNextCardList, backCardList, setBackCardList, transferCard, removeCard, editCard, ...props }) {
	const [favourites, setFavourites] = useState(props.favourites)
	const style = [cls.CardItemPriority]
	const styleHeader = [cls.CardItemHeaderText];
	//назвачение приоритетности карточки
	const EffectStyle = () => {
		if (props.priority == 'normal') {
			style.push(cls.PriorityNormal)
		}
		if (props.priority == 'high') {
			style.push(cls.PriorityHigh)
		}
		if (props.priority == 'urgent') {
			style.push(cls.PriorityUrgent)
		}
		if (props.priority == 'instant') {
			style.push(cls.PriorityInstant)
		}

	}
	useEffect(() => {
		EffectStyle();
	}, [props])
	//добавление бегущей строчки
	if (props.header.length > 17) {
		styleHeader.push(cls.active)
	}
	//перенос карточки вперед
	function transferAcrossTheTable() {
		removeCard(props, cardList, setCardList)
		transferCard(props, nextCardList, setNextCardList, favourites)
	}
	//перенос карточки назад
	function transferBackTheTable() {
		removeCard(props, cardList, setCardList)
		transferCard(props, backCardList, setBackCardList, favourites)
	}
	//редактирование карточки
	function editCardAssembly() {
		editCard({ props, cardList, setCardList });
	}
	// удаление карточки
	function deleteCard() {
		removeCard(props, cardList, setCardList)
	}
	return (
		<div className={cls.CardItem}>
			<div className={cls.CardItemContent}>
				<div className={cls.CardItemHeader}>
					<div className={cls.CardItemHeaderContent}>
						<div className={cls.CardItemCheck}>
							<CheckboxChange favourites={favourites} setFavourites={setFavourites} />
						</div>
						<div className={cls.CardItemHeader}>
							<p className={styleHeader.join(' ')}>{props.header}</p>
						</div>
					</div>
					<div className={cls.CardItemTools}>
						<div className={cls.CardItemEdit}>
							<span className={cls.CardItem__btn} onClick={() => editCardAssembly()}>...</span>
						</div>
						<div className="">
							<span className={cls.CardItem__btn} onClick={() => deleteCard()}>&#215;</span>
						</div>
					</div>
				</div>
				<div className={cls.CardItemDescription}>
					<p>{props.description}</p>
				</div>
				<div className={cls.CardItemBottom}>
					<div className={cls.CardItemPriority + " " + props.priority}>
						{props.priority}
					</div>
					{transferTools(transferParams, transferBackTheTable, transferAcrossTheTable)}

				</div>
			</div>
		</div>

	)
}

export default CardItem