function get_new_car() {
  return {
    city: 'Toronto',
    passengers: 0,
    gas: 100
  }
}

function add_car(cars, new_car) {
  cars.push(new_car)
  return `Adding new car to fleet. Fleet size is now ${cars.length}.`
}
