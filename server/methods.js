Meteor.methods({
	addOrder(order){
		Orders.insert({
			text: order, 
			complete: false, 
			createdAt: new Date()
		});
	}, 
	toggleOrder(id, status){
		Orders.update(id, {
			$set: {complete: !status}
			
		})
	}, 
	deleteOrder(id){
		Orders.remove(id);
	}
});