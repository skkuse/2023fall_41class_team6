public class After {
    private static double performIntegerOperation(int value) {
        return Math.sqrt((int)(value * 2.5 * 1000));
    }
    public static void main(String[] args){
        int iterations = 1000000;
        for (int i = 0; i < iterations; i++) {
            double result = performIntegerOperation(i);
        }
    }
}