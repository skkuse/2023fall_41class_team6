import java.util.StringTokenizer;

public class Before {
    public static void main(String[] args) {
        String input = "apple,orange,banana,grape";
        
        for (int i = 0; i < 1000000; i++) {
            StringTokenizer tokenizer = new StringTokenizer(input, ",");
            
            while (tokenizer.hasMoreTokens()) {
                String token = tokenizer.nextToken();
            }
        }
    }
}
