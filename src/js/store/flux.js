// import { redirect } from "react-router";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: { 
			name:null,
			email:null,
			address:null,
			phone:null,

			contacts:[ 
				
			],
			demo: [
				{
					title: "FIRST dfwofunweofnweroiner",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND dfvefverfvedcwfbvgb",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadContactList: () => {
			
					fetch("https://playground.4geeks.com/apis/fake/contact/agenda/TS06")
					.then((resp)=>resp.json())
					.then(data => setStore({ "contacts": data }))


			
			},
			createContactList: async (name, email, address, phone) => {
				try {
				  const response = await fetch("https://playground.4geeks.com/apis/fake/contact/", {
					method: "POST", // Use POST to add a new contact
					headers: {
					  "Content-type": "application/json",
					},
					body: JSON.stringify({
					  "full_name": name,
					  "email": email,
					  "agenda_slug": "TS06",
					  "address": address,
					  "phone": phone,
					}),
				  });
				  const data = await response.json();
				  // Update the contacts array in the store with the new contact
				  setStore((prevState) => ({
					contacts: [...prevState.contacts, data],
				  }));
				//   redirect <Link to="/"> 
				} catch (error) {
				  console.error("Error adding contact:", error);
				}
			  },
			},
		  
			loadSomeData: () => {
				
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};


export default getState;
