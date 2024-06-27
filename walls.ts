type TWalls = number[][];
const walls: TWalls = [
    [1665, 0],
    [947, 90],
    [557, 0],
    [1300, 90],
    [2225, 180],
    [2239, 270],
];

function findCoordinates(wallsArray: TWalls){
    let x0 = 0, y0 = 0;
    const coordinates: number[][] = [[x0, y0]];
    const fixNegativeZero = (num: number) => num === 0? 0 : num;

    wallsArray.forEach((wall)=> {
        const wallLength = wall[0] / 100;
        const wallAngle = wall[1];
        const radians = wallAngle * Math.PI / 180;
        x0 += (Math.cos(radians) * wallLength);
        y0 += (Math.sin(radians) * wallLength); 
        coordinates.push([
            fixNegativeZero(Math.round(x0)),
            fixNegativeZero(Math.round(y0)),
        ]);
    });
    return coordinates.flat(Infinity);
};

console.log(findCoordinates(walls));