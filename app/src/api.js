// functions for handling API interactions, data fetching, etc.


const testRoute = async (url) => { // test API fetching
  const response = await fetch(url);
  const data = await response.json();
  console.log('data:', data);
}

const url1 = 'https://randomuser.me/api/';
const url2 = 'https://randomuser.me/api/?inc=picture,gender,name,dob,location,email,phone,login';

const routeTest = () => {
  testRoute(url1);
  testRoute(url2);
};

const checkResponseStatus = () => {
  return fetch(url2)
      .then((response) => {
        console.log(response.status);
        console.log(response.ok);
        console.log(response.url);
          // grabbing the reponse from fetch and returning each 
          // property
      })
   }
  
const getUsers = () => {
    return fetch(url2)
        .then(response => {
            console.log(response.json());
            // parses the body of the response
        })
        .then(data => {
          const user = data.results[0]; // Assuming the response contains an array of results
            console.log('User:', user);
            console.log('Name:', user.name.first, user.name.last);
            console.log('Gender:', user.gender);
            console.log('Date of Birth:', user.dob.date);
            console.log('Location:', user.location.city, user.location.country);
            console.log('Email:', user.email);
            console.log('Phone:', user.phone);
            console.log('Login:', user.login.username);
        })
}

const renderUserInfo = (newUserSpace, users) => {
  users.forEach((user) => {
    const li = document.createElement("li");
    newUserSpace.append(li);
  newUserSpace.textContent = newUserInfo.gender;
})
}

export { routeTest, checkResponseStatus, getUsers, renderUserInfo }