import { getDistance } from './distance'

describe('Distance', function () {

    describe('getDistance', function () {
        it('should work without parameters', function () {
            expect(getDistance()).toBe(0)
        })

       it('should return error message when at least one of the "point" parameter coordinates is not a number', function () {
           //expect(getDistance({ x: "a", y: 10 }, { pageX: 20, pageY: 10 })).toThrow(new Error)
           expect(getDistance({ x: "a", y: 10 }, { pageX: 20, pageY: 10 })).toBe("The 'point' object doesn't consist from number coordinates.")
       })

        it('should return 0 distance when both parameters have same coordinates', function () {
            expect(getDistance({ x: 20, y: 10 }, { pageX: 20, pageY: 10 })).toBe(0)
        })       

        it('should handle negative coordinates', function () {
            expect(getDistance({ x: -20, y: -10 }, { pageX: 20, pageY: 10 })).toBe(44.721359549995796)
        })         
    })

})