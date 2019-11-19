// Write your solution here!
let drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name){
    drivers.push(name)
    return drivers
}

function destructivelyPrependDriver(name){
    drivers.unshift(name)
    return drivers
}

function destructivelyRemoveLastDriver(){
    return drivers.pop()

}

function destructivelyRemoveFirstDriver(){
    return drivers.shift()
}

function appendDriver(name){
    let newDriver = [...drivers, name]
    return newDriver
}

function prependDriver(name) {
    let newDriver = [name, ...drivers]
    return newDriver
}

function removeLastDriver() {
    let newArray = [...drivers.slice(0, drivers.length - 1) ]
    return newArray
}

function removeFirstDriver() {
    let newArray = [...drivers.slice(1, drivers.length) ]
    return newArray 
}