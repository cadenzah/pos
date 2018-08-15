const React = require("react")
const Sum = require("./sum.jsx")
const OrderList = require("./orderlist.jsx")

class Order extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div>
				<h1>Order</h1>
				<Sum sum={this.props.sum} />
				<OrderList order={this.props.order} catalog={this.props.catalog} handler={this.props.handleRemoveItem}/>
			</div>
		)
	}
}

module.exports = Order
