Meteor.methods({
	addOrder(order){
		Orders.insert({
			text: order,
			price: "", 
			ordered: false,
			createdAt: new Date()
		});
	}, 
	toggleOrder(id, status){
		Orders.update(id, {
			$set: {ordered: !status}
			
		})
	}, 
	deleteOrder(id){
		Orders.remove(id);
	},
	calculateInput(order){

	}
});