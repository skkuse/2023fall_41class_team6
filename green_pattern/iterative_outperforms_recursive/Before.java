public class Before {
    public static int factorialRecursive(int n) {
        if (n == 0 || n == 1) {
            return 1;
        } else {
            return n * factorialRecursive(n - 1);
        }
    }
    public static void main(String[] args){
        System.out.println(factorialRecursive(10));
    }
}