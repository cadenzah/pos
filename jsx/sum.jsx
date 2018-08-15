const React = require("react")

const Sum = (props) => {
	return (
		<div>
			<h2 className="title">Sum of Orders</h2>
			주문금액 총 {props.sum}원
		</div>
	)
}

module.exports = Sum