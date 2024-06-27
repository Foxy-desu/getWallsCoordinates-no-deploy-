var walls = [
    [1665, 0],
    [947, 90],
    [557, 0],
    [1300, 90],
    [2225, 180],
    [2239, 270],
];
function findCoordinates(wallsArray) {
    var x0 = 0, y0 = 0;
    var coordinates = [[x0, y0]];
    var fixNegativeZero = function (num) { return num === 0 ? 0 : num; };
    wallsArray.forEach(function (wall) {
        var wallLength = wall[0] / 100;
        var wallAngle = wall[1];
        var radians = wallAngle * Math.PI / 180;
        x0 += (Math.cos(radians) * wallLength);
        y0 += (Math.sin(radians) * wallLength);
        coordinates.push([
            fixNegativeZero(Math.round(x0)),
            fixNegativeZero(Math.round(y0)),
        ]);
    });
    return coordinates.flat(Infinity);
}
;
console.log(findCoordinates(walls));
