// Code your solution here
//returns all drivers that match the passed in name
// let findMatching = drivers.filter(function(thing, string){
//     let string = thing.name.toUpperCase();
//   return thing.name === string
// })

// function findMatching(drivers,"") {
//     drivers.filter(function(name){
//         return name === ''
//     })
// }

const drivers = [{
    name: "bobby",
    hometown: "maytown"
},
{
    name: "xavi",
    hometown: "seattle"
},
{
    name: "manny",
    hometown: "austin",
},
{
    name: "beavis",
    hometown: "?",
}
]

function findMatching(drivers, string) {
    return drivers.filter(function(name){
        return name.toLowerCase() === string.toLowerCase()
    })
}

function fuzzyMatch(drivers, string) {
    return drivers.filter(function(name){
        return name.slice(0,2) === string.slice(0,2);
        })
}

function matchName(drivers, string) {
    return drivers.filter(function(object){
        return object.name === string
    })
}