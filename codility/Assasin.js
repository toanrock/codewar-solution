var charMap = {};
var arrMap = [];
var escapsePoint =
{
    x:"",
    y:""
}
var stackPostion =[]
var aCurrentPosition = {x:"",y:""};
B= ["X.....>","..v..X.",".>..X..","A......"]
B1 =["...Xv","AX..^",".XX.."]
B2 =["....","....",">..A"]
B3 =["...v","A...","...."]
//solution(B)
function solution(B) {
    // write your code in JavaScript (Node.js 8.9.4)
    charMap ={};
    arrMap =[];
    escapsePoint =
    {
        x:"",
        y:""
    }
    stackPostion = []
    aCurrentPosition = {x:"",y:""};

     arrMap = convertTo2NArray(B)
 
    if(guardVision() === false){
        console.log("guard see the Assasin");
        return false;
    }
    if(checkEscapePoint() === false){
        console.log("guard see escape point");
        return false;
    }
   return runEscape();
}
function runEscape(){
    var assasin = charMap["A"]
   
    aCurrentPosition.x = Number(assasin[0][0])
    aCurrentPosition.y = Number(assasin[0][1])
    findPath()
    while(stackPostion.length>0){
       if( findPath() === false){
         let prevPosition = stackPostion.pop()
         aCurrentPosition.x =prevPosition.x
         aCurrentPosition.y = prevPosition.y
       }
        if(aCurrentPosition.x ===escapsePoint.x && aCurrentPosition.y===escapsePoint.y){
            return true;
        }
    }
    console.log("Stuck can't find the patch")
    return false;


}

function findPath(){
    // check left postion
    if(aCurrentPosition.y !==0 && arrMap[aCurrentPosition.x][aCurrentPosition.y-1] ==="."){ // move left
        stackPostion.push(aCurrentPosition)
        arrMap[aCurrentPosition.x][aCurrentPosition.y] = "X"
        aCurrentPosition.y--; 
        return true;
    }
    // check right postion
    if(aCurrentPosition.y<escapsePoint.y && arrMap[aCurrentPosition.x][aCurrentPosition.y+1] ==="."){ // move right
        stackPostion.push(aCurrentPosition)
        arrMap[aCurrentPosition.x][aCurrentPosition.y] = "X"
        aCurrentPosition.y++; 
        return true;
    }
    // check up postion 
    if(aCurrentPosition.x !==0 && arrMap[aCurrentPosition.x-1][aCurrentPosition.y] ==="."){
        stackPostion.push(aCurrentPosition)
        arrMap[aCurrentPosition.x][aCurrentPosition.y] = "X"
        aCurrentPosition.x--;
        return true;
    }
    // check down postion
    if(aCurrentPosition.x<escapsePoint.x && arrMap[aCurrentPosition.x+1][aCurrentPosition.y] ==="."){ // move down
        stackPostion.push(aCurrentPosition)
        arrMap[aCurrentPosition.x][aCurrentPosition.y] = "X"
        aCurrentPosition.x++;
        return true;
    }
    // stuck can't move
    return false;
}

function convertTo2NArray(myArr){
    
    var newArr = [];
   // console.log(myArr.length)
    for(let i=0;i<myArr.length;i++){
        let smArr = [];
        for(let j =0; j<myArr[i].length;j++){
            if(myArr[i][j]!=="."){
               
                if(charMap[myArr[i][j]]==undefined)
                {
                    charMap[myArr[i][j]] = []
                }               
               charMap[myArr[i][j]].push(""+i+j)
            }
            
            smArr.push(myArr[i][j])
            
        }
        newArr.push(smArr)
    }
   
    escapsePoint.x = newArr.length -1;
    escapsePoint.y = newArr[0].length -1;
    
    return newArr
}

function checkEscapePoint( ){
    if(arrMap[escapsePoint.x][escapsePoint.y] === "@" ){
        return false;
    }
}

function guardVision(){
    let leftGuard = charMap["<"];
    if(leftGuard!= null || leftGuard!= undefined){
        console.log(leftGuard)
        for(let i =0 ; i<leftGuard.length;i++)
        {
            let position = {x:"",y:""}
            position.x = Number(leftGuard[i][0])
            position.y = Number(leftGuard[i][1])
            if(leftGuardVisionCheck(position.x,position.y) === false){
                console.log(" left Guard see the Assasin")
                return false;
            }
        }
    }
    let rightGuard = charMap[">"];
    if(rightGuard!= null || rightGuard!= undefined){
        console.log(rightGuard)
        for(let i =0 ; i<rightGuard.length;i++)
        {
            let position = {x:"",y:""}
            position.x = Number(rightGuard[i][0])
            position.y = Number(rightGuard[i][1])
           if( rightGuardVisionCheck(position.x,position.y) === false){
            console.log(" right Guard see the Assasin")
                return false;
           }
           
        }
    }
    let upGuard = charMap["^"];
    if(upGuard!= null || upGuard!= undefined){
        
        for(let i =0 ; i<upGuard.length;i++)
        {
            let position = {x:"",y:""}
            position.x = Number(upGuard[i][0])
            position.y = Number(upGuard[i][1])
            if(upGuardVisionCheck(position.x,position.y) ===false){
                console.log(" up Guard see the Assasin")
                return false;
            }
        }
    }
     let downGuard = charMap["v"];
    if(downGuard!= null || downGuard!= undefined){
        
        for(let i =0 ; i<downGuard.length;i++)
        {
            let position = {x:"",y:""}
            position.x = Number(downGuard[i][0])
            position.y = Number(downGuard[i][1])
            if(downGuardVisionCheck(position.x,position.y)=== false){
                console.log(" Down Guard see the Assasin")
                return false;
            }
        }
    }

    return true
}


function leftGuardVisionCheck(x,y){
    
    if(y==0){
        return true;
    }
    for(let i = y-1;i>=0;i--){
        if( arrMap[x][i] ==="."  || arrMap[x][i] ==="@"){
            arrMap[x][i] = "@"
        }
        else if(arrMap[x][i] ==="A"){
            console.log("left Guard see the Assasin")
            return false;
        }
        else{
            return true;
        }
    }
}

function rightGuardVisionCheck(x,y){
    console.log(x)
    console.log(y)
    if(y==escapsePoint.y){
        return true;
    }
    for(let i = y+1;i<=escapsePoint.y;i++){
        if( arrMap[x][i] ==="." || arrMap[x][i] ==="@"){
            arrMap[x][i] = "@"
        }
        else if(arrMap[x][i] ==="A"){
            console.log(" right Guard see the Assasin")
            return false;
        }
        else{
            return true;
        }
    }
}

function upGuardVisionCheck(x,y){

    if(x==0){
        return true;
    }
    for(let i = x-1;i>=0;i--){
        if( arrMap[i][y] ==="." || arrMap[i][y] ==="@"){
            arrMap[i][y] = "@"
        }
        else if(arrMap[i][y] ==="A"){
            console.log("Up Guard see the Assasin")
            return false;
        }
        else{
           
            return true;
        }
    }
}
function downGuardVisionCheck(x,y){
    console.log(x+" -- " +y)
    if(x==escapsePoint.x){
        return true;
    }
    for(let i = x+1;i<=escapsePoint.x;i++){
        if( arrMap[i][y] ==="." || arrMap[i][y] ==="@" ){
            arrMap[i][y] = "@"
        }
        else if(arrMap[i][y] ==="A"){
            console.log(" Down Guard see the Assasin")
            return false;
        }
        else{
          
            return true;
        }
    }
}

