import java.util.ArrayList;
import java.util.Map;
import java.util.HashMap;
import java.util.List;

public class After {
    public static void main(String[] args){
        List<Object> list = new ArrayList<>();
        Map<String, Object> map = new HashMap<>();
        list.clear();
        map.clear();
        list = null;
        map = null;
    }
}