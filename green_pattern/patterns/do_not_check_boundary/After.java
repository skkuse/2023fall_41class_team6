public class After {
    public static void main(String[] args) {
        int[] array = {1, 2, 3, 4, 5};
        
        int iterations = 100000;
        for (int i = 0; i < iterations; i++) {
            try {
                int res = array[3];
            } catch (ArrayIndexOutOfBoundsException e) {
                System.out.println("Array index out of bounds");
            }
        }
    }
}