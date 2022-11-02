import logo from './logo.svg';
import Foaas from './Foaas';
import './App.css';


function App() {
	fetch("https://foaas.com/off/Thomas/Enguerrand")
	.then(response => response.json())
	.then((data) => console.log(data));
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<form>
					<input type="text" name='nom1'placeholder='De'/>
 <br/>
					<input type="text" name='nom2'placeholder='Pour'/>
					<br/>
					<input type="button" value='submit'onClick={Foaas}/>
				</form>
			</header>


		</div>
	);
}








export default App;
