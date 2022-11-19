import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import CheckboxChange from '../UI/Checkbox.jsx'
import cls from './CardItem.module.css'
function CardItem({ backBoolean, cardList, setCardList, nextCardList, setNextCardList, backCardList, setBackCardList, transferCard, removeCard, ...props }) {
	const [favourites, setFavourites] = useState(props.favourites)
	const style = [cls.CardItemPriority]
	const styleHeader = [cls.CardItemHeaderText];
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
	// console.log(props.header.length);
	if (props.header.length > 20) {
		styleHeader.push(cls.active)
	}
	function transferAcrossTheTable() {
		removeCard(props, cardList, setCardList)
		transferCard(props, nextCardList, setNextCardList, favourites)
	}
	function transferBackTheTable() {
		removeCard(props, cardList, setCardList)
		transferCard(props, backCardList, setBackCardList, favourites)
	}
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
					<div className={cls.CardItemRemove}>
						<span onClick={deleteCard}>&#215;</span>
					</div>
				</div>
				<div className={cls.CardItemDescription}>
					<p>{props.description}</p>
				</div>
				<div className={cls.CardItemBottom}>
					<div className={style.join(' ')}>
						{props.priority}
					</div>
					{
						backBoolean ?
							<div className={cls.CardItemTransfer}>
								<div className={cls.pref}>
									<span onClick={transferBackTheTable}>&lt;</span>
								</div>
								<div className={cls.next}>
									<span onClick={transferAcrossTheTable}>&gt;</span>
								</div>
							</div> :
							<div className={cls.CardItemTransfer}>
								<div className={cls.next}>
									<span onClick={transferAcrossTheTable}>&gt;</span>
								</div>
							</div>
					}

				</div>
			</div>
		</div>

	)
}

export default CardItem