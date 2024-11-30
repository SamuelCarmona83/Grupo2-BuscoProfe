import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";


export const Home = () => {
	const { store, actions } = useContext(Context);

	return <div className="my-container mt-3">
		<div className="info">
		<h5>Info</h5>
		<p>Aquí podrás, como estudiante, encontrar un profe que se adapte a tus necesidades.
			Y como profe, podrás dar clases del tema que te apasiona!
		</p> 
		</div>
		<div className="my-card">
		<div className="button btn-danger mt-5 w-25"><h5>Quiero enseñar</h5></div>
		<div className="button btn-danger mt-5 w-25"><h5>Quiero aprender</h5></div>
		<div className="button btn-danger mt-5 w-25"><h5>Quienes somos</h5></div>
		</div>
	</div>


};

