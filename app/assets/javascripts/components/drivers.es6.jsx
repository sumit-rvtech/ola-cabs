class Drivers extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			first_name: "",
			last_name: "",
			email: "",
			password: "",
			password_confirmation: "",
			address: "",
			mobile: "",
			cab_type: "",
			vehicle_number: "",
			role: "driver"
		}
		debugger
		this.addRecord = this.addDriver.bind(this)
	}

	componentWillMount () {
		var drivers = this.props.drivers;
		this.state = {drivers: drivers};
	}

	addDriver (driver) {
		debugger;
		var drivers;
		drivers = this.state.drivers;
		if(driver){
			drivers.push(driver);
		}
		this.setState({drivers: drivers});
	}

	render () {
		var drivers = this.props.drivers.map(function(driver) {
			return <Driver key={driver.id} driver={driver} />;
		});
		return (
			<div>
				<h2>Records</h2>
				<hr />
				<DriverForm handleNewRecord={this.addRecord} cab_type={this.props.cab_type} />
				<table className="table table-bordered">
					<thead>
						<tr>
							<th>First Name</th>
							<th>Last Name</th>
							<th>Email</th>
							<th>Number</th>
							<th>Cab Type</th>
							<th>Vehicle Number</th>
						</tr>
					</thead>
					<tbody>
						{drivers}
					</tbody>
				</table>
			</div>
		);
	}
}