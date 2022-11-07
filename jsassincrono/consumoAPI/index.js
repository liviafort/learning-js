const axios = require("axios");

/*axios.get("https://jsonplaceholder.typicode.com/todos/1").then((response) =>{
  console.log({ data: response.data });
}).catch((error) =>{
  console.log({error});
});*/

const fetchApi = async () =>{
  const {data} = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
  console.log( {data} );
}
fetchApi();