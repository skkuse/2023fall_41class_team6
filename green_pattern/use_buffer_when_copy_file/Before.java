import java.io.*;

public class Before {

    public static void main(String[] args) {
        try {
            InputStream inputStream = Before.class.getResourceAsStream("input.txt");

            BufferedInputStream in = new BufferedInputStream(inputStream);
            FileOutputStream out = new FileOutputStream("output.txt");
            int c;

            while ((c = in.read()) != -1) {
                out.write(c);
            }

            in.close();
            out.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}