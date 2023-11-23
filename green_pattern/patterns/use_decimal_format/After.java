import java.text.DecimalFormat;

public class After {
    public static void main(String[] args){
        DecimalFormat df = new DecimalFormat("#,###");
        int iterations = 1000000;
        for(int i=0 ; i<iterations ; i++){
            df.format(i);
        }
    }
}
