const React = require("react")
const Sum = require("./sum.jsx")
const OrderList = require("./orderlist.jsx")

const Order = (props) => {
		return (
			<div className="order">
				<h1>Order</h1>
				<Sum sum={props.sum} />
				<OrderList order={props.order} catalog={props.catalog} handler={props.handler}/>
			</div>
		)
}

module.exports = Order
