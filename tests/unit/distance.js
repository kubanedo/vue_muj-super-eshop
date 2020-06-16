export function getDistance(pointA = { x: 0, y: 0 }, pointB = { x: 0, y: 0 }) {
    if (typeof pointA.x == "number" && typeof pointA.y == "number" && typeof pointB.x == "number" && typeof pointB.y == "number") {
        return Math.sqrt(Math.pow(pointA.x - pointB.x, 2) + Math.pow(pointA.y - pointB.y, 2))
    } else {
        throw new Error ("At least one of the coordinates is not a number.");
    }    
}

export function initDistanceDetector({
    callback = console.log,
    referencePoint = { x: 0, y: 0 },
} = {}) {
    const eventType = 'click';
    const handleClick = function (e) {
        const eventPoint = { x: e.clientX, y: e.clientY }
        callback(getDistance(referencePoint, eventPoint))
    }

    document.addEventListener(eventType, handleClick)

    return function () {
        document.removeEventListener(eventType, handleClick)
    }
}

