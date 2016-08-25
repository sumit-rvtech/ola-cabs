class Search extends React.Component {

	constructor (props) {
		super(props);
		this.state = {
			title: "",
			date: "",
			amount: ""
		}
		this.addRecord = this.addRecord.bind(this)
	}

	componentWillMount () {
		var records = this.props.search;
		this.state = {records: search};
	}

	addRecord (record) {
		var records;
		records = this.state.search;
		if(record){
			records.push(record);
		}
		this.setState({records: records});
	}
	render () {
    	return (
    		<SearchForm handleNewRecord={this.addRecord} />
		);
	}
}
