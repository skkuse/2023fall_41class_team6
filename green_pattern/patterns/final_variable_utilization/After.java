public class After {
    public static void main(String[] args) {
        for (int i = 0; i < 1000000; i++) {
            final String value = "Hello";
            String result = value + "World";
        }
    }
}



