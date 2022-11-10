import { useState } from 'react';
import { useEffect } from 'react';
import React from 'react';

function Foaas() {
	const [data, setData] = useState([]);
	useEffect(() => {
		fetch("https://foaas.com/off/Thomas/Enguerrand")
		.then(response => response.json())
		.then((data) => console.log(data));
	}, [])
	return (
		<div>
			fhgiughoiuhiouhio
			<input type='button'></input>
		</div>
	);}



export default Foaas;
