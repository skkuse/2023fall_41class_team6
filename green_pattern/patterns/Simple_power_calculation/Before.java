public class Before {
    
    public static void main(String[] args) {

        for (int k = 0 ; k < 1000 ; k++){
            int n = 1000000;
            double base =3.0;
            for (int i = 0; i < n; i++) {
                double result = Math.pow(base,i);
            }
        }
    }
}
