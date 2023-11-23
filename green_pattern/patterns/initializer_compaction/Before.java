class MyObject {
    private int value;
    private String[] str = new String[10000];
    public MyObject(int value) {
        this.value = value;
        for(int i=0; i<10000; i++){
            str[i] = new String("");
        }
    }
}
public class Before {
    public static void main(String[] args) {
        int iterations = 10000000;
        MyObject[] obj = new MyObject[iterations];
        for (int i = 0; i < iterations; i++) {
            obj[i] = new MyObject(0);
        }
    }
}