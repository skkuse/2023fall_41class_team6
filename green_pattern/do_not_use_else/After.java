// acutally, this pattern is about clean code styles rather than reducing runtime...
// or is it? idk
// and hangul is not supported in my code
// it would be thankful if somebody helps this.

public class After {
    static boolean func1(int a){
        if(a > 100){
            return true;
        }else{
            return false;
        }
    }
    public static void main(String[] args){
        int iterations = 1000000;
        for(int i=0; i<iterations; i++){
            int a = 77;
            boolean k = func1(a);
        }
    }
}