import { useMemo } from "react";

const useFilter = (list, value) => {
	const sortedAndSearchedPosts = useMemo(() => {
		return list.filter(item => item.header.toLowerCase().includes(value.toLowerCase()) || item.description.toLowerCase().includes(value.toLowerCase()))
	}, [list, value])
	return sortedAndSearchedPosts;
}

export default useFilter;