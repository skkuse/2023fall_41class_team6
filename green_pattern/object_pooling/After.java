import java.util.ArrayList;
import java.util.LinkedList;
import java.util.Queue;

public class After {
    public static class ObjectPool {
        private static final int MAX_POOL_SIZE = 3;
        private static Queue<ArrayList<Object>> pool = new LinkedList<>();

        public static Object getObject() {
            if(pool.isEmpty()) {
                return new Object();
            } else {
                return pool.poll();
            }
        }

        public static void returnObject(ArrayList<Object> object) {
            if(pool.size() < MAX_POOL_SIZE) {
                pool.add(object);
            }
        }
    }

    public static void main(String[] args){
        for(int i=0; i<100000; i++) {
            ObjectPool.getObject();
        }
    }
}
