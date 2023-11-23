public class Before {
    public static void main(String[] args) {
    for (int i = 0; i < 100000; i++) {

        String myString = new String("Object " + i);
        System.out.println(myString);
    }
    }
}
