public class Before {
    public static void main(String[] args) {
        int iterations = 1000;
        for (int i=0; i<iterations; i++){
            int result = calculateSum(1, 10000000);
        }
    }

    private static int calculateSum(int start, int end) {
        int sum = 0;
        for (int i = start; i <= end; i++) {
            sum += i;
        }
        return sum;
    }
}