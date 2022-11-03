// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    // if (someValue >= 42) {
    //     return someValue - 42
    // } else {
    //     return 42 - someValue
    // }

    let distance = someValue - 42
    if(distance < 0) {
        distance *= -1
    }
 

    return distance

}

function distanceFromHqInFeet(street) {
    
    return Math.abs(street - 42) *264

}
function distanceTravelledInFeet(start, finish){
    return Math.abs(start - finish) *264
}

function calculatesFarePrice(start, destination) {
    let result= distanceTravelledInFeet(start, destination)
    if (result <= 400){
        return 0
    }
    else if (result > 400 && result <=2000) {
        return (result-400) *0.02
    }
    else if (result >2000 && result <2500) {
        return 25
    }
    else return 'cannot travel that far'

}