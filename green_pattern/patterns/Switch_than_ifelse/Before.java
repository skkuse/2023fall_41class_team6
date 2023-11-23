public class Before {

    public static void main(String[] args) {
    for(int i = 0 ; i < 100000 ; i++){
        int dayOfWeek = 6;

        String day;
        if(dayOfWeek == 1) {
            day = "Sunday";
        }

        else if(dayOfWeek == 2){
            day = "Monday";
        }
        
        else if(dayOfWeek == 3) {
            day = "Tuesday";
        }
        else if(dayOfWeek == 4){
            day = "Wednsday";
        }
        else if(dayOfWeek == 5){
            day = "Thursday";
        }
        else if(dayOfWeek == 6){
            day = "Friday";
        }
        else if(dayOfWeek == 7){
            day = "Saturday";
        }

        else {
            day = "Unknown";
        }


        System.out.println("Day of the week: " + day);
    }
    }
}
