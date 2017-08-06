import React from 'react'; 
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react'; 
import OrdersForm from './OrdersForm'; 
import OrderSingle from './OrderSingle'; 

Orders = new Mongo.Collection("orders"); 

export default class OrdersWrapper extends TrackerReact(React.Component){
	constructor(){
		super(); 
		this.state = {
			subscription: {
				orders: Meteor.subscribe("AllOrders") 
			}
		}
	}

	componentWillUnmount(){
		this.state.subscription.orders.stop(); 
	}

	orders(){
		return Orders.find().fetch(); 
	}
	
	render(){
		return(
			<div>
				<h2>Grocery Orders</h2>
				<OrdersForm />
				<ul className="orders">
					{this.orders().map((order)=>{
						return <OrderSingle key={order._id} order={order} />
						}
					)}		
				</ul>
			</div>
		)
	}
}
