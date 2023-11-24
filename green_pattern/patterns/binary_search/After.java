package green;
import java.util.ArrayList;

public class After {
    public static void binarySearch(ArrayList<Integer> nums, int target) {
        int start = 0;
        int end = nums.size() - 1;
    
        while (start <= end) {
            int mid = start + (end - start) / 2;
            if (nums.get(mid) == target) {
                break;
            } else if (nums.get(mid) < target) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
    }

    public static void main(String[] args){
        ArrayList<Integer> v = new ArrayList<Integer>();
        for(int i=0; i<100000; i++) {
            v.add(i);
            binarySearch(v, i);
        }
    }
}
