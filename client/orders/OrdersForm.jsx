import React, { Component } from 'react'; 

export default class OrdersForm extends Component{
	
	addProduct(event){

		event.preventDefault();
		var text = this.refs.order.value.trim(); 
		
		Meteor.call('addOrder', text, ()=>{
			this.refs.order.value = "";
		})		  
	}

	render(){
		return(
			<form className="new-order" 
				  onSubmit={this.addProduct.bind(this)}>

				<input  type="text" 
						ref="order" 
						placeholder="Enter new product"/>
			</form>
		)
	}
}