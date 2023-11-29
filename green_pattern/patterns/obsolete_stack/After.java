public class After {
    public static int size;
    public static Object pop(String[] stack) {
        if (size==0) {
            return -1;
        }
        Object result = stack[--size];
        stack[size] = null;
        return result;
    }
    public static void main(String[] args){
        String a[] = new String[10000001];
        size = a.length;
        for(int index = 0; index < size; index++) {
            a[index] = "hi";
        }
        
        for(int i=0; i<size; i++){
            pop(a);
        }
    }
}