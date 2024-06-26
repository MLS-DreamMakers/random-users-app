// functions for handling API interactions, data fetching, etc.
import { header} from './components/home';

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
  
const getUsers = () => {
    return fetch(url2)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const users = data.results; // Assuming 'results' contains an array of users
            const parentElement = document.querySelector('#app');
            const { newUserSpace } = header(parentElement);
            renderUserInfo(newUserSpace, users);
        })
}

const renderUserInfo = (newUserSpace, users) => {
  newUserSpace.innerHTML = ''; // Clear previous content if any

  users.forEach(user => {
      const li = document.createElement("li");
      const div = document.createElement("div");
      const img = document.createElement("img");
      
      img.setAttribute("id", `user-image`);
      img.setAttribute("src", `${user.picture.large}`)
      // sets image to user's image

      const first = document.createElement("li");
      first.setAttribute("id", "properties");
      const last = document.createElement("li");
      last.setAttribute("id", "properties");
      const gender = document.createElement("li");
      gender.setAttribute("id", "properties");
      const age = document.createElement("li");
      age.setAttribute("id", "properties");
      const city = document.createElement("li");
      city.setAttribute("id", "properties");
      const state = document.createElement("li");
      state.setAttribute("id", "properties");

      first.textContent = `${user.name.first}`
      last.textContent =  `${user.name.last}` 
      gender.textContent = `${user.gender}`
      age.textContent =`${user.dob.age}`  
      city.textContent =`${user.location.city}` 
      state.textContent = `${user.location.state}`;

      // grabs all of the information from user
      div.append(img);
      newUserSpace.append( 
        div,
        first,
        last,
        age,
        city,
        state
      )
   })
   
      refresh.addEventListener('click', () => {
        userContainer.append(newUserSpace);
      })
};




export { routeTest, getUsers, renderUserInfo }