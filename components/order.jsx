const React = require("react")
const Sum = require("./sum.jsx")
const OrderList = require("./orderlist.jsx")
const FinishOrder = require("./finishorder.jsx")

const Order = (props) => {
		return (
			<div className="order">
				<FinishOrder handler={props.finishHandler}/>
				<Sum sum={props.sum} />
				<OrderList order={props.order} catalog={props.catalog} handler={props.removeHandler}/>
			</div>
		)
}

module.exports = Order
