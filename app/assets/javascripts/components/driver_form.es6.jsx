class DriverForm extends React.Component {
	constructor (props) {
	    super (props);
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
	    this.handleNewRecord = this.props.handleNewRecord.bind(this);
	    this.handleChange = this.handleChange.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);
  	}


  handleChange (e) {
    var stateObject = function() {
      returnObj = {};
      returnObj[this.target.name] = this.target.value;
         return returnObj;
    }.bind(e)();

    this.setState( stateObject ); 
  }

  handleSubmit (e) {
    e.preventDefault();
    $.ajax({
      type: 'POST',
      url: '/users',
      dataType: 'JSON',
      cache: false,
      data: {user: this.state},
      success: function (data) {
        this.props.handleNewRecord(data);
        this.setState( this.getInitialState)
      }.bind(this),

      error: function(response, status, err) {
      	alert(response.responseText)
      }.bind(this)
    });
  }
  render () {
    return (
		<div className="comp_register">
			<h2 className="com-title">Driver Registration</h2>
			<form className="" onSubmit={this.handleSubmit} >
				<table>
					<tbody>
					<tr>
						<td>
							<input type="text" className="control-label col-md-2" placeholder="First Name" name="first_name" value={this.state.first_name} onChange={this.handleChange} />
						</td>
					</tr>
					<tr>
						<td>
							<input type="text" className="control-label col-md-2" placeholder="Last Name" name="last_name" value={this.state.last_name} onChange={this.handleChange} />
						</td>
					</tr>
					<tr>
						<td>
							<input  
							type="text" 
							className="control-label col-md-2" 
							placeholder="Email"
							name="email"
							value={this.state.email}
							onChange={this.handleChange}
							/>
						</td>
					</tr>
					<tr>
						<td>
							<input  
							type="password" 
							className="control-label col-md-2" 
							placeholder="Password"
							name="password"
							value={this.state.password}
							onChange={this.handleChange}
							/>
						</td>
					</tr>
					<tr>
						<td>
							<input  
							type="password" 
							className="control-label col-md-2" 
							placeholder="Password Confirmation"
							name="password_confirmation"
							value={this.state.password_confirmation}
							onChange={this.handleChange}
							/>
						</td>
					</tr>
					<tr>
						<td>
							<input  
							type="text" 
							className="control-label col-md-2" 
							placeholder="Address"
							name="address"
							value={this.state.address}
							onChange={this.handleChange}
							/>
						</td>
					</tr>
					<tr>
						<td>
							<input  
							type="number" 
							className="control-label col-md-2" 
							placeholder="Mobile Number"
							name="mobile"
							value={this.state.mobile}
							onChange={this.handleChange}
							/>
						</td>
					</tr>
					<tr>
						<td>
							<select name="cab_type" onChange={this.handleChange} value={this.state.cab_type} className="control-label col-md-2" >
								{this.props.cab_type.map(function(key){
									return <option value={key[1]}>{key[0]}</option>
								})}
							</select>
						</td>
					</tr>
					<tr>
						<td>
							<input  
							type="number" 
							className="control-label col-md-2" 
							placeholder="Vehicle Number"
							name="vehicle_number"
							value={this.state.vehicle_number}
							onChange={this.handleChange}
							/>
						</td>
					</tr>
					</tbody>
				</table>
				<div className="submit_btn">
					<input type="submit" value="Create Driver" className="btn btn-primary"/>
				</div>
			</form>
		</div>
    );
  }
}