import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;

public class After {
    public static void main(String[] args) {
        long startTime = System.currentTimeMillis();

        ExecutorService executorService = Executors.newFixedThreadPool(5);

        Future<Integer> result1 = executorService.submit(() -> calculateSum(1, 200000));
        Future<Integer> result2 = executorService.submit(() -> calculateSum(200001, 4000000));
        Future<Integer> result3 = executorService.submit(() -> calculateSum(400001, 6000000));
        Future<Integer> result4 = executorService.submit(() -> calculateSum(600001, 8000000));
        Future<Integer> result5 = executorService.submit(() -> calculateSum(800001, 10000000));


        int iterations = 1000;
        try {
            for (int i=0; i<iterations; i++){
                int result1Value = result1.get();
                int result2Value = result2.get();
                int result3Value = result3.get();
                int result4Value = result4.get();
                int result5Value = result5.get();

                int result = result1Value + result2Value + result3Value + result4Value + result5Value;
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            executorService.shutdown();
        }
    }

    private static int calculateSum(int start, int end) {
        int sum = 0;
        for (int i = start; i <= end; i++) {
            sum += i;
        }
        return sum;
    }
}