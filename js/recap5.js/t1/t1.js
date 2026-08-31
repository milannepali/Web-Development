const requestURL = 'https://reqres.in/api/users/1';

async function getUser() {
  try {
    const response = await fetch(requestURL, {
      headers: {
        'x-api-key': 'free_user_3IflDaKki9LwSGGub90aMcGdjyu',
      },
    });

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log('Error:', error);
  }
}

getUser();
