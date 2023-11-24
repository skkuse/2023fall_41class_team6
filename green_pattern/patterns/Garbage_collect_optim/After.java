public class After {

    public static void main(String[] args) {
    for (int i = 0; i < 100000; i++) {

        String myString2 = "Object " + i;
        System.out.println(myString2);

        myString2 = null;
    }
    }
}
