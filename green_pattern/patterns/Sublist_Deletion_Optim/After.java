import java.util.ArrayList;
import java.util.List;

public class After {
    private static String generateData() {
        return "Some data";
    }

    public static void main(String[] args) {
    List<String> data = new ArrayList<>();
    int i = 0;

    while (i < 200000) {
        data.add(generateData());
        i++;
    }

    int startIndex = 0;
    int endIndex = 100000;
    data.subList(startIndex, endIndex + 1).clear();
    }
}
