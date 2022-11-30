
class WorkWithCard {
	static addTaskList(header, priority, description) {
		let data = new Date();
		const Card = {
			"header": header,
			"priority": priority,
			"description": description,
			"favourites": false,
			"id_card": data.getSeconds() + data.getMilliseconds() + "" + Math.floor(Math.random() * data.getSeconds()) + "-" + header
		}
		return Card
	}
	static editCard(header, priority, description, id_card) {
		const Card = {
			"header": header,
			"priority": priority,
			"description": description,
			"favourites": false,
			"id_card": id_card
		}
		return Card
	}
}
export default WorkWithCard