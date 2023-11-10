import time
import sys
import subprocess
import warnings

warnings.filterwarnings("ignore", category=DeprecationWarning) 

# ##################### USAGE ###################### #
#                                                    #
# > python ./measureRuntim.py [dir name] [average N] #
#                                                    #
# ################################################## #

# to do
# usage 측정필요
# multi processing -> 시간 단축 필요 (popen 활용)
# 한글 지원
# 측정을 파일 단위로 할건지 패키지 단위로 할건지 함수단위로 할건지
# 정해야함


if len(sys.argv) < 2:
    print("please input dir_name.")
    exit(1)

dir_name = sys.argv[1]
avg_n = int(sys.argv[2])  if (len(sys.argv) >= 3) else 1000


# compile Before.java and After.java
bef_compilation_result = subprocess.run(["javac", "Before.java"], capture_output=True, cwd=f'./{dir_name}')
aft_compilation_result = subprocess.run(["javac", "After.java" ], capture_output=True, cwd=f'./{dir_name}')
try:
    bef_compilation_result.check_returncode()
    aft_compilation_result.check_returncode()
except subprocess.CalledProcessError as err:
    bef_raw_err = bef_compilation_result.stderr
    aft_raw_err = aft_compilation_result.stderr
    err = bef_raw_err.decode("unicode_escape").strip() + "\n" + aft_raw_err.decode("unicode_escape").strip()
    print(err)
    # some other error handlings
    exit(0)


# measure Before.java execution time
bef_execution_time = 0
for i in range(avg_n):
    start_time = time.perf_counter()
    execution_result = subprocess.run(["java", "Before"], capture_output=True, cwd=f'./{dir_name}')
    bef_execution_time += (time.perf_counter()-start_time)
    try:
        execution_result.check_returncode()
    except subprocess.CalledProcessError as err:
        raw_err = execution_result.stderr
        err = raw_err.decode("unicode_escape").strip()
        print(err)
        # some other error handlings
        exit(0)
bef_execution_time /= avg_n

# measure After.java execution time
aft_execution_time = 0
for i in range(avg_n):
    start_time = time.perf_counter()
    execution_result = subprocess.run(["java", "After"], capture_output=True, cwd=f'./{dir_name}')
    aft_execution_time += (time.perf_counter()-start_time)
    try:
        execution_result.check_returncode()
    except subprocess.CalledProcessError as err:
        raw_err = execution_result.stderr
        err = raw_err.decode("unicode_escape").strip()
        print(err)
        # some other error handlings
        exit(0)
aft_execution_time /= avg_n

print(f"============= Result (avg={avg_n}) =============")
print(f"[Before.java] avg runtime: {bef_execution_time:0.4f}s")
print(f"[After.java ] avg runtime: {aft_execution_time:0.4f}s")
if bef_execution_time > aft_execution_time:
    print(f"=> runtime decreased by {bef_execution_time-aft_execution_time:0.4f}s")
else:
    print("=> runtime has not decreased...")


# power draw for cores × usage + power draw for memory