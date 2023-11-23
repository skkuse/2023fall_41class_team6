public class Before {
    public static void main(String[] args){
        String s1[] = new String[100];
        Boolean b1[] = new Boolean[100];

        int iterations = 1000000;
        for(int i=0; i<iterations; i++){
            for(int j=0; j<100; j++){
                s1[j] = new String("hello");
            }
            for(int j=0; j<100; j++){
                b1[j] = new Boolean(true);
            }
        }
    }
}