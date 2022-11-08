import React, { useState } from 'react'
import CardList from '../CardList/CardList'
import CardItem from '../CardItem/CardItem'
import ModalAdd from '../ModalAdd/ModalAdd'
import cls from './CardCategory.module.css'

function CardCategory() {
	const [booleanOpenModal, setBooleanOpenModal] = useState(false)
	const openModal = (openModal) => { setBooleanOpenModal(openModal) }
	const [taskList, setTaskList] = useState([])
	const [inProgress, setInProgress] = useState([])
	const [inTesting, setInTesting] = useState([])
	const [completed, setCompleted] = useState([])

	const [taskListShow, setTaskListShow] = useState(true)
	const [inProgressShow, setInProgressShow] = useState(false)
	const [inTestingShow, setInTestingShow] = useState(false)
	const [completedShow, setCompletedShow] = useState(false)

	const changeShow = (value) => {
		if (value == 1) {
			setTaskListShow(true)
			setInProgressShow(false)
			setInTestingShow(false)
			setCompletedShow(false)
		} else if (value == 2) {
			setTaskListShow(false)
			setInProgressShow(true)
			setInTestingShow(false)
			setCompletedShow(false)
		}
		else if (value == 3) {
			setTaskListShow(false)
			setInProgressShow(false)
			setInTestingShow(true)
			setCompletedShow(false)
		} else if (value == 4) {
			setTaskListShow(false)
			setInProgressShow(false)
			setInTestingShow(false)
			setCompletedShow(true)
		}
	}
	function addCardListTask(value) {
		setTaskList([...taskList, value])
	}

	function transferCard(props, cardList, setCardList) {
		setCardList([...cardList, props])
	}

	function removeCard(removeCard, cardList, setCardList) {
		console.log(removeCard);
		console.log(cardList);

		setCardList(cardList.filter(element => element.id_card !== removeCard.id_card))
	}

	return (
		<div className={cls.CardCategory}>
			<CardList
				openModal={openModal}
				title="task list"
				add={true}
				changeShow={changeShow}
				listShow={taskListShow}
				id={1}
			>
				{taskList.map((el, index) =>
					<CardItem
						key={index}
						id_card={el.id_card}
						priority={el.priority}
						header={el.header}
						description={el.description}

						cardList={taskList}
						setCardList={setTaskList}
						nextCardList={inProgress}
						setNextCardList={setInProgress}
						backCardList={completed}
						setBackCardList={setCompleted}
						removeCard={removeCard}
						transferCard={transferCard}
					/>)}
			</CardList>
			<CardList
				title="in progress"
				add={false}
				changeShow={changeShow}
				listShow={inProgressShow}
				setListShow={setInProgressShow}
				id={2}
			>
				{inProgress.map((el, index) =>
					<CardItem
						key={index}
						id_card={el.id_card}
						priority={el.priority}
						header={el.header}
						description={el.description}

						cardList={inProgress}
						setCardList={setInProgress}
						nextCardList={inTesting}
						setNextCardList={setInTesting}
						backCardList={taskList}
						setBackCardList={setTaskList}
						removeCard={removeCard}
						transferCard={transferCard}
					/>)}
			</CardList>
			<CardList
				title="in testing"
				add={false}
				changeShow={changeShow}
				listShow={inTestingShow}
				id={3}
			>
				{inTesting.map((el, index) =>
					<CardItem
						key={index}
						id_card={el.id_card}
						priority={el.priority}
						header={el.header}
						description={el.description}

						cardList={inTesting}
						setCardList={setInTesting}
						nextCardList={completed}
						setNextCardList={setCompleted}
						backCardList={inProgress}
						setBackCardList={setInProgress}
						removeCard={removeCard}
						transferCard={transferCard}
					/>)}
			</CardList>
			<CardList
				title="completed"
				add={false}
				changeShow={changeShow}
				listShow={completedShow}
				id={4}
			>
				{completed.map((el, index) =>
					<CardItem
						key={index}
						id_card={el.id_card}
						priority={el.priority}
						header={el.header}
						description={el.description}

						cardList={completed}
						setCardList={setCompleted}
						nextCardList={taskList}
						setNextCardList={setTaskList}
						backCardList={inTesting}
						setBackCardList={setInTesting}
						removeCard={removeCard}
						transferCard={transferCard}
					/>)}
			</CardList>
			<ModalAdd booleanOpenModal={booleanOpenModal} addCardListTask={addCardListTask} setBooleanOpenModal={setBooleanOpenModal} />
		</div>
	)


}

export default CardCategory