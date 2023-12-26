// class => object 

// instance properties: what they have

        // name 

        // age 

        // phone 

        // email 

//  instance methods: what they do

        // talk 

        // run 

        // jump


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// example 1 

class username {
//    setup 
constructor() {
    console.log("username is created");
}
};

const user = new username()

// example 2

class username1 {
    constructor(_name, _height, _email) {
        this.name = _name;
        this.height = _height;
        this.email = _email;
    }

    introduction() {
        console.log(`I am ${this.name} and my email is ${this.email} and my height is ${this.height}`);
    }
}

const user1 = new username1("Sahil",165,"sahilmachhi29@gmail.com")
const user2 = new username1("Dilipkumar",170,"dr.dilip40@gmail.com")
console.log(user1,user2);

console.log(user1.introduction(),user2.introduction());