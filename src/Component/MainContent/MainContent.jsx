import React, { useEffect, useState } from 'react';
import cls from './MainContent.module.css';
import CardList from '../CardList/CardList'
import CardItem from '../CardItem/CardItem'
import ModalAdd from '../ModalAdd/ModalAdd'
import SaveFavourit from '../../Utility/SaveFavourit';
function MainContent({ taskList, inProgress, inTesting, completed, setTaskList, setInProgress, setInTesting, setCompleted }) {
	//для открытия модального окна
	const [booleanOpenModal, setBooleanOpenModal] = useState(false)
	const [booleanEditModal, setBooleanEditModal] = useState(false)
	//state для адаптива
	const [taskListShow, setTaskListShow] = useState(false)
	const [inProgressShow, setInProgressShow] = useState(false)
	const [inTestingShow, setInTestingShow] = useState(false)
	const [completedShow, setCompletedShow] = useState(false)
	// state для редактирования
	const [editObj, setEditObj] = useState({})
	useEffect(() => {
		if (window.innerWidth < 768) {
			setTaskListShow(true)
		}
	}, [])
	window.addEventListener('resize', () => {
		// window.innerWidth < 768 &&
		if (window.innerWidth < 768 && window.innerWidth > 750) {
			// console.log(taskListShow);
			changeShow(1)
		} else if (window.innerWidth > 768) {
			changeShow(5)
		}
	});
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
		} else if (value == 5) {
			setTaskListShow(false)
			setInProgressShow(false)
			setInTestingShow(false)
			setCompletedShow(false)
		}
	}
	const openModal = (openModal) => {
		setBooleanOpenModal(openModal)
	}
	function addCardListTask(value) {
		setTaskList([...taskList, value])
	}

	function transferCard(props, cardList, setCardList, favourites) {
		setCardList([...cardList, SaveFavourit(favourites, props)])
	}
	function newEditCard(list, setList, newobj) {
		let indexEditedCard = list.findIndex(card => card.id_card == newobj.id_card)
		let newList = list;
		newList.splice(indexEditedCard, 1, newobj);
		setBooleanOpenModal(false);
		setBooleanEditModal(false)
	}
	function editCardModalShow(value) {
		setEditObj(value);
		setBooleanEditModal(true)
		setBooleanOpenModal(true);
	}
	function removeCard(removeCard, cardList, setCardList) {
		setCardList(cardList.filter(element => element.id_card !== removeCard.id_card))
	}
	return (
		<div className={cls.MainContent}>
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
							favourites={el.favourites}
							transferParams="next"
							cardList={taskList}
							setCardList={setTaskList}
							nextCardList={inProgress}
							setNextCardList={setInProgress}
							removeCard={removeCard}
							transferCard={transferCard}
							editCard={editCardModalShow}
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
							favourites={el.favourites}

							transferParams="all"
							cardList={inProgress}
							setCardList={setInProgress}
							nextCardList={inTesting}
							setNextCardList={setInTesting}
							backCardList={taskList}
							setBackCardList={setTaskList}
							removeCard={removeCard}
							transferCard={transferCard}
							editCard={editCardModalShow}
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
							favourites={el.favourites}

							transferParams="all"
							cardList={inTesting}
							setCardList={setInTesting}
							nextCardList={completed}
							setNextCardList={setCompleted}
							backCardList={inProgress}
							setBackCardList={setInProgress}
							removeCard={removeCard}
							transferCard={transferCard}
							editCard={editCardModalShow}
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
							favourites={el.favourites}

							transferParams="pref"
							cardList={completed}
							setCardList={setCompleted}
							nextCardList={taskList}
							setNextCardList={setTaskList}
							backCardList={inTesting}
							setBackCardList={setInTesting}
							removeCard={removeCard}
							transferCard={transferCard}
							editCard={editCardModalShow}
						/>)}
				</CardList>
				<ModalAdd
					booleanOpenModal={booleanOpenModal}
					addCardListTask={addCardListTask}
					setBooleanOpenModal={setBooleanOpenModal}
					booleanEditModal={booleanEditModal}
					setBooleanEditModal={setBooleanEditModal}
					editObj={editObj}
					editCard={newEditCard}
				/>
			</div>
		</div>
	)

}

export default MainContent