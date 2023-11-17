import java.util.Random;
public class Before {
    public static String testFirstNumSSN(int a){
        if(a == 0){
            return "female";           //this means male
        }else{
            return "male";           //this means female
        }
    }
    public static void main(String[] args){
        int iterations = 1000000;
        Random random = new Random();
        for(int i=0; i<iterations; i++){
            int a = random.nextInt(2);
            String result = testFirstNumSSN(a);
            if(result.equals("female")){
                System.out.println("this is female");
            }else if(result.equals("male")){
                System.out.println("this is male");
            }
        }
    }
}