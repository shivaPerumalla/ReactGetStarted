import React from 'react';
// Double the button's label on every click

export default function DoubleCounter() {
	const [counter, setCounter] = useState(5);
	return <button onClick={() => setCounter(counter*2)}>{counter}</button>;
}
