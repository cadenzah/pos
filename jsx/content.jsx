const React = require("react")
const data_url = "./catalog.json"
const Menu = require ("./menu.jsx")

class Content extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			current_order: [],
			catalog: []
		}
		this.handleAddItem = this.handleAddItem.bind(this)
	}

	componentDidMount() {
		fetch(data_url)
		.then((response) => response.json())
		.then((catalog)=> this.setState({catalog: catalog}))
	}

	handleAddItem(id, event) {
		let order_index = -1
		this.state.current_order.map((entry, index, current_order) => {
				// 한번 일치를 찾고나면, 그 다음에 다르더라도 인덱스++를 하면 안됨
			if (entry.id == id) order_index = index
			if (order_index == -1) order_index = current_order.length
			console.log("order_index가 " + order_index +"로 변경")
		})

		let obj = Object.assign(this.state.current_order)
		this.setState((prevState, props) => {
			if (order_index == -1) {
				console.log("첫번째 if")
				obj[0] = {
					id: id,
					quantity: 1
				}
			}
			else if (obj[order_index] == undefined) {
				console.log("두번째 if / order_index = " + order_index)
				obj[order_index] = {
					id: id,
					quantity: 1
				}
			}
			else {
				console.log("세번째 if / order_index = " + order_index)
				obj[order_index] = {
					id: id,
					quantity: ++obj[order_index].quantity
				}
			}
			return {current_order: obj}
		})
	}

	handleRemoveItem(event) {

	}

	render() {
		return (
			<div>
				<Menu catalog={this.state.catalog} handler={this.handleAddItem} />
			</div>
		)
	}
}
// <Order current_order={this.state.current_order} />

module.exports = Content

// 		this.setState({
// 			if (order_index === 0 ) {
// 				let obj = Object.assign(this.state.current_order)
// 				obj.indexOf(order_index) = {
// 					id: id,
// 					quantity: 1
// 				}
// 				current_order: obj
// 			} else {
// 				current_order.indexOf(order.index): quantity + 1
// 			}
// 		})