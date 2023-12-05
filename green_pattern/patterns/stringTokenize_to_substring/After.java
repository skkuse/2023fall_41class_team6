public class After {
    public static void main(String[] args) {
        String input = "apple,orange,banana,grape";
        
        for (int i = 0; i < 1000000; i++) {
            int startIndex = 0;
            int endIndex;
            
            while ((endIndex = input.indexOf(',', startIndex)) != -1) {
                String token = input.substring(startIndex, endIndex);
                startIndex = endIndex + 1;
            }
            
            String lastToken = input.substring(startIndex);
        }
    }
}
