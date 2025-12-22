// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123ak"
tinderUser.name = "AK"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Dev",
            lastname: "Akif"
        } 
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "c", 6: "d"}

// const obj3 = {obj1, obj2} // it combines object inside another object which looks like 2 or more objects inside the outcome object rather then merging all of the values of both objects 

// const obj3 = Object.assign({}, obj1, obj2, obj4) // object.assign method is used to merge 2 or more objects inside another object, this method requires a target object as a parameter and source objects source objects can be more than 2  (note => giving a target object is not always required but it is a good habit and best practice to specify )

const obj3 = {...obj1, ...obj2, ...obj4} 
// console.log(obj3);

const users = [
    {
        id: "1",
        name: "James"
    },
    {
        id: "1",
        name: "James2"
    },
    {
        id: "1",
        name: "James3"
    }
]

// console.log(users[1]?.name);
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // it returns all the keys combining them in a single array
// console.log(Object.values(tinderUser)); // it returns all the values combining them in a single array
// console.log(Object.entries(tinderUser)); // it returns a key value pair in a merged array inside another array => [ [ 'id', '123ak' ], [ 'name', 'AK' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty("isLoggedOut"));

const course = {
    courseName: "JS in Hindi",
    coursePrice: "999",
    courseInstructor: "Akif"
} 

// console.log(course.courseInstructor)

const {courseInstructor: instructor} = course
// console.log(instructor);

// {
//     "name": "Akif",
//     "courseName": "JS in Hindi",
//     "price": "free"
// }

// [
//     {},
//     {},
//     {},
//     {}
// ]

// const arr = [1,2,3,4,5]
// console.log(arr);

// // arr.length = 0
// arr.splice(0, arr.length)
// console.log(arr);

const arr = [];

arr["name"] = "Akif";
arr["age"] = 23;

console.log(arr)
