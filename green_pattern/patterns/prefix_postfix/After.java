public class After {
    public static void main(String[] args) {
        int[] array = new int[20000000];

        for (int i = 0; i < array.length; ++i) {
            // Perform some operation
            array[i] = 10;
        }
    }
}
