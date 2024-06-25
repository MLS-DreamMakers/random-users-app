//functions for handling API interactions, data fetching, etc.

const testRoute = async (url) => { //test API fetching
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

export { routeTest };