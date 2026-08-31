async function fetchData(url, options) {
  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error('Request failed: ' + response.status);
  }

  return response.json();
}

async function createUser() {
  try {
    const user = {
      name: 'Milan Nepali',
      job: 'Developer',
    };

    const url = 'https://reqres.in/api/users';

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'free_user_3IflDaKki9LwSGGub90aMcGdjyu',
      },
      body: JSON.stringify(user),
    };

    const userData = await fetchData(url, options);

    console.log(userData);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

createUser();
