public class Before {
    private static double performFloatingPointOperation(int value) {
        return Math.sqrt(value * 2.5) * 10;
    }
    public static void main(String[] args){
        int iterations = 1000000;
        for (int i = 0; i < iterations; i++) {
            double result = performFloatingPointOperation(i);
        }
    }
}