import java.util.ArrayList;

public class Before {
    public static void linearSearch(ArrayList<Integer> nums, int target) {
        for (int i = 0; i < nums.size(); i++) {
            if (nums.get(i) == target) {
                break;
            }
        }
    }

    public static void main(String[] args){
        ArrayList<Integer> v = new ArrayList<Integer>();
        for(int i=0; i<100000; i++) {
            v.add(i);
            linearSearch(v, i);
        }
    }
}
