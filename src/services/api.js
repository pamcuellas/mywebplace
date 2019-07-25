import axios from 'axios';

/**
* A wrapper around axios API call the formats erros, etc
* @param {string} method the HTTP verb you want to use (GET, POST, DELETE, etc)
* @param {string} path route path / endpoint 
* @param {object} data (optional) data in JSON form for POST requests 
*/
export function apiCall( method, path, data ) {
	return new Promise( ( resolve, reject ) => {
		return axios( { method: method.toLowerCase(),
						url: path, 
						headers: {'Access-Control-Allow-Origin': '*',
								  'Content-Type': 'application/json'
								}, 
						data: JSON.stringify(data)
			})
			.then(res => { 								// Where "data" comes from? The idea here is that when we get back information from AXIOS 
				return resolve (res.data);				// It always comes in a certain object. In this case it is going to come in an object called 
			}).catch(err => {							// "response" and a sub object called data when something goes wrong inside of data we have the 
				console.log("ERROR, ", err);
				return reject(err); // sub object called error.
			});
	});
}

export function	createReq( resource ) {
		apiCall("post", process.env.REACT_APP_PAMZCAPI_REQUEST, { resource: resource })
				.then(( data ) => { 
					// console.log("HERE IS THE RESULT ==> ", data);
					if (data._id !== undefined) {
						//console.log("Resource access successfully registered with _id=" +  data._id);
					} else if (data.message !== undefined) {
						console.log("Something goes wrong [ " +  data.message + "]."); 
					} else {	
						console.log("Something really goes wrong.");
					}
				} ) 	
				.catch( err => { 
					console.log("Something really really was wrong " + err.message);
				});
	}			
