
// An event listener that sends the user to the fruit page when a fruit is clicked
// The function takes the fruit as an argument
export function sendToFruitPage(fruit) {
  // Get the element div with the fruit name as the id
  const fruitEvent = document.getElementById(`${fruit.name}`);
  // Add an event listener to the element
  if (fruitEvent) {
    // When the element is clicked, the user is sent to the fruit page with the fruit name as a query parameter
    fruitEvent.addEventListener('click', () => {
      const urlParam = new URLSearchParams({ fruit: fruit.name }).toString();
      window.location.href = `fruit-page/fruit.html?${urlParam}`;
    });
  } else {
    console.error(`Element with id ${fruit.name} not found.`);
  }
}