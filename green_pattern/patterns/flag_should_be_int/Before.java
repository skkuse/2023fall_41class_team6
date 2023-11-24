public class Before {
    public static String testFirstNumSSN(int a){
        if(a == 0){
            return "gender_female";           //this means male
        }else{
            return "gender_male";           //this means female
        }
    }
    public static void main(String[] args){
        long iterations = 2000000000;
        int a = 0;
        String result = ""; 
        result = testFirstNumSSN(a);
        for(long i=0; i<iterations; i++){
            if(result == "gender_female"){
                // System.out.println("this is female");
            }else if(result == "gender_male"){
                // System.out.println("this is male");
            }
        }
    }
}