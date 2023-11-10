import java.util.Arrays;
public class After {
    public static void main(String[] args){
        int intArray[] = new int[10000001];

        for(int index = 0; index < intArray.length; index++) {
            intArray[index] = index;
        }
        System.out.println(Arrays.toString(intArray));
    }
}