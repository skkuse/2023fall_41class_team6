import java.util.ArrayList;
import java.util.List;

class MyObject {
    private int value;
    public MyObject(int value) {
        System.out.println("This Takes so long...");
        System.out.println("This Takes so long...");
        System.out.println("This Takes so long...");
        this.value = value;
    }
}

class ObjectPoolExample {
    private static final int POOL_SIZE = 1;
    private static List<MyObject> objectPool = new ArrayList<>(POOL_SIZE);

    static {
        initializeObjectPool();
    }

    private static void initializeObjectPool() {
        for (int i = 0; i < POOL_SIZE; i++) {
            objectPool.add(new MyObject(0));
        }
    }

    public static MyObject getObjectFromPool() {
        return objectPool.remove(0);
    }

    public static void returnObjectFromPool(MyObject obj) {
        objectPool.add(obj);
    }
}
public class After {
    public static void main(String[] args) {
        int iterations = 100000;
        for (int i = 0; i < iterations; i++) {
            MyObject obj = ObjectPoolExample.getObjectFromPool();
            ObjectPoolExample.returnObjectFromPool(obj);
        }
    }
}