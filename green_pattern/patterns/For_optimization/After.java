import java.util.stream.IntStream;


public class After {
    public static void main(String[] args) {
    long sum = 0;

    for(int k = 0 ; k < 100 ; k++){
        int[] arr = IntStream.range(1,100000000).toArray();
    int len = arr.length;
    int i;

    for (i = 0; i < len - 10; i += 10) {
	    sum += arr[i] + arr[i + 1] + arr[i + 2] + arr[i + 3] + arr[i+4] + arr[i + 5] + arr[i + 6] + arr[i + 7] + arr[i+8] + arr[i + 9];
        }

        // 나머지 요소들 처리
    while (i < len) {
        sum += arr[i];
        i++;
        }
    }
    System.out.println(sum);
        }
}
