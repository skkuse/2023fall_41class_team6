import java.util.ArrayList;
import java.util.List;

public class After {
    
    public static void main(String[] args) {
        for (int k = 0 ; k < 1000 ; k++){
            List<Integer> numbers = new ArrayList<>();
        for (int i = 1; i <= 1000000; i++) {
            numbers.add(i);
        }

        List<Integer> evenSquares = new ArrayList<>();
        for (int number : numbers) {
            if (number % 2 == 0) {
                evenSquares.add(number * number);
            }
        }

        for (int i = 0; i < 10; i++) {
            System.out.println(evenSquares.get(i));
        }
        }
    }
}
