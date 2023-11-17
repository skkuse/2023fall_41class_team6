import java.util.Random;
public class After {
    public static int testFirstNumSSN(int a){
        if(a == 0){
            return 4;           //this means female
        }else{
            return 3;           //this means male
        }
    }
    public static void main(String[] args){
        int iterations = 1000000;
        Random random = new Random();
        for(int i=0; i<iterations; i++){
            int a = random.nextInt(2);
            int result = testFirstNumSSN(a);
            if(result==4){
                System.out.println("this is female");
            }else if(result==3){
                System.out.println("this is male");
            }
        }
    }
}