import React from 'react'
import cls from './ModalAdd.module.css'
import ChoisePriority from '../../Utility/ChoisePriority'
import WorkWithCard from '../../Utility/Add'
import { useRef } from 'react'
import { useEffect } from 'react'
function ModalAdd({ booleanOpenModal, setBooleanOpenModal, addCardListTask, booleanEditModal, setBooleanEditModal, editObj, editCard }) {
	const header = useRef("*");
	const description = useRef("*");
	const normalChecked = useRef("*");
	const highChecked = useRef("*");
	const urgentChecked = useRef("*");
	const instantChecked = useRef("*");
	const style = [cls.ModalContent];
	//проверка открытия карточки и фиксация ее в одном положении
	if (booleanOpenModal) {
		style.push(cls.active)
		document.body.style.position = 'fixed';
		document.body.style.top = `-${window.scrollY}px`;
		document.body.style.left = `-0px`;
		document.body.style.right = `-0px`;

	}
	//добавление новой карточки
	function CardListTask() {
		// if (header.current.value != "" && description.current.value != 0) {
		addCardListTask(
			WorkWithCard.addTaskList(
				header.current.value,
				ChoisePriority(
					normalChecked.current.checked,
					highChecked.current.checked,
					urgentChecked.current.checked,
					instantChecked.current.checked
				),
				description.current.value
			)
		)

		header.current.value = '';
		normalChecked.current.checked = false;
		highChecked.current.checked = false;
		urgentChecked.current.checked = false;
		instantChecked.current.checked = false;
		description.current.value = '';
		setBooleanOpenModal(false)
		// }
	}
	//закрытие карточки
	function closeModal() {
		setBooleanOpenModal(false);
		setBooleanEditModal(false);
		const scrollY = document.body.style.top;
		document.body.style.position = '';
		document.body.style.top = '';
		document.body.style.left = '';
		document.body.style.right = '';
		window.scrollTo(0, parseInt(scrollY || '0') * -1);
	}
	if (booleanOpenModal) {
		document.addEventListener('keydown', (e) => {
			if (e.keyCode == 27) {
				setBooleanOpenModal(false);
				setBooleanEditModal(false);
				const scrollY = document.body.style.top;
				document.body.style.position = '';
				document.body.style.top = '';
				window.scrollTo(0, parseInt(scrollY || '0') * -1);

			}
		})
	}
	//редактироваие карточки
	function editCardModal() {
		editCard(
			editObj.cardList,
			editObj.setCardList,
			WorkWithCard.editCard(
				header.current.value,
				ChoisePriority(
					normalChecked.current.checked,
					highChecked.current.checked,
					urgentChecked.current.checked,
					instantChecked.current.checked
				),
				description.current.value,
				editObj.props.id_card
			)
		)

	}
	//открытие редактированной карточки
	if (booleanEditModal) {
		switch (editObj.props.priority) {
			case 'normal':
				normalChecked.current.checked = true;
				break;
			case 'high':
				highChecked.current.checked = true;
				break;
			case 'urgent':
				urgentChecked.current.checked = true;
				break;
			case 'instant':
				instantChecked.current.checked = true;
				break;
			default:
				normalChecked.current.checked = false;
				highChecked.current.checked = false;
				urgentChecked.current.checked = false;
				instantChecked.current.checked = false;
				break;
		}
		header.current.value = editObj.props.header;
		description.current.value = editObj.props.description;

	} else if (Object.keys(editObj).length) {
		normalChecked.current.checked = false;
		highChecked.current.checked = false;
		urgentChecked.current.checked = false;
		instantChecked.current.checked = false;
		header.current.value = '';
		description.current.value = '';
	}
	return (
		<div className={style.join(' ')} onClick={() => closeModal()}>
			<div className={cls.ModalAdd} onClick={(e) => e.stopPropagation()}>
				<div className={cls.ModalContentContainer}>
					<div className={cls.ModalClose}>
						<button onClick={() => closeModal()}>x</button>
					</div>
					<div className={cls.ModalTitle}>
						{
							booleanEditModal ?
								<h1>editing card</h1>
								:
								<h1>new task</h1>
						}
					</div>
					<div className={cls.ModalContentInputs}>
						<div className={cls.ModalHeader}>
							<input className={cls.ModalHeaderInput} ref={header} type="text" placeholder='header...' />
						</div>
						<div className={cls.ModalRadioInput}>
							<div className="">
								<p>priority: </p>
							</div>
							<div className={cls.ModalRadioItem}>
								<label className={cls.ModalRadioLabel} htmlFor="normal">normal</label>
								<input className={cls.ModalRadioInputRadio} id="normal" type="radio" name="priorityItem" ref={normalChecked} />
							</div>
							<div className={cls.ModalRadioItem}>
								<label className={cls.ModalRadioLabel} htmlFor="high">high</label>
								<input className={cls.ModalRadioInputRadio} id="high" type="radio" name="priorityItem" ref={highChecked} />
							</div>
							<div className={cls.ModalRadioItem}>
								<label className={cls.ModalRadioLabel} htmlFor="urgent">urgent</label>
								<input className={cls.ModalRadioInputRadio} id="urgent" type="radio" name="priorityItem" ref={urgentChecked} />
							</div>
							<div className={cls.ModalRadioItem}>
								<label className={cls.ModalRadioLabel} htmlFor="instant">instant</label>
								<input className={cls.ModalRadioInputRadio} id="instant" type="radio" name="priorityItem" ref={instantChecked} />
							</div>
						</div>
						<div className={cls.ModalDescription}>
							<textarea className={cls.ModalDescriptionInput} ref={description} name="" id="" cols="30" rows="10" placeholder='description...'></textarea>
						</div>
					</div>
					<div className={cls.ModalAddCard}>
						{
							booleanEditModal ?
								<button onClick={() => editCardModal()}>edit</button>
								:
								<button onClick={() => CardListTask()}>+ add task</button>
						}
					</div>
				</div>
			</div>
		</div>

	)
}

export default ModalAdd