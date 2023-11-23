public class After {
    public static int factorialIterative(int n) {
        int result = 1;
        for (int i = 1; i <= n; i++) {
            result *= i;
        }
        return result;
    }
    public static void main(String[] args){
        int iterations = 10000000;
        for(int i=0; i<iterations; i++){
            factorialIterative(30);
        }
    }
}