public class Before {
    public static void main(String[] args){
        int iterations = 100000;
        
        double test= 100 / 3; 
        int output = 0; 
        for (int i = 0; i < iterations; i++) {
            for (int j = 0; j < iterations; j++) {
                int res = (int)test + 30;
                int res2 = res + 50;
                if(res2 > 100){
                    res2 += 90;
                }
                output += (int)res2;
            }
        }
    }
}