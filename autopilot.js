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

function pick_up_passenger(car) {
  car['passengers'] += 1;
  car['gas'] -= 10;
  return `Picked up passenger. Car now has ${car['passengers']} passengers.`
}

function get_destination(car) {
  if (car['city'] == 'Toronto') {
    return 'Mississauga';
  } else if (car['city'] == 'Mississauga') {
    return 'London'
  } else if (car['city'] == 'London') {
    return 'Toronto'
  }
}

function fill_up_gas(car) {
  const old_gas = car['gas'];
  car['gas'] = 100;
  return `Filled up to ${get_gas_display(car['gas'])} on gas from ${get_gas_display(old_gas)}.`
}

function get_gas_display(gas_amount) {
  return `${gas_amount}%`
}

function drive(car, city_distance) {
  if (car['gas'] < city_distance) {
    return fill_up_gas(car)
  }
  car['city'] = get_destination(car);
  car['gas'] -= city_distance
  return `Drove to ${car['city']}. Remaining gas: ${get_gas_display(car['gas'])}.`
}

function drop_off_passengers(car) {
  const previous_passengers = car['passengers'];
  car['passengers'] = 0;
  return `Dropped off ${previous_passengers}.`
}
