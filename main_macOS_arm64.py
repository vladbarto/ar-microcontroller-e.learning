import threading
import subprocess
import os

base_dir = os.path.dirname(os.path.abspath(__file__))

be_path = os.path.join(base_dir, "common-backend")
fe_path = os.path.join(base_dir, "professor-frontend")


def start_frontend():
    subprocess.run(["ng", "serve", "--host", "0.0.0.0"], cwd=fe_path)


def start_backend():
    subprocess.run(["mvn", "spring-boot:run"], cwd=be_path)


# Press the green button in the gutter to run the script.
if __name__ == '__main__':
   thread_FE = threading.Thread(target=start_frontend)
   thread_BE = threading.Thread(target=start_backend)

   thread_FE.start()
   thread_BE.start()

# See PyCharm help at https://www.jetbrains.com/help/pycharm/
