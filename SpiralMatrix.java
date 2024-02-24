public class SpiralMatrix {
    public static void main(String[] args) {
        int n = 4; // замените на желаемый размер матрицы

        int[][] matrix = new int[n][n];
        int value = 1;
        int rowStart = 0, rowEnd = n - 1;
        int colStart = 0, colEnd = n - 1;

        while (rowStart <= rowEnd && colStart <= colEnd) {
            for (int i = colStart; i <= colEnd; i++) {
                matrix[rowStart][i] = value++;
            }
            rowStart++;

            for (int i = rowStart; i <= rowEnd; i++) {
                matrix[i][colEnd] = value++;
            }
            colEnd--;

            if (rowStart <= rowEnd) {
                for (int i = colEnd; i >= colStart; i--) {
                    matrix[rowEnd][i] = value++;
                }
                rowEnd--;
            }

            if (colStart <= colEnd) {
                for (int i = rowEnd; i >= rowStart; i--) {
                    matrix[i][colStart] = value++;
                }
                colStart++;
            }
        }

        // Вывод матрицы
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                System.out.print(matrix[i][j] + "\t");
            }
            System.out.println();
        }
    }
}
