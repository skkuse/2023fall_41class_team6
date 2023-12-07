import java.util.regex.Pattern;
import java.util.regex.Matcher;

public class Before {
    public static String findDomain(String email) {
        String pattern = "@(.+)";
        Pattern r = Pattern.compile(pattern);
        Matcher m = r.matcher(email);
        if(m.find()){
            return m.group(1);
        } else {
            return "";
        }
    }
    public static void main(String[] args) {
        String email = "example.email@domain.com";

        int iterations = 10000000;
        for(int i=0; i<iterations; i++){
            String domain = findDomain(email);
        }
    }
}
