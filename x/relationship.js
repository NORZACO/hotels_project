const User = require('./User');
const Room = require('./Room');
const Reservation = require('./reservation');
const Rate = require('./rate');
const Price = require('./price');
const Location = require('./locations');

// User and Room are associated with each other
User.hasMany(Room); // A User can have many Rooms
Room.belongsTo(User); // A Room belongs to one User

// Room and Reservation are associated with each other
Room.hasMany(Reservation); // A Room can have many Reservations
Reservation.belongsTo(Room); // A Reservation belongs to one Room

// Reservation and User are associated with each other
Reservation.belongsTo(User); // A Reservation belongs to one User
User.hasMany(Reservation); // A User can have many Reservations

// Room and Rate are associated with each other
Room.hasMany(Rate); // A Room can have many Rates
Rate.belongsTo(Room); // A Rate belongs to one Room

// Room and Price are associated with each other
Room.hasMany(Price); // A Room can have many Prices
Price.belongsTo(Room); // A Price belongs to one Room

// Location and Room are associated with each other
Location.hasMany(Room); // A Location can have many Rooms
Room.belongsTo(Location); // A Room belongs to one Location


