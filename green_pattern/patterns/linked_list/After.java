import java.util.LinkedList;

public class After {
    public static void main(String[] args){
        LinkedList<Integer> l = new LinkedList<Integer>();
        for(int i=0; i<100000; i++) {
            l.add(1);
        }
        for(int i=0; i<100000; i++) {
            l.removeFirst();
        }
    }
}

