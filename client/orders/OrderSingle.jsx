import React, { Component } from 'react'; 


export default class OrderSingle extends Component{
	
	toggleChecked(){
		Meteor.call('toggleOrder', this.props.order._id, this.props.order.complete);
	}

	deleteOrder(){
		Meteor.call('deleteOrder', this.props.order._id);
	}

	render(){
		
		const orderClass = this.props.order.complete ? "checked" : ""; 
		const status = this.props.order.complete ? <input type="text" className="completed"/> : ''; 
		return(
			<li className={orderClass}>
				<input type="checkbox"
					readOnly={true}
					checked={ this.props.order.complete }
					onClick={this.toggleChecked.bind(this)}
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