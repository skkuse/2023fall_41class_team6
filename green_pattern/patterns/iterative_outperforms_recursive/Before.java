public class Before {
    public static int factorialRecursive(int n) {
        if (n == 0 || n == 1) {
            return 1;
        } else {
            return n * factorialRecursive(n - 1);
        }
    }
    public static void main(String[] args){
        int iterations = 10000000;
        for(int i=0; i<iterations; i++){
            factorialRecursive(30);
        }
    }
}