public class After {
    public static int testFirstNumSSN(int a){
        if(a == 0){
            return 4;           //this means female
        }else{
            return 3;           //this means male
        }
    }
    public static void main(String[] args){
        long iterations = 2000000000;
        int a = 0;
        int result = 0;
        result = testFirstNumSSN(a);
        for(long i=0; i<iterations; i++){
            if(result==4){
                // System.out.println("this is female");
            }else if(result==3){
                // System.out.println("this is male");
            }
        }
    }
}