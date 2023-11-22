public class Before {
    public static void main(String[] args) {
      
        for (int i = 0; i < 100000; i++) {

            int result = calculateSumWithMethodCall(5, 10);

        }
    }

    private static int calculateSumWithMethodCall(int a, int b) {
        return a + b;
    }
}
