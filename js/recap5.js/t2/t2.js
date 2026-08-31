const requestURL = 'https://reqres.in/api/users';

async function createUser() {
  try {
    const response = await fetch(requestURL, {
      method: 'POST',

      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'free_user_3IflDaKki9LwSGGub90aMcGdjyu',
      },

      body: JSON.stringify({
        name: 'Milan',
        job: 'Student',
      }),
    });

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log('Error:', error);
  }
}

createUser();
