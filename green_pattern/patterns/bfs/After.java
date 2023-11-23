import java.util.LinkedList;
import java.util.Queue;

public class After {
    static int[][] dir = {{-1, 0}, {0, 1}, {1, 0}, {0, -1}};
    static int row = 4;
    static int col = 6;
    static int[][] vec = new int[row][col];
    static int[][] visited = new int[row][col];

    public static void bfs(int y, int x) {
        Queue<int[]> q = new LinkedList<>();
        q.add(new int[]{y, x});
        visited[y][x] = 1;

        while (!q.isEmpty()) {
            int[] curr = q.poll();

            if(curr[0] == row-1 && curr[1] == col-1){
                return;
            }

            for (int i = 0; i < 4; i++) {
                int ny = curr[0] + dir[i][0];
                int nx = curr[1] + dir[i][1];

                if (ny < 0 || ny >= row || nx < 0 || nx >= col) {
                    continue;
                }

                if (visited[ny][nx] >= 1) {  
                    continue;
                }

                if (vec[ny][nx] == 0) {
                    continue;
                }

                q.add(new int[]{ny, nx});
                visited[ny][nx] = visited[curr[0]][curr[1]] + 1;
            }
        }
    }

    public static void main(String[] args){
        long begin = System.currentTimeMillis();

        vec = new int[][]{
            {1, 1, 1, 1, 1, 1},
            {1, 0, 1, 1, 0, 0},
            {1, 1, 0, 0, 0, 0},
            {0, 1, 1, 1, 1, 1}
        };

        for(int i=0; i<1000000; i++){
            visited = new int[row][col];
            bfs(0, 0);
        }

        long dur = System.currentTimeMillis() - begin;
        System.out.println("Execution Time: " + dur/1000.0 + " seconds");
    }
}
