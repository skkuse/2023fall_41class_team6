import java.util.HashMap;
import java.util.Map;


public class After {
    public static void main(String[] args) {
        
    for (int i = 0 ; i < 100000 ; i++){
                Map<String, Integer> hashMap = new HashMap<>();
                hashMap.put("Alice", 25);
                hashMap.put("Bob", 30);
                hashMap.put("Eve", 22);


                for (Map.Entry<String, Integer> entry : hashMap.entrySet()) {
                    System.out.println(entry.getKey() + ": " + entry.getValue());
                }
            }
        }
}
