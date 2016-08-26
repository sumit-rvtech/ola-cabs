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
		this.addRecord = this.addDriver.bind(this);
		this.handleHire = this.addDriver.bind(this);
	}

	componentWillMount () {
		var drivers = this.props.drivers;
		this.state = {drivers: drivers};
	}

	addDriver (driver) {
		var drivers;
		drivers = this.state.drivers;
		if(driver){
			drivers.push(driver);
		}
		this.setState({drivers: drivers});
	}

	render () {
		var drivers;
		if(this.props.drivers.length){
			drivers= this.props.drivers.map(function(driver) {
				return <Driver key={driver.id} driver={driver} handleNewHire ={this.handleHire} />;
			});
		}
		else{
			drivers= "No Driver Found"
		}
		return (
			<div className="table-responsive">
				<table className="table table-bordered table-hover table-inverse">
					<thead className="thead-inverse">
						<tr>
							<th>First Name</th>
							<th>Last Name</th>
							<th>Email</th>
							<th>Number</th>
							<th>Cab Type</th>
							<th>Vehicle Number</th>
							<th></th>
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