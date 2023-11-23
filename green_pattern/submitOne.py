import subprocess
import sys
from os import listdir
from os.path import isfile, join
import time

if len(sys.argv) < 2:
    print("please input dir_name.")
    exit(1)

dir_name = sys.argv[1]

bef_compilation_result = subprocess.run(["javac", "Before.java"], capture_output=True, cwd=f'./patterns/{dir_name}')
aft_compilation_result = subprocess.run(["javac", "After.java" ], capture_output=True, cwd=f'./patterns/{dir_name}')
try:
    bef_compilation_result.check_returncode()
    aft_compilation_result.check_returncode()
except subprocess.CalledProcessError as err:
    bef_raw_err = bef_compilation_result.stderr
    aft_raw_err = aft_compilation_result.stderr
    err = bef_raw_err.decode("unicode_escape").strip() + "\n" + aft_raw_err.decode("unicode_escape").strip()
    print(err)
    exit(0)

srcfiles = listdir(f"./patterns/{dir_name}")

rmfiles = ["After.java", "Before.java", "After.class", "Before.class", "after.jar", "before.jar"]
for file in rmfiles:
    if file in srcfiles:
        srcfiles.remove(file)
        
bef_compression_result = subprocess.run(["jar", "cfe", "before.jar", "Before", "Before.class", *srcfiles], capture_output=True, cwd=f'./patterns/{dir_name}')
aft_compression_result = subprocess.run(["jar", "cfe", "after.jar",  "After",  "After.class", *srcfiles], capture_output=True, cwd=f'./patterns/{dir_name}')
try:
    bef_compression_result.check_returncode()
    aft_compression_result.check_returncode()
except subprocess.CalledProcessError as err:
    bef_raw_err = bef_compression_result.stderr
    aft_raw_err = aft_compression_result.stderr
    err = bef_raw_err.decode("unicode_escape").strip() + "\n" + aft_raw_err.decode("unicode_escape").strip()
    print(err)
    exit(0)


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

# measure Before.java execution time
execution_result = subprocess.run(["copy", r".\after.jar", r"..\..\submission"], capture_output=True, cwd=f'./patterns/{dir_name}', shell=True)
try:
    execution_result.check_returncode()
except subprocess.CalledProcessError as err:
    print(f"copy jar from patterns/{dir_name}to submissions/ failed")
    print("===> saving as .jar failed")
    exit(0)

# measure After.java execution time
execution_result = subprocess.run(["copy", ".\\before.jar", f"..\\..\\submission"], capture_output=True, cwd=f'./patterns/{dir_name}', shell=True)
try:
    execution_result.check_returncode()
except subprocess.CalledProcessError as err:
    print(f"copy jar from patterns/{dir_name}to submissions/ failed")
    print("===> saving as .jar failed")
    exit(0)


subfiles = listdir("./submission")
if f"after_{dir_name}.jar" in subfiles:
    execution_result = subprocess.run(["del", f"after_{dir_name}.jar"], capture_output=True, cwd=f'./submission', shell=True)
    try:
        execution_result.check_returncode()
    except subprocess.CalledProcessError as err:
        print("remove previous jar failed")
        print("===> saving as .jar failed")
        exit(0)

if f"before_{dir_name}.jar" in subfiles:
    execution_result = subprocess.run(["del", f"before_{dir_name}.jar"], capture_output=True, cwd=f'./submission', shell=True)
    try:
        execution_result.check_returncode()
    except subprocess.CalledProcessError as err:
        print("remove previous jar failed")
        print("===> saving as .jar failed")
        exit(0)

execution_result = subprocess.run(["ren", "after.jar", f"after_{dir_name}.jar"], capture_output=True, cwd=f'./submission', shell=True)
try:
    execution_result.check_returncode()
except subprocess.CalledProcessError as err:
    print("rename failed")
    print("===> saving as .jar failed")
    exit(0)

execution_result = subprocess.run(["ren", "before.jar", f"before_{dir_name}.jar"], capture_output=True, cwd=f'./submission', shell=True)
try:
    execution_result.check_returncode()
except subprocess.CalledProcessError as err:
    raw_err = execution_result.stderr
    err = raw_err.decode("unicode_escape").strip()
    print("rename failed")
    print("===> saving as .jar failed")
    exit(0)

print("===> succefully saved as .jar")