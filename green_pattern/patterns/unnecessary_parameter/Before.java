 public class Before {
    public static void main(String[] args) {
        int iterations = 1000000;
        int[] numbers = {1, 2, 3, 4, 5};
        for (int k = 0; k < iterations; k++ ){
            calculateSum(numbers, numbers.length);
        }
    }

    private static int calculateSum(int[] array, int length) {
        int sum = 0;
        for (int i = 0; i < length; i++) {
            sum += array[i];
        }
        return sum;
    }
}