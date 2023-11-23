import java.util.Random;

public class Before {
    public static void main(String[] args) {
    long totalSum = 0;
    for (int p = 0 ; p < 1000 ; p++){
        int rows = 1000;
        int cols = 1000;
        int[][] array = new int[rows][cols];
        Random random = new Random();


        for (int k = 0; k < cols; k++) {
            for (int i = 0; i < rows; i++) {
                array[i][k] = random.nextInt(100);
                }
            }
            
            for (int k = 0; k < cols; k++) {
                for (int i = 0 ; i < rows ; i++){
                    totalSum += array[i][k];
                }

            }
        }
        System.out.println(totalSum);
    }
}
