import java.util.Arrays;

public class Before {
    public static void main(String[] args) {
        int[] array = new int[100000];


        for (int i = 0; i < array.length; i++) {
            array[i] = array[i] * 2;
        }

    }
}
