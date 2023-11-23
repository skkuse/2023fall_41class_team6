public class Before {
    public static void main(String[] args) {
        for (int i = 0; i < 1000000; i++) {
            String value = "Hello";
            value = value + "World";
        }
    }
}
