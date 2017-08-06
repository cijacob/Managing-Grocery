import React from 'react'; 
import AccountsUI from '../accountsUI'; 

export const MainLayout = ({content}) =>(
	<div className="main-layout">
		<header>
			<h2>Orders</h2>
			<nav>
				<a href="/">Orders</a>
				<a href="#">About</a>
				<AccountsUI />
			</nav>
		</header>
		<main>
			{ content }
		</main>
		
	</div>
)