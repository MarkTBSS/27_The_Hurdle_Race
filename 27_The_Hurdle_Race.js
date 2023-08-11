function hurdleRace(k, height) {
    height.sort((a, b) => b - a)
    //console.log(height)

    var potionNeeded = 0
    if (k < height[0]) {
        potionNeeded = height[0] - k
    }
    
    return potionNeeded
}

var k = 7
var height = [2, 5, 4, 5, 2]
console.log(hurdleRace(k, height))

function hurdleRace2(k, height) {
    const highestHurdle = Math.max(...height);
    return Math.max(0, highestHurdle - k);
}

console.log(hurdleRace2(k, height))

function hurdleRace3(k, height) {
    return Math.max(0, Math.max(...height) - k);
}

console.log(hurdleRace3(k, height))