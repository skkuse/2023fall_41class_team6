public class Before {
    public static void main(String[] args){
        int iterations = 1000000;
        for(int i=0 ; i<iterations ; i++){
            String.format("%,6d", i);
        }
    }
}
