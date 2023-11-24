
import time
import subprocess
import warnings


from os import listdir
from os.path import isfile, join

patterns = [f for f in listdir("./patterns") if not isfile(join("./patterns/", f))]
for dir_name in patterns:
    # measure Before.java execution time
    execution_result = subprocess.run(["copy", r".\after.jar", r"..\..\submission"], capture_output=True, cwd=f'./patterns/{dir_name}', shell=True)
    try:
        execution_result.check_returncode()
    except subprocess.CalledProcessError as err:
        raw_err = execution_result.stderr
        err = raw_err.decode("unicode_escape").strip()
        print(err)
        # some other error handlings
        exit(0)

    # measure After.java execution time
    execution_result = subprocess.run(["copy", ".\\before.jar", f"..\\..\\submission"], capture_output=True, cwd=f'./patterns/{dir_name}', shell=True)
    try:
        execution_result.check_returncode()
    except subprocess.CalledProcessError as err:
        raw_err = execution_result.stderr
        err = raw_err.decode("unicode_escape").strip()
        print(err)
        # some other error handlings
        exit(0)


# measure Before.java execution time
    execution_result = subprocess.run(["ren", "after.jar", f"after_{dir_name}.jar"], capture_output=True, cwd=f'./submission', shell=True)
    try:
        execution_result.check_returncode()
    except subprocess.CalledProcessError as err:
        raw_err = execution_result.stderr
        err = raw_err.decode("unicode_escape").strip()
        print(err)
        # some other error handlings
        exit(0)

    # measure After.java execution time
    execution_result = subprocess.run(["ren", "before.jar", f"before_{dir_name}.jar"], capture_output=True, cwd=f'./submission', shell=True)
    try:
        execution_result.check_returncode()
    except subprocess.CalledProcessError as err:
        raw_err = execution_result.stderr
        err = raw_err.decode("unicode_escape").strip()
        print(err)
        # some other error handlings
        exit(0)