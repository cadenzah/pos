const React = require("react")

const Sum = (props) => {
	return (
		<div className="sum">
			<h1>{props.sum}원</h1>
		</div>
	)
}

module.exports = Sum