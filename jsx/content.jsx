const React = require("react")
const data_url = "./catalog.json"
const Menu = require ("./menu.jsx")

class Content extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			current_order: [],
			catalog: []
		}
		this.handleAddItem = this.handleAddItem.bind(this)
	}

	componentDidMount() {
		fetch(data_url)
		.then((response) => response.json())
		.then((catalog)=> this.setState({catalog: catalog}))
	}

	handleAddItem(event) {
		this.setState(
			// if (this.state.current_order[event.target.])
			// 누르면 해당 아이템을 current_order의 요소로 추가함
			// -> 이미 존재하는지 검사 후, 존재하면 개수만 갱신하도록. // find와 함께 쓰면 될듯
			// 여러번 클릭에 따라 개수 카운트하여 자동 반영되도록
			// 초기 개수는 0개. 0개 미만으로 내려가면 안됨
			// current_order는 배열이므로, 맨 마지막에 추가.
		)
	}

	handleRemoveItem(event) {

	}

	render() {
		return (
			<div>
				<Menu catalog={this.state.catalog} handler={this.handleAddItem} />
			</div>
		)
	}
}
// <Order current_order={this.state.current_order} />
module.exports = Content