const SaveFavourit = (favourites, props) => {
	const Card = {
		"header": props.header,
		"priority": props.priority,
		"description": props.description,
		"favourites": favourites ? true : false,
		id_card: props.id_card
	}
	return Card
}
export default SaveFavourit;