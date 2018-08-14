const React = require("react")
const Item = require("./item.jsx")

class Menu extends React.Component {
	constructor(props) {
		super(props)
	}
// Button을 하위에 만들어서 map

	render() {
		return (
			<div>
				<h1>Menu</h1>
				<ul>
				{this.props.catalog.map((item, index) => {
					return <li key={index}><Item info={item} handler={this.props.handler}/></li>
				}
				)}
				</ul>
			</div>
		)
	}
}

module.exports = Menu