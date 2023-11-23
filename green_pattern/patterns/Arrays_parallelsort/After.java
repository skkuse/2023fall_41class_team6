import java.util.Arrays;
import java.util.Random;

public class After {
    
    public static void main(String[] args) {
        for (int k = 0 ; k < 1000 ; k++){
	        int[] data = new int[1000000];
	        Random random = new Random();

        // 배열에 무작위 값 채우기
	        for (int i = 0; i < data.length; i++) {
	            data[i] = random.nextInt(1000000);
	        }
	        Arrays.parallelSort(data);
	       }
    }
}
