public class After {
    public static void main(String[] args) {
        int result = 10;
        for (int i = 0; i < 1000000; i++) {
            result = result << 2;
        }
    }
}
