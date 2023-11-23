class MyObject {
    private int value;
    public MyObject(int value) {
        System.out.println("This Takes so long...");
        System.out.println("This Takes so long...");
        System.out.println("This Takes so long...");
        this.value = value;
    }
}
public class Before {
    public static void main(String[] args) {
        int iterations = 100000;
        for (int i = 0; i < iterations; i++) {
            MyObject obj = new MyObject(0);
        }
    }
}