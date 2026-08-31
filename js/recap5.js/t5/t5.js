const restaurantURL =
  'https://media2.edu.metropolia.fi/restaurant/api/v1/restaurants';

const restaurantContainer = document.querySelector('#restaurants');
const modal = document.querySelector('#restaurantModal');
const modalContent = document.querySelector('#modalContent');
const closeButton = document.querySelector('#closeButton');

async function fetchData(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Could not load data');
  }

  return response.json();
}

async function getRestaurants() {
  try {
    const restaurants = await fetchData(restaurantURL);

    console.log(restaurants);

    restaurants.forEach((restaurant) => {
      const restaurantDiv = document.createElement('div');

      restaurantDiv.classList.add('restaurant');

      restaurantDiv.innerHTML = `
                <h2>${restaurant.name}</h2>
                <p>${restaurant.address}</p>
                <p>${restaurant.city}</p>
            `;

      restaurantDiv.addEventListener('click', () => {
        showRestaurant(restaurant);
      });

      restaurantContainer.appendChild(restaurantDiv);
    });
  } catch (error) {
    console.error('Error:', error);

    restaurantContainer.innerHTML = '<p>Could not load restaurants.</p>';
  }
}

async function showRestaurant(restaurant) {
  try {
    const menuURL = `https://media2.edu.metropolia.fi/restaurant/api/v1/restaurants/daily/${restaurant._id}/fi`;

    const menu = await fetchData(menuURL);

    let menuHTML = '';

    if (menu.courses && menu.courses.length > 0) {
      menu.courses.forEach((course) => {
        menuHTML += `
                    <li>
                        ${course.name}
                        ${course.price ? '- ' + course.price : ''}
                    </li>
                `;
      });
    } else {
      menuHTML = '<li>No menu available today.</li>';
    }

    modalContent.innerHTML = `
            <h2>${restaurant.name}</h2>

            <p>
                <strong>Address:</strong>
                ${restaurant.address}
            </p>

            <p>
                <strong>City:</strong>
                ${restaurant.city}
            </p>

            <p>
                <strong>Company:</strong>
                ${restaurant.company || 'No information'}
            </p>

            <h3>Today's Menu</h3>

            <ul>
                ${menuHTML}
            </ul>
        `;

    modal.showModal();
  } catch (error) {
    console.error('Error:', error);

    modalContent.innerHTML = `
            <h2>${restaurant.name}</h2>

            <p>${restaurant.address}</p>

            <p>Could not load today's menu.</p>
        `;

    modal.showModal();
  }
}

closeButton.addEventListener('click', () => {
  modal.close();
});

getRestaurants();
