import java.util.Arrays;
import java.util.stream.IntStream;
public class Before {
    public static void main(String args[]) {
        int iterations = 100000;
        int intArray[] = new int[iterations];
        for(int i=1; i<iterations; i++){
            intArray = IntStream.range(0, iterations).toArray();
            // System.out.println(intArray[0]);
        }
    }
}