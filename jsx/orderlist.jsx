const React = require("react")

const OrderList = (props) => {
	return (
		<div className="orderlist">
			<h1>List of Orders</h1>
			<ul>
			{props.order.map((item, index) => {
				return (
					<li key={index}>
						{props.catalog.find((entry) => entry.id == item.id).name} / {props.catalog.find((entry) => entry.id == item.id).price}원 / {item.quantity}개 / <span onClick={props.handler.bind(null,item.id)}>제거</span>
					</li>
				)
			}
			)}
			</ul>
		</div>
	)
}

module.exports = OrderList