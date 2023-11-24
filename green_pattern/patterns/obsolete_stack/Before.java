public class Before {
    public static int size;
    public static Object pop(String[] stack) {
        if (size==0) {
            return -1;
        }
        return stack[--size];
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