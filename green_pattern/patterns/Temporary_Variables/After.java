public class After {
    public static void main(String[] args) {
        int a = 5;
        int b = 10;
        int c = 2;
        int d = 3;


        for (int i = 0; i < 1000000; i++) {
            int result2 = (a + b) * c - d;
        }

    }
}
