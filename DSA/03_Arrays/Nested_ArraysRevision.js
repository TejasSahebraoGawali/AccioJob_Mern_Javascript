// Boundary Traversal Assignment 

console.log("Boundary Traversal Assignment ");


function boundaryTraversal(n, m, matrix) {

    for (let j = 0; j < m; j++) {
        console.log(matrix[0][j]);
    }

    for (let i = 1; i < n; i++) {
        console.log(matrix[i][m - 1]);
    }
    if (n == 1) return;
    for (let j = m - 2; j >= 0; j--) {
        console.log(matrix[n - 1][j])
    }
    if (m == 1) return;
    for (let i = n - 2; i >= 1; i--) {
        console.log(matrix[i][0]);
    }
}


let matrix = [[1, 4, 3], [2, 7, 9], [5, 8, 6], [3, 2, 7]];

boundaryTraversal(4, 3, matrix);




// Transpose Of a Matrix

console.log("Transpose Of a Matrix");

function transposeOfMatrix(n, matrix1) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            [matrix1[i][j], matrix1[j][i]] = [matrix1[j][i], matrix[i][j]];
        }
    }
    return matrix1;
}


let matrix1 = [[1, 1, 1, 1], [2, 2, 2, 2], [3, 3, 3, 3], [4, 4, 4, 4]];

console.log(transposeOfMatrix(4, matrix1));




// Matrix 90 Degree Rotation

console.log("Matrix 90 Degree Rotation");


function rotation90Degree(matrix) {
    let n = matrix.length;
    let rotated = [];

    for (let i = 0; i < n; i++) {
        rotated[i] = [];
        for (let j = 0; j < n; j++) {
            rotated[i][j] = matrix[n - j - 1][i];
        }
    }

    return rotated;
}

let matrix3 = [[7, 2, 3], [2, 3, 4], [5, 6, 1]]

console.log(rotation90Degree(matrix3));