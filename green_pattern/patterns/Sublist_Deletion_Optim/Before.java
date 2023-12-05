import java.util.ArrayList;
import java.util.List;

public class Before {
    private static String generateData() {
        return "Some data";
    }

    public static void main(String[] args) {
    List<String> data = new ArrayList<>();
    int i = 0;int j = 0;

    while ( i < 200000) {
        data.add(generateData());
        i++;
    }

    while(j < 100000) {
        data.remove(0);
        j++;
    }
    }
}
