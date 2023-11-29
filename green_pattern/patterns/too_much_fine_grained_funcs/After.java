 public class After {
    public static void main(String[] args) {
        int iterations = 2147483647;
        int[] numbers = {1, 2};
        for (int k = 0; k < iterations; k++){
            average(numbers);
        }
    }

    private static int average(int[] array) {
        int sum = 0;
        int len = array.length;
        for (int i = 0; i < len; i++) {
            sum += array[i];
        }
        return sum/len;
    }
}