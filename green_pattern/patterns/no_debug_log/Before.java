public class Before {
    public static void main(String[] args) {
        for (int i = 0; i < 10000; i++) {
            System.out.println("Current index: " + i);
            int result = process(i);
        }
    }

    private static int process(int value) {
        return value * 2;
    }
}
