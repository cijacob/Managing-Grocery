import React from 'react'; 
import {mount} from 'react-mounter'; 

import {MainLayout} from './layouts/MainLayout.jsx';
import OrdersWrapper from './orders/OrdersWrapper.jsx'; 

FlowRouter.route('/', {
	action(){
		mount(MainLayout, {content: (<OrdersWrapper />)
		})
	}
});