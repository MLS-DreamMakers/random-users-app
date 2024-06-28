// functions for handling API interactions, data fetching, etc.
import { app } from './components/home'
import { profiles } from "./components/user-profiles";

const testRoute = async (url) => { //testing data fetching from an API endpoint asynchronously using async/await;
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

const createUserCard = (usersObj, parentFrag) => {
  usersObj.forEach(user => {
    const userCardDiv = document.createElement("div"); //creating a div el for each user profile generated
    userCardDiv.className = "user-card"; //setting the id attribute of the ul element
    
    const img = document.createElement("img");
    img.id = "user-image"; //setting the img attribute id for each random user generated
    img.src = user.picture.large; //setting the img src attribute to be a random user profile pic

    const ul = document.createElement("ul"); //creating an unordered list to render user properties when fetched
    ul.className = "properties"; //setting the id attribute of the ul element

    const userCardProperties = [ //more readable- accessing each random user's api obj property values
      user.name.first,
      user.name.last,
      user.gender,
      user.dob.age,
      user.location.city,
      user.location.state
    ]
    userCardProperties.forEach(prop => { //iterating through properties arr to access each random user profiles properties
      const li = document.createElement("li");
      li.textContent = prop;
      ul.appendChild(li); //appending list item to the unordered list
    })
    userCardDiv.append(img, ul); //appending img el to div
    parentFrag.appendChild(userCardDiv); //appending entire div to doc fragment
  })
};

const createDropdownCard = (usersObj, parentFrag) => {
  usersObj.forEach(user => {
    const dropdownButton = document.createElement("button"); //create button for more info
    dropdownButton.id = "dropdown-button"; //setting attribute  of moreInfoButton
    dropdownButton.textContent = `Press for more content`; // setting text content of button

    const dropdownContainer = document.createElement("div"); //create container to hold more info from user
    dropdownContainer.className = "dropdown-container";

    dropdownContainer.append(dropdownButton); // appends more info button to appDiv

    dropdownButton.addEventListener('click', () => { // click event on more info button
      dropdownButton.remove(); // removes button upon click
      
      const ul = document.createElement("ul"); //creating an unordered list to render user properties when fetched
      ul.className = "properties"; //setting the id attribute of the ul elemen
      
      const mainProperties = [user.email, user.phone]; //storing user api obj key names in an arr
        mainProperties.forEach(prop => { //iterating through properties arr to access each random user profiles properties by the api obj key name
          const li = document.createElement("li"); //creating a list item for other properties
          li.textContent = prop; //setting text content based on user data availability from the api obj key/value pair
          ul.appendChild(li); // appends each of li to ul
          dropdownContainer.appendChild(ul); // appends each of li to dropdownContainer div
        })
        const personalInfoDiv = document.createElement("div"); //creating a div for locaction, username and password
        personalInfoDiv.className = "address-username-container"; //sets attribute of div
  
        const addressP = document.createElement("p");
        addressP.textContent = `My address is ${user.location.street.number} ${user.location.street.name}`
  
        const loginP = document.createElement("p");
        loginP.textContent = `If you need my login info for your database needs:`
  
        const credentialsP = document.createElement("p");
        credentialsP.textContent = `Username: ${user.login.username} Password: ${user.login.password}`

        personalInfoDiv.append(addressP, loginP, credentialsP);
        dropdownContainer.appendChild(personalInfoDiv); 
      });
    parentFrag.append(dropdownContainer); //appending fragment to given parentFrag arg in one operation
  });
};

const renderProfileInfo = (parentContainer, usersObj) => {
  parentContainer.innerHTML = ''; //clear previous html content
  const fragment = document.createDocumentFragment(); //creating a document fragment for efficient DOM manipulation when appending
  createUserCard(usersObj, fragment);
  createDropdownCard(usersObj, fragment);
  parentContainer.appendChild(fragment); //appending fragment to newProfiles in one operation
};

const getUsers = async () => { //fetching user data from url2 and rendering user info in the DOM
  try {
    const response = await fetch(defaultUrl); //fetch user data from url2
    if (!response.ok) { //guard clause for network response error
      throw new Error(`Failed to fetch data from the server. Network response was not ok (${response.status} ${response.statusText}).`); //logging detailed info about the error to the console
    }
    const data = await response.json(); //parsing response data as JSON
    const users = data.results; //extracting 'results' arr of users from fetched data
    
    const { userContainer, refresh } = profiles(app); //getting userContainer from profiles el component
    const getDropdownContainer = document.createElement("div"); //create container to hold more info from user
    getDropdownContainer.className = "dropdown-container";

    renderProfileInfo(userContainer, users); //render user info in userContainer    
    renderProfileInfo(getDropdownContainer, users); //render user info in userContainer    
    
    refresh.addEventListener('click', async () => {
      await getUsers(); //refresh user data on click, effectively getting a new user
    })
  } catch (error) {
    console.error('Error fetching users:', error);
  }
};

export { routeTest, getUsers }