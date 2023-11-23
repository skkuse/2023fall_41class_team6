
import time
import subprocess
import warnings

warnings.filterwarnings("ignore", category=DeprecationWarning) 

from os import listdir
from os.path import isfile, join

patterns = [f for f in listdir("./patterns/") if not isfile(join("./patterns/", f))]

for dir_name in patterns:
    # measure Before.java execution time

    bef_execution_time = 0
    start_time = time.perf_counter()
    execution_result = subprocess.run(["java", "-jar", "before.jar"], capture_output=True, cwd=f'./patterns/{dir_name}')
    bef_execution_time += (time.perf_counter()-start_time)
    try:
        execution_result.check_returncode()
    except subprocess.CalledProcessError as err:
        raw_err = execution_result.stderr
        err = raw_err.decode("unicode_escape").strip()
        print(err)
        # some other error handlings
        exit(0)

    # measure After.java execution time
    aft_execution_time = 0
    start_time = time.perf_counter()
    execution_result = subprocess.run(["java", "-jar", "after.jar"], capture_output=True, cwd=f'./patterns/{dir_name}')
    aft_execution_time += (time.perf_counter()-start_time)
    try:
        execution_result.check_returncode()
    except subprocess.CalledProcessError as err:
        raw_err = execution_result.stderr
        err = raw_err.decode("unicode_escape").strip()
        print(err)
        # some other error handlings
        exit(0)

    print(f"============= Result ({dir_name}) =============")
    print(f"[Before.jar] runtime: {bef_execution_time:0.4f}s")
    print(f"[After.jar ] runtime: {aft_execution_time:0.4f}s")
    if bef_execution_time > aft_execution_time:
        print(f"=> runtime decreased by {bef_execution_time-aft_execution_time:0.4f}s")
    else:
        print("=> runtime has not decreased...")