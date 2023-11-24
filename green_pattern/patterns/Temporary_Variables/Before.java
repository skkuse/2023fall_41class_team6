public class Before {
    public static void main(String[] args) {
        int a = 5;
        int b = 10;
        int c = 2;
        int d = 3;


        for (int i = 0; i < 1000000; i++) {
            int temp1 = a + b;
            int temp2 = temp1 * c;
            int result1 = temp2 - d;
        }

    }
}
