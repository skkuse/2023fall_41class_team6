import java.util.ArrayList;

public class Before {
    public static void main(String[] args){
        for(int i=0; i<100000; i++) {
            new ArrayList<>(i);
        }
    }
}