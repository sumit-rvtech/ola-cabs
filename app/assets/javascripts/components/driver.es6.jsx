class Driver extends React.Component {
	render () {
		return (
			<tr>
				<td><em>{this.props.driver.first_name}</em></td>
				<td>{this.props.driver.last_name}</td>
				<td>{this.props.driver.email}</td>
				<td>{this.props.driver.number}</td>
				<td>{this.props.driver.cab_type}</td>
				<td>{this.props.driver.vehicle_number}</td>
      		</tr>
		);
	}
}