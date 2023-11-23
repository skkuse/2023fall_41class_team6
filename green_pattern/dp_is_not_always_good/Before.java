import java.util.HashMap;
import java.util.Map;

public class Before {
    public static void main(String[] args) {
        int iterations = 1000000;
        for(int iter=0; iter<iterations; iter++){
            int n = 500;
            if (n <= 1) {
                System.out.println(n);
            }
            long[] fibArray = new long[n + 1];
            fibArray[0] = 0;
            fibArray[1] = 1;

            for (int i = 2; i <= n; i++) {
                fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
            }
            System.out.println(fibArray[n]);
        }
    }
}