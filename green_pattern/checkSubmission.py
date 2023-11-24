
import time
import subprocess
import warnings

warnings.filterwarnings("ignore", category=DeprecationWarning) 

from os import listdir
from os.path import isfile, join

jar_files = [f for f in listdir("./submission/") if isfile(join("./submission/", f))]

for jar_name in jar_files:
    execution_result = subprocess.run(["java", "-jar", f"{jar_name}"], capture_output=True, cwd=f'./submission')
    try:
        execution_result.check_returncode()
    except subprocess.CalledProcessError as err:
        print(f"*******{jar_name} runtime error*******")
        raw_err = execution_result.stderr
        err = raw_err.decode("unicode_escape").strip()
        print(err)
        exit(0)

print("===All files executed successfully===")
print("======You are ready to submit!!======")