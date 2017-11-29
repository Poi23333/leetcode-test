/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    var x=0,
    y=0;
    for(var i=0; i<moves.length; i++){
        switch (moves[i]){
            case 'L':
                x++;
                break;
            case 'R':
                x--;
                break;
            case 'U':
                y++;
                break;
            case 'D':
                y--;
                break;
        }
    }
    if(x===0 && y===0){
        return true;
    }else{
        return false;
    }
};

console.log(judgeCircle('LR'));