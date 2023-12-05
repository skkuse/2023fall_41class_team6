import java.util.Random;
public class After {
    public static boolean test(int num, boolean flag){
        System.out.println("This test takes time...");
        System.out.println("This print is for taking time");
        System.out.println("This test takes time...");

        if(num%777==0) return !flag;
        return flag;
    }
    public static void main(String[] args){
        Random random = new Random();
        int randA = random.nextInt(10000);
        int randB = random.nextInt(10000);

        int iterations = 200000;
        for(int i=0; i<iterations; i++){
            if(test(randB, false) && test(randA, true)){
                // System.out.println("randA is odd and randB is 77");       
            }
        }
    }
}