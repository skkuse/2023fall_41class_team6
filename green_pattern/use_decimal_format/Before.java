public class Before {
    public static void main(String[] args){
        for(int i=0 ; i<1000000 ; i++){
            String.format("%,6d", i);
        }
    }
}