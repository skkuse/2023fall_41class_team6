public class Before {
    public static void main(String[] args) {
        String text = "Hello, World!";

        int iterations = 1000000;
        for (int i = 0; i < iterations; i++) {
            char c = (char) text.getBytes()[0];
        }
    }
}