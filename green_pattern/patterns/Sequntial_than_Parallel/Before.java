import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;



public class Before {
    
    public static void main(String[] args) {
        for (int k = 0 ; k < 1000 ; k++){
             List<Integer> numbers = IntStream.rangeClosed(1, 1000000)
                .boxed()
                .collect(Collectors.toList());

        List<Integer> evenSquares = numbers.stream()
                .filter(number -> number % 2 == 0)
                .map(number -> number * number)
                .collect(Collectors.toList())
        evenSquares.stream().limit(10).forEach(System.out::println);
        }
    }
}
