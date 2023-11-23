class MyObject {
    private int value;
    private String str;
    public MyObject(int value) {
        this.value = value;
    }
}
public class After {
    public static void main(String[] args) {
        int iterations = 10000000;
        MyObject[] obj = new MyObject[iterations];
        for (int i = 0; i < iterations; i++) {
            obj[i] = new MyObject(0);
        }
    }
}