import java.util.Map;
import java.util.TreeMap;

public class Before {
    public static void main(String[] args) {
  
    for (int i = 0 ; i < 100000 ; i++){
                Map<String, Integer> treeMap = new TreeMap<>();
                treeMap.put("Alice", 25);
                treeMap.put("Bob", 30);
                treeMap.put("Eve", 22);

                for (Map.Entry<String, Integer> entry : treeMap.entrySet()) {
                    System.out.println(entry.getKey() + ": " + entry.getValue());
                }
            }
        }
}
