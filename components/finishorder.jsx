const React = require("react")
const OrderList = require("./orderlist.jsx")

const FinishOrder = (props) => {
		return (
			<div className="makeorder" onClick={props.handler}>
			 주문완료
			</div>
		)
}

module.exports = FinishOrder
