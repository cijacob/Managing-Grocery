import React, { Component } from 'react'; 


export default class OrderSingle extends Component{
	
	toggleChecked(){
		Meteor.call('toggleOrder', this.props.order._id, this.props.order.complete);
	}

	deleteOrder(){
		Meteor.call('deleteOrder', this.props.order._id);
	}

	calculateInput(){
		$('.orderClass').on('calculateInput', function(){
			var totalSum = 0; 
		})
	}

	render(){
		
		const orderClass = this.props.order.complete ? "checked" : ""; 
		const status = this.props.order.complete ? <span className="calculateInput"><input type="number" className="completed"/> €</span> : ''; 
		return(
			<li className={orderClass}>
				<input type="checkbox"
					className="checkbox"
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