class Driver extends React.Component {
	constructor (props) {
	    super (props);
		this.handleHire = this.props.handleHire.bind(this);
  	}

	handleHire (e){
		e.preventDefault()
	}
	render () {
		return (
			<tr>
				<td><em>{this.props.driver.first_name}</em></td>
				<td>{this.props.driver.last_name}</td>
				<td>{this.props.driver.email}</td>
				<td>{this.props.driver.mobile}</td>
				<td>{this.props.driver.cab_type}</td>
				<td>{this.props.driver.vehicle_number}</td>
				<td><a className='btn btn-success' onClick= {this.handleHire} value="Hire">Hire</a></td>
      		</tr>
		);
	}
}