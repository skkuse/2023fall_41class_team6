import java.util.stream.IntStream;


public class Before {
    public static void main(String[] args) {
    long begin = System.currentTimeMillis();
    long sum = 0;

    for(int k = 0 ; k < 100 ; k++){
        int[] arr = IntStream.range(1,100000000).toArray();
        int len = arr.length;
        int i;

        for (i = 0 ; i < len ; i++) {
	        sum += arr[i];
        }
    }
    System.out.println(sum);
        }
}
