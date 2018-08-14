const React = require("react")

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
				{this.props.catalog.map((item) =>
					<li><Item info={item} handler={this.props.handler}/></li>
				)}
				</ul>
			</div>
		)
	}
}

module.exports = Content