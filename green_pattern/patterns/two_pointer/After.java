import java.util.ArrayList;

public class After {
    public static boolean func(ArrayList<Integer> v, int target){
        int len = v.size();
        int left = 0;
        int right = len-1;
        while(left != right){
            int sum = v.get(left) + v.get(right);
            if(sum == target){
                return true;
            }
            else if(sum < target){
                left++;
            }
            else{
                right--;
            }
        }
        return false;
    }

    public static void main(String[] args){
        long begin = System.currentTimeMillis();

        ArrayList<Integer> v = new ArrayList<Integer>();
        for (int i = 0; i < 10000; i++) {
            v.add(i);
        }

        for (int i = 0; i < 10000; i++) {
            func(v, i);
        }

        long dur = System.currentTimeMillis() - begin;
        System.out.println("Execution Time: " + dur/1000.0 + " seconds");
    }
}
