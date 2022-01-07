import './App.css';
import Display from './app/components/Display';
import NumPad from './app/components/NumPad';
import Operators from './app/components/Operators';
import TopButtonBar from './app/components/TopButtonBar';

function App() {
	return (
		<div className='App'>
			<div id='calc-container'>
				<Display />
				<TopButtonBar />
				<div className='container'>
					<NumPad />
					<Operators />
				</div>
			</div>
		</div>
	);
}

export default App;
