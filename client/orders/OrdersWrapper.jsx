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

	getVisibleOrder(orders, filter){
		switch(filter){
			case 'show_all':
				return orders; 
			case 'show_ordered':
				return orders.filter(function(o){
					return o.Ordered; 
				});
			case 'show-active':
				return orders.filter(function(o){
					return !o.completed;
				});
		}
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
				<div className="sectionOrder">
					<span><button className="listEnd" onClick={()=>dispatch(getVisibleOrder("show_all"))}>All orders</button></span>
					<span><button className="listEnd" onClick={()=>dispatch(getVisibleOrder("show_ordered"))}>Ordered</button></span>
					<span><button className="listEnd" onClick={()=>dispatch(getVisibleOrder("show-active"))}>Orders Active</button></span>
				</div>
				<div>
					
					{this.getVisibleOrder.bind(this)}
					
				</div>
			</div>
		)
	}
}
