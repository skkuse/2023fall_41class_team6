public class After {

    public static void main(String[] args) {
    for(int i = 0 ; i < 100000 ; i++){
        int dayOfWeek = 3;

        String day;
        switch (dayOfWeek) {
            case 1:
                day = "Sunday";
                break;
            case 2:
                day = "Monday";
                break;
            case 3:
                day = "Tuesday";
                break;
            case 4:
                day = "Wednsday";
                break;
            case 5:
                day = "Thursday";
                break;
            case 6:
                day = "Friday";
                break;
            case 7:
                day = "Saturday";
                break;    

            default:
                day = "Unknown";
        }

        System.out.println("Day of the week: " + day);
    }
    }
}
