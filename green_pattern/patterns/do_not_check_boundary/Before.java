public class Before {
    public static void main(String[] args) {
        int[] array = {1, 2, 3, 4, 5};
        
        int iterations = 100000;
        for (int i = 0; i < iterations; i++) {
            if (i < array.length) {
                int res = array[3];
            } else {
                System.out.println("Array index out of bounds");
            }
        }
    }
}