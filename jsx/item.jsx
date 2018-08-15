const React = require("react")

class Item extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div onClick={this.props.handler.bind(null, this.props.info.id)}>
				{this.props.info.name}
			</div>
		)
	}
}

// bind with "null" this argument just add new additional argument and use original this.
module.exports = Item