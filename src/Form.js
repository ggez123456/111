import React,{ Component } from 'react'

class Form extends Component{
constructor(props){
	super(props)
	this.state = { email:'',name:'', age:null, address:'',phoneNo:''}
	this.handleChange = this.handleChange.bind(this)
	this.handleSubmit = this.handleSubmit.bind(this)
}

// Form submitting logic, prevent default page refresh
handleSubmit(event){
	const { email, name, age, address, phoneNo } = this.state
	event.preventDefault()
	alert(`
	____Your Details____\n
	Email : ${email}
	Name : ${name}
	Age : ${age}
	Address : ${address}
	Phone No : ${phoneNo}
	`)
}

// Method causes to store all the values of the
// input field in react state single method handle
// input changes of all the input field using ES6
// javascript feature computed property names
handleChange(event){
	this.setState({
	// Computed property names
	// keys of the objects are computed dynamically
	[event.target.name] : event.target.value
	})
}

// Return a controlled form i.e. values of the
// input field not stored in DOM values are exist
// in react component itself as state
render(){
	return(
	<form onSubmit={this.handleSubmit}>
		<div>
		<label htmlFor='email'>Email</label>
		<input
			name='email'
			placeholder='Email'
			value = {this.state.email}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<label htmlFor='name'>Name</label>
		<input
			name='name'
			placeholder='Name'
			value={this.state.name}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<label htmlFor='age'>Age</label>
		<input
			name='age'
			placeholder='Age'
			value={this.state.age}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<label htmlFor='address'>Address</label>
		<input
			name='address'
			placeholder='Address'
			value={this.state.address}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<label htmlFor='phoneNo'>Phone Number</label>
		<input
			name='phoneNo'
			placeholder='Phone No'
			value={this.state.phoneNo}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<label for="favcolor">Select your favorite color:</label>
		<input type="color" id="favcolor" name="favcolor"></input>
		
		</div>
		<div>
		<label for="birthday">Birthday:</label>
		<input type="date" id="birthday" name="birthday"></input>

		</div>
		<div>
		<label for="birthdaytime">Birthday (date and time):</label>
		<input type="datetime-local" id="birthdaytime" name="birthdaytime"></input>

		</div>
		<div>
		<label for="myfile">Select a file:</label>
		<input type="file" id="myfile" name="myfile"></input>

		</div>
		<div>
		<label for="quantity">Quantity (between 1 and 5):</label>
		<input type="number" id="quantity" name="quantity" min="1" max="5"></input>

		</div>
		<div>
		<label for="vol">Volume (between 0 and 50):</label>
		<input type="range" id="vol" name="vol" min="0" max="50">z</input>


		<button>Create Account</button>
		</div>
	</form>
	)
}
}

export default Form





















































































