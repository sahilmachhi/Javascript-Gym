class users {
    constructor(email, password) {
        this.emailAddress = email;
        this.userPassword = password;
    }
    // The getter method is called when you try to access the property.
    // A getter is a special method within an object that allows you to retrieve the value of a property.
    // It is defined using the get keyword, followed by the property name, and a block of code that determines what happens when the property is accessed.

    get passwordUpperCase() {
        return this.userPassword.toUpperCase()
    }


    set(value) {
        value = this.userPassword.toUpperCase()
    }


    // The setter method is called when you try to assign a value to the property.
    // A setter is a special method within an object that allows you to set the value of a property.
    // It is defined using the set keyword, followed by the property name, and a block of code that specifies what happens when the property is assigned a new value.

    // set password(value) {
    //     return this._password = value.toUpperCase()
    // }
}

const user = new users("shailmachhi29@gmail.com", "12345678")
console.log(user);

// example 2 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

class rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    // get height(){
    //     return this._height
    // }
    // get width(){
    //     return this._width
    // }

    // set width(newWidth) {
    //     if(newWidth > 0) {
    //         newWidth = this._width;
    //     }
    //     else{
    //         console.log("set width perfectly")
    //     }
    // }
    // set height(newHeight) {
    //     if(newHeight > 0) {
    //         newHeight = this._height;
    //     }
    //     else{
    //         console.log("set height perfectly")
    //     }
    // }

}


const shape = new rectangle(22, 212)
// console.log(shape);