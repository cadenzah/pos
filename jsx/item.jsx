const React = require("react")

class Item extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div onClick={this.props.handler}>
				{this.props.info.name}
			</div>
		)
	}
}

module.exports = Item