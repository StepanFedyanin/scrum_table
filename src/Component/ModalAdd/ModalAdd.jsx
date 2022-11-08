import React from 'react'
import cls from './ModalAdd.module.css'
import ChoisePriority from '../../Utility/ChoisePriority'
import addTaskList from '../../Utility/Add'
function ModalAdd({ booleanOpenModal, setBooleanOpenModal, addCardListTask }) {
	const style = [cls.ModalContent]
	if (booleanOpenModal) {
		style.push(cls.active)
	}
	function CardListTask() {
		const header = document.getElementById('header').value;
		const description = document.getElementById('description').value;
		const normalChecked = document.getElementById('normal').checked;
		const highChecked = document.getElementById('high').checked;
		const urgentChecked = document.getElementById('urgent').checked;
		const instantChecked = document.getElementById('instant').checked;
		addCardListTask(
			addTaskList(header, ChoisePriority(normalChecked, highChecked, urgentChecked, instantChecked), description)
		)
	}
	return (
		<div className={style.join(' ')} onClick={() => setBooleanOpenModal(false)}>
			<div className={cls.ModalAdd} onClick={(e) => e.stopPropagation()}>
				<div className={cls.ModalContentContainer}>
					<div className={cls.ModalTitle}>
						<h1>new task</h1>
					</div>
					<div className={cls.ModalContentInputs}>
						<div className="">
							<input className={cls.ModalHeaderInput} id='header' type="text" placeholder='header...' />
						</div>
						<div className={cls.ModalRadioInput}>
							<div className="">
								<p>priority: </p>
							</div>
							<div className={cls.ModalRadioItem}>
								<label className={cls.ModalRadioLabel} htmlFor="normal">normal</label>
								<input className={cls.ModalRadioInputRadio} type="radio" name="priorityItem" id="normal" />
							</div>
							<div className={cls.ModalRadioItem}>
								<label className={cls.ModalRadioLabel} htmlFor="high">high</label>
								<input className={cls.ModalRadioInputRadio} type="radio" name="priorityItem" id="high" />
							</div>
							<div className={cls.ModalRadioItem}>
								<label className={cls.ModalRadioLabel} htmlFor="urgent">urgent</label>
								<input className={cls.ModalRadioInputRadio} type="radio" name="priorityItem" id="urgent" />
							</div>
							<div className={cls.ModalRadioItem}>
								<label className={cls.ModalRadioLabel} htmlFor="instant">instant</label>
								<input className={cls.ModalRadioInputRadio} type="radio" name="priorityItem" id="instant" />
							</div>
						</div>
						<div className={cls.ModalDescription}>
							<input className={cls.ModalDescriptionInput} id='description' placeholder='description...' />
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