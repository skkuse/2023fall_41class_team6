import java.util.Random;

public class After {
    public static void main(String[] args) {
    long totalSum = 0;
    for (int p = 0 ; p < 1000 ; p++){
        int rows = 1000;
        int cols = 1000;
        int[][] array = new int[rows][cols];
        Random random = new Random();


        // 배열에 값 할당
        for (int i = 0; i < rows; i++) {
            for (int k = 0; k < cols; k++) {
                array[i][k] = random.nextInt(100);
            }
        }
            
        for (int i = 0; i < array.length; i++) {
            int[] row = array[i];
            for (int k = 0; k < row.length; k++) {
                totalSum += row[k];
            }
        }
    }
        System.out.println(totalSum);
    }
}
