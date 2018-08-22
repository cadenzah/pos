const React = require("react")

const OrderList = (props) => {
	return (
		<div className="orderlist">
			<table className="orderlist_table">
				<thead>
					<tr>
						<th className="order_number">No.</th>
						<th className="order_item">상품명</th>
						<th className="order_price">가격</th>
						<th className="order_quantity">수량</th>
						<th className="order_delete"></th>
					</tr>
				</thead>
				<tbody>
					{props.order.map((item, index) => {
						let current_entry = props.catalog.find((entry) => entry.id == item.id)
						return (
							<tr key={index}>
								<td className="order_number">{index+1}</td>
								<td className="order_item">{current_entry.name}</td>
								<td className="order_price">{current_entry.price}원</td>
								<td className="order_quantity">{item.quantity}개</td>
								<td className="order_delete"><span onClick={props.handler.bind(null,item.id)}>제거</span></td>
							</tr>
						)
					})}
				</tbody>
			</table>
		</div>
	)
}

module.exports = OrderList