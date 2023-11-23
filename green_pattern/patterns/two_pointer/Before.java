import java.util.ArrayList;

public class Before {
    public static boolean func(ArrayList<Integer> v, int target){
        int len = v.size();
        for(int i=0; i<len-1; i++){
            for(int j=i+1; j<len; j++){
                if(v.get(i) + v.get(j) == target){
                    return true;
                }
            }
        }
        return false;
    }

    public static void main(String[] args){
        ArrayList<Integer> v = new ArrayList<Integer>();
        for (int i = 0; i < 10000; i++) {
            v.add(i);
        }

        for (int i = 0; i < 10000; i++) {
            func(v, i);
        }
    }
}
