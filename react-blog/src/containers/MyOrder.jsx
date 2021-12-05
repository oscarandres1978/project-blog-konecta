import React, {useContext} from 'react';
import OrderItem from '../components/OrderItem';
import AppContext from '../context/AppContext';
import '../styles/MyOrder.scss';
import arrow from '../assets/icons/flechita.svg';

const MyOrder = () => {
	const {state} = useContext(AppContext);
	const sumTotal = () => {
		const reducer = (accumulator, currentValue)=> accumulator + currentValue.price;
		const sum = state.cart.reduce(reducer, 0);
		return sum;

	}
	return (
		<aside className="MyOrder">
			<div className="title-container">
				<img src={arrow} alt="arrow" />
				<p className="title">My likes</p>
			</div>
			<div className="my-order-content">
				{state.cart.map(product => (
					<OrderItem product={product} key={`orderItem-${product.id}`} />
				))}
				
				
			</div>
		</aside>
	);
}

export default MyOrder;