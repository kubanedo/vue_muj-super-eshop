const pointA = { x: 100, y: 200.5 }

export function getDistance(
    point = { x: 0, y: 0 },
    click = { pageX: 0, pageY: 0 }
) {

    if (typeof point.x == "number" && typeof point.y == "number") {
        return Math.sqrt(Math.pow(point.x - click.pageX, 2) + Math.pow(point.y - click.pageY, 2));
    } else {
        return "The 'point' object doesn't consist from number coordinates.";
    }
}

document.addEventListener('click', function (event) {
    console.log("A: ", getDistance(pointA, event));
});

//pointA = { x: 'a', y: 200.5 }