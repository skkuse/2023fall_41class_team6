public class Before {
    private static int func1(){
        int[] a = new int[10000000];
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