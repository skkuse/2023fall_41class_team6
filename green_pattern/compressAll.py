import subprocess

from os import listdir
from os.path import isfile, join

patterns = [f for f in listdir("./patterns/") if not isfile(join("./patterns/", f))]

for dir_name in patterns:
    srcfiles = listdir(f"./patterns/{dir_name}")
    srcfiles.remove("After.java")
    srcfiles.remove("Before.java")
    srcfiles.remove("After.class")
    srcfiles.remove("Before.class")
    srcfiles.remove("after.jar")
    srcfiles.remove("before.jar")

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

