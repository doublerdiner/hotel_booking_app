use hotel;
db.dropDatabase();

db.bookings.insertMany([
    {
       name: "Laura Palmer",
       email: "laura@twinpeakshigh.com",
       date: "2023-03-22",
       checkedIn: false,
    }, 
    {
       name: "Dale Cooper",
       email: "dcooper@fbi.com",
       date: "2023-03-20",
       checkedIn: true,
    }, 
    {
       name: "James Hurley",
       email: "james@twinpeakshigh.com",
       date: "2023-03-15",
       checkedIn: true,
    }, 
    {
       name: "Bobby Briggs",
       email: "Bobby@twinpeakshigh.com",
       date: "2023-03-12",
       checkedIn: false,
    }, 
    {
       name: "Gordon Cole",
       email: "gcole@fbi.com",
       date: "2023-03-22",
       checkedIn: true,
    }
]);