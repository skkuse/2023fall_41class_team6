import java.io.*;

public class After {

    public static void main(String[] args) {
        try {
            InputStream inputStream = After.class.getResourceAsStream("/input.txt");
            
            BufferedInputStream in = new BufferedInputStream(inputStream);
            BufferedOutputStream out = new BufferedOutputStream(new FileOutputStream("output.txt"));
            byte[] buffer = new byte[8192];
            int length;

            while ((length = in.read(buffer)) > 0) {
                out.write(buffer, 0, length);
            }

            in.close();
            out.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}