module.exports = function towelSort (matrix) {
  if (!Array.isArray(matrix)) {return [];}
  if (matrix.length === 0) {return [];}

  let mas = [];
  for (var i = 0; i < matrix.length; i++) {
    if (i%2 !== 0) {
      matrix[i].reverse();
    }
    mas = mas.concat(matrix[i]);       
  }
  return mas;
}