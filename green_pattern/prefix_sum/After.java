import java.util.ArrayList;

public class After {
    public static ArrayList<Integer> psum(ArrayList<Integer> v){
        int len = v.size();
        ArrayList<Integer> ret = new ArrayList<Integer>(len);
        ret.add(0, v.get(0));
        for(int i=1; i<len; i++){
            ret.add(i, ret.get(i-1) + v.get(i));
        }

        return ret;
    }

    public static void main(String[] args){
        ArrayList<Integer> v = new ArrayList<Integer>();
        for (int i = 0; i < 1000000; i++) {
            v.add(i);
        }

        ArrayList<Integer> vv = psum(v);
        int ret;
        for (int i = 0; i < 100000; i++) {
            ret = vv.get(i+100000) - vv.get(i);
        }
    }
}
