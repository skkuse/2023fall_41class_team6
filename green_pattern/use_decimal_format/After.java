import java.text.DecimalFormat;

public class After {
    public static void main(String[] args){
        DecimalFormat df = new DecimalFormat("#,###");
        for(int i=0 ; i<1000000 ; i++){
            df.format(i);
        }
    }
}
