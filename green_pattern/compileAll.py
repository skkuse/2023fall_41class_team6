import subprocess

from os import listdir
from os.path import isfile, join

patterns = [f for f in listdir("./patterns/") if not isfile(join("./patterns/", f))]

for dir_name in patterns:
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
