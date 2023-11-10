import java.util.Random;
public class Before {
    public static void main(String[] args){
        Random random = new Random();
        int randA = random.nextInt(100);
        int randB = random.nextInt(100);
        for(int i=0; i<10000; i++){
            if(randA%2==1 && randB==77){
                System.out.println("randA is odd and randB is 77");       
            }
        }
    }
}