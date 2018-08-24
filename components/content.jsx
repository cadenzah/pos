const React = require("react")
const data_url = "catalog.json"
const order_upload_url = "/upload"
const Menu = require ("./menu.jsx")
const Order = require("./order.jsx")

class Content extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			current_order: [],
			catalog: [],
			current_sum: 0
		}
		this.handleAddItem = this.handleAddItem.bind(this)
		this.handleRemoveItem = this.handleRemoveItem.bind(this)
		this.handleFinishOrder = this.handleFinishOrder.bind(this)
	}

	componentDidMount() {
		fetch(data_url)
		.then((response) => response.json())
		.then((catalog) => this.setState({catalog: catalog}))
	}

	handleAddItem(id, event) {
		let order_index = -1
		this.state.current_order.map((entry, index, current_order) => {
			// Once found the matching index, the index should not be changed	afterward
			if (entry.id == id) order_index = index
			if (order_index == -1) order_index = current_order.length
		})

		let obj = Object.assign(this.state.current_order)
		this.setState((prevState, props) => {
			if (order_index == -1) {
				obj[0] = {
					id: id,
					quantity: 1
				}
			}
			else if (obj[order_index] == undefined) {
				obj[order_index] = {
					id: id,
					quantity: 1
				}
			}
			else {
				obj[order_index] = {
					id: id,
					quantity: ++obj[order_index].quantity
				}
			}

			let sum = this.state.current_sum
			sum = sum + parseInt(this.state.catalog.find((entry) => entry.id == id).price)
			return {
				current_order: obj,
				current_sum: sum
			}
		})
	}

	handleRemoveItem(id, event) {
		let order_index = -1
		this.state.current_order.map((entry, index, current_order) => {
			// Once found the matching index, the index should not be changed	afterward
			if (entry.id == id) order_index = index
			if (order_index == -1) order_index = current_order.length
		})

		let obj = Object.assign(this.state.current_order)
		let current_quantity = obj.find((entry) => entry.id == id).quantity

		this.setState((prevState, props) => {
			if (current_quantity > 1) obj[order_index] = {
				id: id,
				quantity: --obj[order_index].quantity
			}
			else {
				obj[order_index] = undefined
				obj = obj.filter((entry) => { return entry !== undefined })
			}

			let sum = this.state.current_sum
			sum = sum - parseInt(this.state.catalog.find((entry) => entry.id == id).price)
			return {
					current_order: obj,
					current_sum: sum
			}
		})		
	}

	handleFinishOrder(event) {
		const data = {
			payload: {
				orderlist: Object.assign(this.state.current_order),
				sum: this.state.current_sum
			}
		}
		fetch(order_upload_url, {
			method: "POST",
			body: JSON.stringify(data),
			headers: {
				"Content-type": "application/json",
				"Accept": "application/json"
			}
		})
		  .then( (response) => {
		  	if (response.status === 200 || response.status === 201) {
		  		response.json().then( (final_order) => {
		  			const date = new Date(final_order.date)
		  			let str = ""
		  			final_order.orderlist.map( (entry) => {
		  				str = `${str}
- ${this.state.catalog.find((menu) => menu.id == entry.id).name} ${entry.quantity}개`
		  			})
		  			str = `# 주문 결과 #
> 주문 일시: ${date.getFullYear()}년 ${date.getMonth()+1}월 ${date.getDate()}일 ${date.getHours()}시 ${date.getMinutes()}분 ${date.getSeconds()}초
${str}
> 결제 금액: ${final_order.sum}원`
		  			alert(str)
		  		})
		  	}
		  }).catch( error => console.error(error))
		  this.setState({
		  	current_order: [],
		  	current_sum: 0
		  })
	}

	render() {
		return (
			<div className="app-container">
				<Order
				  sum={this.state.current_sum}
				  catalog={this.state.catalog}
				  order={this.state.current_order}
				  removeHandler={this.handleRemoveItem}
				  finishHandler={this.handleFinishOrder} />
				<Menu catalog={this.state.catalog} handler={this.handleAddItem} />
			</div>
		)
	}
}

module.exports = Content