 public class Before {
    public static void main(String[] args) {
        int iterations = 1000000;
        int[] numbers = {1, 2, 3, 4, 5};
        for (int k = 0; k < iterations; k++ ){
            average(numbers);
        }
    }
    private static int sumAll(int[] array, int len) {
        int sum = 0;
        for (int i = 0; i < len; i++) {
            sum += array[i];
        }
        return sum;
    }
    private static int divideBySize(int sum, int len) {
        return sum/len;
    }
    private static int average(int[] array) {
        int len = array.length;
        int sum = sumAll(array, len);
        return divideBySize(sum, len);
    }
}