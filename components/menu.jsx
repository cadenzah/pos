const React = require("react")
const Item = require("./item.jsx")

class Menu extends React.Component {
	constructor(props) {
		super(props)
	}
// Button을 하위에 만들어서 map

	render() {
		return (
			<div className="menu">
				{this.props.catalog.map((item, index) => {
					return <Item info={item} handler={this.props.handler} />
				})}
			</div>
		)
	}
}

module.exports = Menu