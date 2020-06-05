import { getDistance, initDistanceDetector } from './distance'

function simulateClick(x = 0, y = 0) {
    const event = new MouseEvent('click', { clientX: x, clientY: y })
    document.dispatchEvent(event)
}
function simulateMouseOver(x = 0, y = 0) {
    const event = new MouseEvent('mouseover', { clientX: x, clientY: y })
    document.dispatchEvent(event)
}
describe('Distance Detector', function () {

    describe('getDistance', function () {

        it('should get distance between zero points', function () {
            const pointA = { x: 0, y: 0 }
            const pointB = { x: 0, y: 0 }
            const result = getDistance(pointA, pointB)
            expect(result).toBe(0)
        })

    })

    describe('initDistanceDetector', function () {

        const spy = jest.fn()
        let cleanup = function () { }

        beforeEach(function () {
            spy.mockReset()
        })

        afterEach(function () {
            cleanup()
        })

        it('should not react to mouseover', function () {
            cleanup = initDistanceDetector({ callback: spy })
            simulateMouseOver(0, 0)
            expect(spy).not.toHaveBeenCalled()
        })
                
        it('should return error message when at least one of the coordinates is not a number', function () {
            expect(() => { getDistance({ x: 'A', y: 100 }, { x: 100, y: 100 })}).toThrow();
        })

        it('should return error message when all of the coordinates are not numbers', function () {
            expect(() => { getDistance({ x: 'A', y: true }, { x: false, y: { b: 10 }}) }).toThrow();
        })

        it('should return 0 distance when both parameters have same coordinates', function () {
            expect(getDistance({ x: 20, y: 10 }, { x: 20, y: 10 })).toBe(0)
        }) 

        it('should react to clicks', function () {
            cleanup = initDistanceDetector({ callback: spy })
            simulateClick(0, 0)
            expect(spy).toHaveBeenCalled()
        })

        it('should display distance between zero event and ref point', function () {
            cleanup = initDistanceDetector({ callback: spy })
            simulateClick(0, 0)
            expect(spy).toHaveBeenCalledWith(0)
        })

        it('should display distance between 0/0 event and ref 0/100 point', function () {
            cleanup = initDistanceDetector({
                callback: spy,
                referencePoint: { x: 0, y: 100 }
            })
            simulateClick(0, 0)
            expect(spy).toHaveBeenCalledWith(100)
        })

        it('should call callback only once', function () {
            cleanup = initDistanceDetector({ callback: spy })
            simulateClick(0, 0)
            expect(spy).toHaveBeenCalledTimes(1)
        })

    })

})