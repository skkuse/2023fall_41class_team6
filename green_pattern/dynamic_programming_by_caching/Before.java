import java.util.HashMap;
import java.util.Map;

public class Before {
    public static void main(String[] args) {
        int iterations = 1000000;
        for(int iter=0; iter<iterations; iter++){
            int n = 20;
            if (n <= 1) {
                System.out.println(n);
            }

            long prev = 0;
            long current = 1;
            for (int i = 2; i <= n; i++) {
                long next = prev + current;
                prev = current;
                current = next;
            }

            System.out.println(current);
        }
    }
}