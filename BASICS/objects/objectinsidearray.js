//objects inside array
//very useful in real world application

const users = [
{userID: 1, firstName:"prakhar" , gender:"male" },
{userID: 2, firstName:"prakhyat" , gender:"male" },
{userID: 3, firstName:"shikhar" , gender:"male" },
]

for(let user of users){
console.log(user);
}

//for accessing particular element

for(let user of users){
    console.log(user.firstName);
    }

    
    
