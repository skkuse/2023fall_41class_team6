public class After {
    private int value;
    public After(int value) {
        this.value = value;
    }
    public static int calculateSquare(int value) {
        return value * value;
    }
    public static void main(String[] args) {
        int iterations = 1000000;
        for (int i = 0; i < iterations; i++) {
            int result = calculateSquare(i);
        }
    }
}