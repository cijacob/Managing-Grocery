Orders = new Mongo.Collection("orders"); 

Meteor.publish('AllOrders', function(){
	return Orders.find(); 
}); 