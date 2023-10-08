///***|CLASS FOR CALCULATION OF UBER PRICE|***/

//taking values of different services of uber as class and its properties//
class Uber_basefare {
  constructor(fare) {
    (this.b_uber_X = 2), (this.b_uber_XL = 3), (this.b_buber_select = 5);
    this.b_buber_black = 15;
    this.b_buber_SUV = 15;
  }
}
class Uber_cost_per_minute extends Uber_basefare {
  constructor(fare) {
    super();
    (this.m_uber_X = 0.22), (this.m_uber_XL = 0.3), (this.m_uber_select = 0.5);
    this.m_uber_black = 0.65;
    this.m_uber_SUV = 0.9;
  }
}
class Uber_cost_per_mile extends Uber_cost_per_minute {
  constructor(fare) {
    super();
    (this.mi_uber_X = 1.15),
      (this.mi_uber_XL = 2),
      (this.mi_uber_select = 2.75),
      (this.mi_uber_black = 3.75),
      (this.mi_uber_SUV = 3.75);
  }
}
class Uber_booking_cost extends Uber_cost_per_mile {
  constructor() {
    super();
    (this.bk_uber_X = 1.55),
      (this.bk_uber_XL = 1.55),
      (this.bk_uber_select = 2.75);
  }
}
//**this class is used to book a uber_X service**//
class Uber_fare extends Uber_booking_cost {
  constructor(minutes, distance) {
    super();
    (this.minutes = minutes), (this.distance = distance);
  }
  uber_cost() {
    let cost =
      this.b_uber_X +
      this.m_uber_X * this.minutes +
      this.bk_uber_X * this.distance +
      this.bk_uber_X;
    console.log(cost.toFixed(2));
  }
}
//**enter your minutes and distance here **//
const totalcost = new Uber_fare(20, 20);
totalcost.uber_cost();

/// https://ridelancer.com/how-much-does-uber-cost////
