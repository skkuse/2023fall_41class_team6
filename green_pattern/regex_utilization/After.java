import java.util.regex.Pattern;
import java.util.regex.Matcher;

public class After {
    public static void main(String[] args) {
        String email = "example.email@domain.com";
        String pattern = "@(.+)";
        Pattern r = Pattern.compile(pattern);
        Matcher m = r.matcher(email);
        m.find();

        String domain = m.group(1);
        System.out.println(domain);
    }
}
