import java.util.ArrayList;

public class Before {
    public static int func(ArrayList<Integer> v, int start, int end){
        int sum = 0;
        for(int i=start; i<end; i++){
            sum += v.get(i);
        }
        return sum;
    }

    public static void main(String[] args){
        ArrayList<Integer> v = new ArrayList<Integer>();
        for (int i = 0; i < 1000000; i++) {
            v.add(i);
        }

        for (int i = 0; i < 100000; i++) {
            func(v, i, i+100000);
        }
    }
}
