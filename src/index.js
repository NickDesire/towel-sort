
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let result = []
    if(matrix == undefined){
        return []
    }
    for(i = 0; i< matrix.length;i++){
        if(i % 2 !==0){
            matrix[i] = matrix[i].reverse()
        }
        result = result.concat(matrix[i])
    }
  return result;
}
