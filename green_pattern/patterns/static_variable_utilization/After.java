public class After {
    static int[] a = new int[10000000];
    private static int func1(){
        a[0] = 10;
        return a[0];
    }
    public static void main(String[] args){
        int iterations = 1000;

        for(int i=0; i<iterations; i++){
            func1();
        }
    }
}