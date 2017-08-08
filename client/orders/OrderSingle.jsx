import React, { Component } from 'react'; 


export default class OrderSingle extends Component{
	
	toggleChecked(){
		Meteor.call('toggleOrder', this.props.order._id, this.props.order.ordered);
	}

	deleteOrder(){
		Meteor.call('deleteOrder', this.props.order._id);
	}

	calculateInput(){
		Meteor.call('calculateInput', this.props.order.price);
	}

	render(){
		
		const orderClass = this.props.order.ordered ? "checked" : ""; 
		const status = this.props.order.ordered ? <span className="calculateInput"><input type="number" className="ordered"/>{ this.props.order.price } €</span> : ''; 
		
		return(
			<li className={orderClass}>
				<input type="checkbox"
					className="checkbox"
					readOnly={true}
					checked={ this.props.order.ordered }
					onClick={ this.toggleChecked.bind(this)}
				/>
				{ this.props.order.text }
				{status}
				<buton className="btn-cancel"
					   onClick={this.deleteOrder.bind(this)} >
					   &times;
				</buton>
			</li>
		)
	}
}