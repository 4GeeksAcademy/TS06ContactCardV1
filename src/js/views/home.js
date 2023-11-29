import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () =>
{const { store, actions } = useContext(Context)
console.log(store)
return(

	<div className="text-center mt-5">
		<Link to="/addcontact">
					<button className="btn btn-success">Add New Contact</button>
				</Link>
		{store.contacts.map((contactList,i)=>{
			return(
				<div key={i}>
				<h1>Full Name: {contactList.full_name}</h1>
				<h2>Phone: {contactList.phone}</h2>
				<h2>Adress: {contactList.adress}</h2>
				<h2>Email: {contactList.email}</h2>
				</div>
			);
		})}
		
	</div>
);
}