//nested destructuring

const users = [
    {userID: 1, firstName:"prakhar" , gender:"male" },
    {userID: 2, firstName:"prakhyat" , gender:"male" },
    {userID: 3, firstName:"shikhar" , gender:"male" },
]

// destructuring from array
const [user1 , user2, user3] = users;
console.log(user1);

//destructuring from objects

const [{firstName:user1firstName}, ,{gender}] = users;

console.log(user1firstName);
console.log(gender);
