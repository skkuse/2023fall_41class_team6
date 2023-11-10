import java.util.Arrays;
import java.util.stream.IntStream;
public class Before {
    public static void main(String args[]) {
        int intArray[] = IntStream.range(0, 10000001).toArray();
        System.out.println(Arrays.toString(intArray));
    }
}