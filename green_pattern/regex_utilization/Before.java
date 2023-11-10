public class Before {
    public static String findDomain(String email) {
        int atPosition = -1;
        for (int i = 0; i < email.length(); i++) {
            if (email.charAt(i) == '@') {
                atPosition = i;
                break;
            }
        }
        if (atPosition != -1) {
            return email.substring(atPosition + 1);
        } else {
            return "";
        }
    }
    public static void main(String[] args){
        String email = "example.email@domain.com";
        String domain = findDomain(email);
        System.out.println(domain);
    }
}