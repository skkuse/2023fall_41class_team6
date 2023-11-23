public class Before {
    private int value;
    public Before(int value) {
        this.value = value;
    }
    public int calculateSquare() {
        return value * value;
    }
    public static void main(String[] args) {
        int iterations = 1000000;
        for (int i = 0; i < iterations; i++) {
            Before obj = new Before(i);
            int result = obj.calculateSquare();
        }
    }
}