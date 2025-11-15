let mother = {
    name: "Priya Singh",
    age: 33,
    address: "Baner, Pune",
    city: "Pune",
};

let student = {
    name: "Pratik Patil",
    age: 15,
    standard: "10th",
    gender: "male",
    address: "Viman Nagar, Pune",
    section: "C",
};


mother.occupation = "Housewife";  //occpuation was not there so it gets added
mother.age = 34; // age was already there and now it gets updated

console.log({ mother, student });

let arr = [1, 2, 3];

console.log(typeof arr);  //gives object



// Create a vehicle object that has following properties: number of seats, top speed, milage, number of airbags

let vehicle1 = {
    noOfSeats: 5,
    topSpeed: 180,
    milage: 40,
    airbags: 6,
};

// Updating the number of seats
vehicle1.noOfSeats = 7;

// Adding property in Vehicle
vehicle1.colors = ["white", "black", "grey"];

console.log({ vehicle1 });


// Deleting the property in vehicle 
delete vehicle1.airbags

console.log(vehicle1);

// nested object
vehicle1.address = {
    addressLine1: "Aria Tower",
    addressLine2: "Baner",
    city: "Pune",
    State: "Maharashtra",
};

console.log(vehicle1);

console.log("City of vehicle address : ", vehicle1.address.city);


console.log("City of vehicle address : ", vehicle1?.addresss?.city);
// if we have some changes in the spelling it thows an error and then also says its undefined 'vehicle.addresss.city' 
// so to deal with this we put the '?' at the end of the every access name or exists or not so that it checks the only till the that 
// point if its not there then it simply give undefined only give undefined and does not throws an error 

// accessing a property that is not yet defined
console.log(vehicle1.name);

vehicle1.name = "Scorpio";



const vehicle2 = {
    name: "Thar",
    noOfSeats: 5,
    topSpeed: 180,
    milage: 40,
    colors: ["White", "Black", "Red"],
    address: {
        addressLine1: 'Aria Tower',
        addressLine2: 'Baner',
        city: 'Pune',
        State: 'Maharashtra'
    }
}


// array of objects
const vehicles = [vehicle1, vehicle2];
console.log({ vehicles });


// Question : Print name of the vehicle and its city from vehichles array

for (let i = 0; i < vehicles.length; i++) {
    console.log("Name of the vehicle is", vehicles[i]?.name, "& city is", vehicles[i]?.address?.city);
}



console.log("vehichle1.name", vehicle1.name);
console.log('vehicle1["name"]', vehicle1["name"]);


// for ... in loop in objects
console.log("Printing the vehicle1 object using for ... in loop");
for (let key in vehicle1) {
    console.log(key + ": " + vehicle1[key]);
}


// Object.keys(objName) gives the array of keys

const vehicleObjKeys = Object.keys(vehicle1);
const addressObjKeys = Object.keys(vehicle1.address);
console.log(vehicleObjKeys, addressObjKeys);



// Object.values(objName) gives the array of values

const vehicleObjvalues = Object.values(vehicle1);
const addressObjvalues = Object.values(vehicle1.address);
console.log(vehicleObjvalues, addressObjvalues);



// for ... of loop in objects
console.log("Printing the arrays of objects using for ... of loop");
for (let value of vehicles) {
    console.log(value);
}



// Change the value of city to Mumbai if city is Pune using for of loop

for (let value of vehicles) {
    if (value?.address?.city == "Pune") {
        value.address.city = "Mumbai";
    }
}
console.log(vehicles);


let vehicles3 = {
    name: "XUV700",
    noOfSpeed: 4,
    topSpeed: 180,
    currentSpeed: 100,
    mileage: 40,
    colors: ["white", "black", "grey"],
    address: {
        addressLine1: "Aria tower",
        addressLine2: "Baner",
        city: "Pune",
        state: "Maharashtra",
    },
    isRunning: function () {
        if (this.currentSpeed == 100) {
            console.log("XUV is running at a speed of : " + this.currentSpeed);
        } else 
        console.log("XUV is not running");
    },
};

vehicles3.isRunning();
vehicles3.currentSpeed = 0;
vehicles3.isRunning();


// Resume management system

const resume = {
    name : "Tejas",
    email : "tejas@gmail.com",
    phone : "1123456789",
    skills : ["Javascript", "HTML", "CSS"],
    workExperience: ["Tally", "SPPU"],
    display : function () {
        // display all the details of the resume in any format
  },
  addSkills: function(newSkill) {
    // add this new skill to the skills array
  },
  addWorkExperience : function (newExperience) {
    // add this new experience to work experience array
  },
  showSkills : function () {
    // show all the skills
  }
}