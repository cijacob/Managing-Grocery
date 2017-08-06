import React, { Component } from 'react'; 


export default class OrderSingle extends Component{
	
	toggleChecked(){
		Meteor.call('toggleOrder', this.props.order._id, this.props.order.complete);
	}

	deleteOrder(){
		Meteor.call('deleteOrder', this.props.order._id);
	}

	render(){
		return(
			<li>
				<input type="checkbox"
					readOnly={true}
					checked={ this.props.order.complete }
					onClick={this.toggleChecked.bind(this)}
				/>
				{ this.props.order.text }
				<buton className="btn-cancel"
					   onClick={this.deleteOrder.bind(this)} >
					   &times;
				</buton>
			</li>
		)
	}
}