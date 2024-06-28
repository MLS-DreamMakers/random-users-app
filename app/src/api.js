// functions for handling API interactions, data fetching, etc.
import { app } from './components/home'
import { profiles } from "./components/user-profiles";

const testRoute = async (url) => { //testing API fetching asynchronously using async/await
  try {
    const response = await fetch(url); //fetch data from a given URL
    if (!response.ok) { //guard clause in case failure to fetch
      throw new Error(`Failed to fetch data from ${url}. Status: ${response.status} ${response.statusText}`);
    }
    const data = await response.json(); //parse response data as JSON
    console.log('data:', data); //log the fetched data to console
  } catch (error) {
    console.error('Error fetching data:', error); //handle and log any errors that occur during fetching
    throw error; //rethrow to propagate the error to the caller
  }
};

const baseUrl = 'https://randomuser.me/api/';
const defaultUrl = 'https://randomuser.me/api/?inc=picture,gender,name,dob,location,email,phone,login';

const routeTest = async () => { //testing api routes asynchronously to avoid sequential wait time
  await testRoute(baseUrl);
  await testRoute(defaultUrl);
};

const renderUserInfo = (newUserSpace, users) => {
  newUserSpace.innerHTML = ''; //clear previous html content
  const fragment = document.createDocumentFragment(); //creating a document fragment for efficient DOM manipulation when appending

  users.forEach(user => {
    const div = document.createElement("div"); //creating a div el for each user profile generated
    const img = document.createElement("img");
    const ul = document.createElement("ul"); //creating an unordered list to render user properties when fetched

    div.setAttribute("id", "user-container"); //setting the id attribute of the ul element
    ul.setAttribute("id", "properties"); //setting the id attribute of the ul element
    img.setAttribute("id", `user-image`); //setting the img attribute id for each random user generated
    img.setAttribute("src", user.picture.large); //setting the img src attribute to be a random user profile pic

    const properties = ['first', 'last', 'gender', 'age', 'city', 'state']; //storing user api obj key names in an arr
    properties.forEach(prop => { //iterating through properties arr to access each random user profiles properties by the api obj key name
      const li = document.createElement("li"); //creating a list item for each property
      li.textContent = user.name[prop] || user.dob[prop] || user.location[prop]; //setting text content based on user data availability from the api obj key/value pair
      ul.appendChild(li); //appending list item to the unordered list
    });
    div.appendChild(img); //appending img el to div
    div.appendChild(ul); //appending entire unordered list to div

    const moreInfoButton = document.createElement("button"); //create button for more info
    const moreInfoContainer = document.createElement("div"); //create container to hold more info from user
    moreInfoContainer.setAttribute("id", "more-info-container");

    const appDiv = document.querySelector('#app'); //  selects app div so that the extra info is seperated
    
    appDiv.append(moreInfoContainer);

    moreInfoContainer.append(moreInfoButton); // appends more info button to appDiv
    moreInfoButton.style.margin = "20px" // styled through javascript
    moreInfoButton.setAttribute("id", "more-info-button"); //setting attribute  of moreInfoButton
    moreInfoButton.textContent = `Press for more content` // setting text content of button


    moreInfoButton.addEventListener('click', () => { // click event on more info button

        moreInfoButton.remove(); // removes button upon click
        console.log('Button has been clicked!'); // logging to the console as test
        const properties2 = ['email', 'phone']; //storing user api obj key names in an arr

        properties2.forEach(prop => { //iterating through properties arr to access each random user profiles properties by the api obj key name
            const li = document.createElement("li"); //creating a list item for other properties
            li.setAttribute("id", "more-properties") //setting attribute for both elements to be selected properly
            li.textContent = user[prop] || user[prop]; //setting text content based on user data availability from the api obj key/value pair
            moreInfoContainer.appendChild(li); // appends each of li to appDiv
        })
        // Here you can define what happens when the image is clicked
        // For example, you can generate more user info or perform any other action

        const div = document.createElement("div"); //creating a div for locaction, username and password
        div.setAttribute("id", "address-username-container"); //sets attribute of div

        const p = document.createElement("p"); //creating a p for different text content
        const p2 = document.createElement("p"); //creating a p for different text content
        const p3 = document.createElement("p"); // creating a p for every section of text 

        p.textContent = `My address is ${user.location.street['number']} ${user.location.street['name']}`
        p2.textContent = `If your need my login for your database needs:`
        p3.textContent = ` Username: ${user.login['username']} Password: ${user.login['password']}`

        div.append(p,p2,p3);
        appDiv.appendChild(div); 

        console.log('User information:', users); // Example: Log user information to console
        // You can extend this to display more user information or perform any desired action
      });
    fragment.appendChild(div); //appending entire div to doc fragment


  });

  
  newUserSpace.append(fragment); //appending fragment to newUserSpace in one operation
};

const getUsers = async () => { //fetching user data from url2 and rendering user info in the DOM
  try {
    const response = await fetch(defaultUrl); //fetch user data from url2
    if (!response.ok) { //guard clause for network response error
      throw new Error(`Failed to fetch data from the server. Network response was not ok (${response.status} ${response.statusText}).`); //logging detailed info about the error to the console
    }
    const data = await response.json(); //parsing response data as JSON
    const users = data.results; //extracting 'results' arr of users from fetched data
    const { newUserSpace, refresh } = profiles(app); //getting newUserSpace from profiles el component
    renderUserInfo(newUserSpace, users); //render user info in newUserSpace
    
    refresh.addEventListener('click', async () => {
      getUsers(); //rfresh user data on click, effectively getting a new user
    })
  } catch (error) {
    console.error('Error fetching users:', error);
  }
};

export { routeTest, getUsers }