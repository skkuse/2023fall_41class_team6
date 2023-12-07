public class After {
    public static void main(String[] args){
        int iterations = 100000;
        
        double test= 100 / 3; 
        int output = 0; 
        for (int i = 0; i < iterations; i++) {
            for (int j = 0; j < iterations; j++) {
                double res = test + 30.0;
                double res2 = res + 50.0;
                if(res2 > 100.0){
                    res2 += 90.0;
                }
                output += (int)res2;
            }
        }
    }
}