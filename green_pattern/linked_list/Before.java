import java.util.ArrayList;

public class Before {
    public static void main(String[] args){
        ArrayList<Integer> v = new ArrayList<Integer>();
        for(int i=0; i<100000; i++) {
            v.add(1);
        }
        for(int i=0; i<100000; i++) {
            v.remove(0);
        }
    }
}

