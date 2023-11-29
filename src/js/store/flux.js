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
			createContactList: (name, email, address, phone) => {
			
				fetch("https://playground.4geeks.com/apis/fake/contact/", {
					methods:"POST",
					headers:{"content-type":"application/json"},
					body:JSON.stringify({
						"full_name": name,
						"email": email,
						"agenda_slug": "TS06",
						"address":address,
						"phone":phone
					})
				})
				.then((resp)=>resp.json())
				// .then(data => setStore({ "contacts": data }))

				
		
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
};

export default getState;
