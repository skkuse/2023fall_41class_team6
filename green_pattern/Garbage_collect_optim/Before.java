public class Before {
    public static void main(String[] args) {
    for (int i = 0; i < 100000; i++) {
        // 매번 새로운 객체를 생성 (불필요한 메모리 할당)
        String myString = new String("Object " + i);
        System.out.println(myString);
    }
    }
}
