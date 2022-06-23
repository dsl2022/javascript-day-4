Activity: Array Iterator Practice
5 Trophy Games is looking to boost their user profile pages and add some perks for different users. The marketing team prefers to have some simple lists of user data requested, and it's your job to get that data to them.

In this activity, we will use the iterators .forEach, .map, and .filter to solve a variety of array-centric challenges.

For each challenge, you will need to determine the best iterator for the job.

For each of the following exercises, use this array as an example of what users could be.

```
let users = [
    { id: 1, firstName: 'Azami', lastName: 'Bazia', age: 18 },
    { id: 2, firstName: 'Elliot', lastName: 'Noor', age: 23 },
    { id: 3, firstName: 'Samir', lastName: 'Zahara', age: 7 },
    { id: 4, firstName: 'Idris', lastName: 'Christenson', age: 16 },
]
```

undefinedClick here to copy

1. getFirstNames
   In the function below, return an array of strings, the first names of each user in the users array.

```
function getFirstNames(users){

}

console.log(getFirstNames(users))
```

2. getFullNames
   In the function below, return an array of strings, the full names of each user in the users array.

```
function getFullNames(users){
return users.map((user) => {return '${user.firstName} ${user.lastName}'
}

console.log(getFullNames(users))
```

3. getTeenagers
   In the function below, return an array of users whose age is between 13 and 18 (inclusive).

```
function getTeenagers(users){
    return users.filter(user=>{
    	return(user.age > 13 && user.age< 18)

    })
}

console.log(getTeenagers(users))
```

4. getChildren
   In the function below, return an array of users whose age is less than 13.

```
function getChildren(users){

}

console.log(getChildren(users))
```

5. getAges
   In the function below, return an array of numbers, the ages of each user in the users array.

```
function getAges(users){

}

console.log(getAges(users))
```

6. getOldest
   In the function below, return a user object, the oldest user from the array.

This one can be pretty tricky, so change moreHelp to true in the code below to receive more detailed hints.

```

let moreHelp = false;

function getOldest(users){

}

console.log(getOldest(users))
```

7. getFavoriteColorList
   getFavoriteColor is a function already defined in the code exercise below. It accepts a user object as an argument, and returns that user's favorite color as a string.

In the function below, return an array of strings, the favorite colors for each .

```

function getFavoriteColorList(users){

}

console.log(getFavoriteColorList(users))

```

8. getInitials
   In the function below, return an array of strings, the initials of each user in the users array.

If you are struggling to get the first letter of each name, this article from MDN might be a good place to start.

```

function getInitials(users){

}

console.log(getInitials(users))

```

9. getAdults
   In previous lessons, we have seen different types of functions.

arrow functions, a type introduced in ES2015 JavaScript, require less code to define and are therefore quite useful for things like iterators.

```
// Function declaration:
users.map(function(user){
    return 13 <= user.age && user.age <= 19
})

// Arrow function:
users.map( user => 13 <= user.age && user.age <= 19)

```

Note: When you define an arrow function without curly braces ({}) it can only be 1 line long, and that line is automatically returned (you do not need to write return x).

In the function below, return an array of users whose age is higher than 18.

For your callback function, use a single-line arrow function without parentheses around its parameter.

```
function getAdults(users){

}

console.log(getAdults(users))

```

10. getLastNames
    In the function below, return an array of strings, the last names of each user in the users array.

For your callback function, use a single-line arrow function without parentheses around its parameter.

```
function getLastNames(users){

}

console.log(getLastNames(users))

```

Bonus: getById
In the function below, return a single user object: the user whose id matches getById's parameter id.

The best iterator for this type of problem is one we have not covered; [review this list of array methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) from MDN to find the best iterator for retrieving a single element from an array based on a condition.

```
function getById(users, id){

}

console.log(getById(users, 3))

```
