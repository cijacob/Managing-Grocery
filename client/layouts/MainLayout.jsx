import React from 'react'; 
import AccountsUI from '../accountsUI'; 

export const MainLayout = ({content}) =>(
	<div className="main-layout">
		<header>
			<h2>Orders</h2> 
			<nav>
				<AccountsUI />
			</nav>
		</header>
		<main>
			{ content }
		</main>
		<footer>
			<h2>Cindy Jacob</h2>
			<nav>
				<a href="https://github.com/cijacob/Managing-Grocery">Here, you can see my code, hosted with <i></i> by github</a>
			</nav>
		</footer>
	</div>
)