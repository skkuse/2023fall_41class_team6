import java.util.PriorityQueue;
import java.util.Collections;
import java.util.ArrayList;

public class After {
    public static void main(String[] args){
        ArrayList<Integer> v = new ArrayList<Integer>();
        PriorityQueue<Integer> q = new PriorityQueue<Integer>(Collections.reverseOrder());
        for(int i=0; i<10000000; i++){
            if(q.size() < 5){
                q.offer(i);
            }
            else{
                int curr = q.peek();
                if(i < curr){
                    q.poll();
                    q.offer(i);
                }
            }
        }

        while(q.size() > 0){
            v.add(q.poll());
        }
        Collections.reverse(v);
    }
}
