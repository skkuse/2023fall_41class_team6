public class After{
    public static void main(String[] args){
        Object resource = new Object();
        Runnable myRunnable = new MyRunnable(resource);
        Thread thread = new Thread(myRunnable);
        thread.start();
        
        resource = null;
        myRunnable = null;
        thread = null;
    }
}
class MyRunnable implements Runnable {
    private Object someResource;

    public MyRunnable(Object someResource) {
        this.someResource = someResource;
    }
    public void run(){
        System.out.println(someResource);
    }
}