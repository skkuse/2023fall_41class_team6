import java.util.Arrays;
public class After {
    public static void main(String[] args){
        int iterations = 100000;
        int intArray[] = new int[iterations];
        for(int i=1; i<iterations; i++){
            for(int index = 0; index < iterations; index++) {
                intArray[index] = index;
            }
            // System.out.println(intArray[0]);
        }
    }
}