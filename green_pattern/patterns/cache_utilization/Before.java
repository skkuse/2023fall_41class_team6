public class Before {
    static boolean isRomanNumeralSlow(String s) {
        return s.matches("^(?=.)M*(C[MD]|D?C{0,3})" + 
        "(X[CL]|L?X{0,3})(I[XV]|V?I{0,3})$");
    }
    public static void main(String[] args){
        int iterations = 1000000;
        for(int i=0; i<iterations; i++){
            isRomanNumeralSlow("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non.");
        }
    }
}