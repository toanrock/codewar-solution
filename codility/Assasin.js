
B = ["X.....>", "..v..X.", ".>..X..", "A......"]
B1 = ["...Xv", "AX..^", ".XX.."]
B2 = ["....", "....", ">..A"]
B3 = ["...v", "A...", "...."]
B4 = ["...<....", ".X...X..", "...XXX.^", "XA.v....", "......X.", ".>....X."]

class ElementPoint {
    constructor(type, postitionX, positionY) {
        this.type = type;
        this.x = postitionX;
        this.y = positionY;
    }
}


//solution(B)
const solution = (B) => {
    // write your code in JavaScript (Node.js 8.9.4)
    let charMap = [];
    let arrMap = [];



    [arrMap, charMap] = convertTo2NArray(B, charMap)

    let escapsePoint = new ElementPoint("escapse", arrMap.length - 1, arrMap[0].length - 1) // the right bottom will be the escapse point
    let assasin = charMap.find((elm) => elm.type === "A")
    arrMap = guardVision(charMap, arrMap);

    console.log(arrMap)
    if (arrMap[escapsePoint.x][escapsePoint.y] !== ".") { // check if there is any obstace at escape point
        return false;
    }
    if (arrMap[assasin.x][assasin.y] !== "A") { // check if guard see the Assasin
        return false;
    }

    return runEscape(arrMap, assasin, escapsePoint);
}

// the Run Escape function using the breadth-first search alorithm
const runEscape = (arrMap, assasin, escapsePoint) => {

    let qNode = []
    qNode.push(assasin) // start from the Assasin position
    while (qNode.length > 0) {
        let node = qNode.shift()
        if (node.x === escapsePoint.x && node.y === escapsePoint.y) { // if the current node( position) is the escapse point then we pass the esacape point
            return true;
        }
        if (arrMap[node.x][node.y] === ".") {
            arrMap[node.x][node.y] = "M" // we mark it when we already move
        }

        if (node.y + 1 <= escapsePoint.y && arrMap[node.x][node.y + 1] === ".") { //  check if Assasin can move to the right
            qNode.push(new ElementPoint("step", node.x, node.y + 1))
        }
        if (node.x + 1 <= escapsePoint.x && arrMap[node.x + 1][node.y] === ".") { // check if Assasin can move down
            qNode.push(new ElementPoint("step", node.x + 1, node.y))
        }
        if (node.y - 1 >= 0 && arrMap[node.x][node.y - 1] === ".") { // check if Assasin can move to the left
            qNode.push(new ElementPoint("step", node.x, node.y - 1))
        }
        if (node.x - 1 >= 0 && arrMap[node.x - 1][node.y] === ".") { // check if Assasin can move up
            qNode.push(new ElementPoint("step", node.x - 1, node.y))
        }
    }
    return false;

}


const convertTo2NArray = (myArr, charMap) => {

    var newArr = [];

    for (let i = 0; i < myArr.length; i++) {
        let smArr = [];
        for (let j = 0; j < myArr[i].length; j++) {
            if (myArr[i][j] !== ".") {
                let element = new ElementPoint(myArr[i][j], i, j)
                charMap.push(element)
            }
            smArr.push(myArr[i][j])

        }
        newArr.push(smArr)
    }



    return [newArr, charMap]
}


const guardVision = (charMap, arrMap) => {
    for (let elm of charMap) {
        switch (elm.type) {
            case "<": // guard see the left side
                for (let i = elm.y - 1; i >= 0; i--) {
                    if (arrMap[elm.x][i] === "." || arrMap[elm.x][i] === "@" || arrMap[elm.x][i] === "A") {
                        arrMap[elm.x][i] = "@"
                    } else { // see the obstace or other guard we stop
                        break;
                    }
                }
                break;
            case ">": // guard see the right side
                for (let i = elm.y + 1; i < arrMap[0].length; i++) {
                    if (arrMap[elm.x][i] === "." || arrMap[elm.x][i] === "@" || arrMap[elm.x][i] === "A") {
                        arrMap[elm.x][i] = "@"
                    } else { // see the obstace or other guard we stop
                        break;
                    }

                }
                break;
            case "^": //guard see up side
                for (let i = elm.x - 1; i >= 0; i--) {
                    if (arrMap[i][elm.y] === "." || arrMap[i][elm.y] === "@" || arrMap[i][elm.y] === "A") {
                        arrMap[i][elm.y] = "@"
                    } else { // see the obstace or other guard we stop
                        break;
                    }
                }
                break;
            case "v": // guard see the down side
                for (let i = elm.x + 1; i < arrMap.length; i++) {
                    if (arrMap[i][elm.y] === "." || arrMap[i][elm.y] === "@" || arrMap[i][elm.y] === "A") {
                        arrMap[i][elm.y] = "@"
                    } else { // see the obstace or other guard we stop
                        break;
                    }

                }
                break;
        }

    }
    return arrMap;
}


