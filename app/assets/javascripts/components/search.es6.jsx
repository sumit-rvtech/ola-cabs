class SearchDriver extends React.Component {

	constructor (props) {
	    super (props);
	    this.state = {
	    	source: "",
			destination: "",
			cab_type: "",
			persons: ""
    	}
	    this.handleChange = this.handleChange.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);
  	}

  	valid () {
  		return this.state.source && this.state.cab_type && this.state.persons;
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
			url: '/users/search_drivers',
			dataType: 'JSON',
			cache: false,
			data: {search: this.state},
			success: function (data, success, xhr) {
				window.location.href = data.redirect_url + "?drivers="+ data.drivers+"&data="+this.state;
			}.bind(this),

			error: function(response, status, err) {
				alert(response.responseText)
			}.bind(this)
		});
	}
	render () {
    	return (
			<form className="" onSubmit={this.handleSubmit} >
				<input type="text" placeholder="Enter pickup location" name="source" id="source" value={this.state.source} onChange={this.handleChange} onInput={this.handleSelect} />

				<input type="text" placeholder="Enter Drop location" name="destination" id="destination" value={this.state.destination} onChange={this.handleChange} onInput={this.handleSelect} />

				<select name="cab_type" onChange={this.handleChange} value={this.state.cab_type} >
					{this.props.cab_type.map(function(key){
						return <option value={key}>{key}</option>
					})}
				</select>

				<select name="persons" onChange={this.handleChange} value={this.state.persons} >
					{this.props.persons.map(function(key){
						return <option value={key}>{key}</option>
					})}
				</select>
				<div className="Header_submit">
					<input type="submit" value="Search" id="btnSubmit" disabled={!this.valid()} />
				</div>
			</form>
		);
	}
}
