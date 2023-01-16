const {
    parseData,
    respond,
    calculateMean,
    calculateMedian,
    calculateMode
} = require('./helpers')

test('parsing the data should return ints', () => {
    data = '2,4,6,8'

    let res = parseData(data)
    expect(res[0]).toEqual(2)
})
test('testing mean of number', function () {
    data = [2, 4, 6, 8]
    let res = calculateMean(data)
    expect(res).toEqual(5)
})

describe('testing median', () => {

    test('even set of numbers', function () {
        data = [2, 7, 2, 5]
        let res = calculateMedian(data)
        expect(res).toEqual(3.5)
    })
    test('even odd of numbers', function () {
        data = [2, 7, 5]
        let res = calculateMedian(data)
        expect(res).toEqual(5)
    })
})
test('testing mode', function () {
    data = [2, 7, 2, 5]
    let res = calculateMode(data)
    expect(res).toEqual(2)
})

test('making response object', function () {
    let res = respond('mean', 5)
    ans =
        expect(res).toEqual({
            response: {
                operation: "mean",
                value: 5
            }
        })
})