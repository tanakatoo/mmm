const express = require('express')
const {
    parseData,
    respond,
    calculateMean,
    calculateMedian,
    calculateMode
} = require('./helpers')

const app = express()

app.get('/mean', function mean(req, res) {
    const { nums } = req.query;

    let numsArr = parseData(nums)
    let mean = calculateMean(numsArr)
    let response = respond("mean", mean)
    res.json(response)
})

app.get('/median', function median(req, res) {
    const { nums } = req.query;

    let numsArr = parseData(nums)
    let median = calculateMedian(numsArr)
    let response = respond("median", median)

    return res.json(response)
})

app.get('/mode', function mode(req, res) {
    // {1:1, 3:1}
    const { nums } = req.query
    let numsArr = parseData(nums)
    console.log(numsArr)
    let mode = calculateMode(numsArr)
    let response = respond("mode", mode)
    return res.json(response)

})

app.use((error, req, res, next) => {
    res.status(error.status).send(error.msg)
})

app.listen(3000, () => {
    console.log('running on port 3000')
})

