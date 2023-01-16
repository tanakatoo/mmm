const ErrorClass = require('./errorClass')

function calculateMean(numsArr,) {
    let total = 0
    for (let i = 0; i < numsArr.length; i++) {
        total += numsArr[i]
    }

    return total / numsArr.length

}

function parseData(data) {
    // nums is a string
    let numsArr
    if (data) {
        numsArr = data.split(',')
    } else {
        // there is no data
        throw new ErrorClass(`nums are required`, 400)
    }
    for (let i = 0; i < numsArr.length; i++) {
        // check that we can parseInt
        let toInt = parseInt(numsArr[i])

        if (!toInt) {
            throw new ErrorClass(`${numsArr[i]} is not a number`, 400)
        } else {
            numsArr[i] = toInt
        }
    }
    return numsArr
}

function calculateMedian(numsArr) {
    numsArr = numsArr.sort()

    let median = 0
    if (numsArr.length % 2 == 0) {
        //take the average of the 2 numbers
        let higher = (numsArr.length / 2)
        let lower = higher - 1
        median = (numsArr[lower] + numsArr[higher]) / 2
    } else {
        median = numsArr[Math.ceil(numsArr.length / 2) - 1]
    }
    return median

}


function calculateMode(numsArr) {
    let obj = {}
    for (let i = 0; i < numsArr.length; i++) {

        if (obj[numsArr[i]] != undefined) {
            // if it is in object, then add one otherwise, just add it to the obj
            obj[numsArr[i]] += 1
        } else {
            obj[numsArr[i]] = 1
        }
    }

    let mode = 0
    let largest = 0
    for (const key in obj) {
        if (obj[key] > largest) {
            largest = obj[key]
            mode = key
        }
    }

    return parseInt(mode)
}

function respond(operation, value) {
    let response = {
        response: {
            operation: operation,
            value: value
        }
    }
    return response
}

module.exports = {
    parseData: parseData,
    respond: respond,
    calculateMean: calculateMean,
    calculateMedian: calculateMedian,
    calculateMode: calculateMode
}