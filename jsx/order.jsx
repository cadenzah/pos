const React = require("react")
const Sum = require("./sum.jsx")

class Order extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div>
				<h1>Order</h1>
				<Sum sum={this.props.sum} />
			</div>
		)
	}
}

module.exports = Order
// <OrderList order={this.props.order} handler={this.props.handleRemoveItem}/>