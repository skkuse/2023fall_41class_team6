public class Before {
    static int[][] dir = {{-1, 0}, {0, 1}, {1, 0}, {0, -1}};
    static int row = 4;
    static int col = 6;
    static int[][] vec = new int[row][col];
    static int[][] visited = new int[row][col];

    public static void dfs(int y, int x) {
        if (y == row - 1 && x == col - 1) {
            return;
        }

        for (int i = 0; i < 4; i++) {
            int ny = y + dir[i][0];
            int nx = x + dir[i][1];

            if (ny < 0 || ny >= row || nx < 0 || nx >= col) {
                continue;
            }

            if (visited[ny][nx] >= 1) {
                continue;
            }

            if (vec[ny][nx] == 0) {
                continue;
            }

            visited[ny][nx] = visited[y][x] + 1;
            dfs(ny, nx);
            visited[ny][nx] = 0;
        }
    }

    public static void main(String[] args){
        vec = new int[][]{
            {1, 1, 1, 1, 1, 1},
            {1, 0, 1, 1, 0, 0},
            {1, 1, 0, 0, 0, 0},
            {0, 1, 1, 1, 1, 1}
        };

        for(int i=0; i<1000000; i++){
            visited = new int[row][col];
            dfs(0, 0);
        }
    }
}
