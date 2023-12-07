public class Before{
    public static void main(String[] args){
        Object resource = new Object();
        Runnable myRunnable = new MyRunnable(resource);
        Thread thread = new Thread(myRunnable);
        thread.start();
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

