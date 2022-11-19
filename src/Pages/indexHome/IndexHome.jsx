import React, { useMemo, useState } from 'react'
import cls from './IndexHome.module.css'
import FooterContent from '../../Component/Footer/FooterContent'
import HeaderContent from '../../Component/Header/HeaderContent'
import MainContent from '../../Component/MainContent/MainContent'
import useFilter from '../../hooks/useSerch'
import { useEffect } from 'react'
function IndexHome() {
	// изначальные листы
	const [taskList, setTaskList] = useState([])
	const [inProgress, setInProgress] = useState([])
	const [inTesting, setInTesting] = useState([])
	const [completed, setCompleted] = useState([])
	//значение фильтрации
	const [serchValue, setSerchValue] = useState("");
	//листы после фильтрации
	const taskListAfterFilter = useFilter(taskList, serchValue);
	const inProgressAfterFilter = useFilter(inProgress, serchValue);
	const inTestingAfterFilter = useFilter(inTesting, serchValue);
	const completedAfterFilter = useFilter(completed, serchValue);
	return (
		<div className={cls.ScrumContent}>
			<HeaderContent setSerchValue={setSerchValue} />
			<MainContent
				taskList={taskListAfterFilter}
				setTaskList={setTaskList}
				inProgress={inProgressAfterFilter}
				setInProgress={setInProgress}
				inTesting={inTestingAfterFilter}
				setInTesting={setInTesting}
				completed={completedAfterFilter}
				setCompleted={setCompleted}
			/>
			<FooterContent />
		</div>
	)
}

export default IndexHome