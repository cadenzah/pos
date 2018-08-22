const React = require("react")

class Item extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<table className="item" onClick={this.props.handler.bind(null, this.props.info.id)}>
				<td>
				{this.props.info.name}
				</td>
			</table>
		)
	}
}

// bind with "null" this argument just add new additional argument and use original this.
module.exports = Item