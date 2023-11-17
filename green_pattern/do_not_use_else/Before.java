public class Before {
    static boolean func1(int a){
        if(a > 100){
            return true;
        }
        return false;
    }
    public static void main(String[] args){
        int iterations = 1000000;
        for(int i=0; i<iterations; i++){
            int a = 77;
            boolean k = func1(a);
        }
    }
}