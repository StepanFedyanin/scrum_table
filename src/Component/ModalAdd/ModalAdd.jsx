import React from 'react'
import cls from './ModalAdd.module.css'
import ChoisePriority from '../../Utility/ChoisePriority'
import addTaskList from '../../Utility/Add'
import { useRef } from 'react'
function ModalAdd({ booleanOpenModal, setBooleanOpenModal, addCardListTask }) {
	const header = useRef("*");
	const description = useRef("*");
	const normalChecked = useRef("*");
	const highChecked = useRef("*");
	const urgentChecked = useRef("*");
	const instantChecked = useRef("*");

	const style = [cls.ModalContent]
	if (booleanOpenModal) {
		style.push(cls.active)
	}
	function CardListTask() {
		if (header.current.value != "" && description.current.value != 0) {
			addCardListTask(
				addTaskList(
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
		}
	}
	return (
		<div className={style.join(' ')} onClick={() => setBooleanOpenModal(false)}>
			<div className={cls.ModalAdd} onClick={(e) => e.stopPropagation()}>
				<div className={cls.ModalContentContainer}>
					<div className={cls.ModalClose}>
						<button onClick={() => setBooleanOpenModal(false)}>x</button>
					</div>
					<div className={cls.ModalTitle}>
						<h1>new task</h1>
					</div>
					<div className={cls.ModalContentInputs}>
						<div className="">
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
						<button onClick={CardListTask}>+ add task</button>
					</div>
				</div>
			</div>
		</div>

	)
}

export default ModalAdd