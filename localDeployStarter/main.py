import threading
import subprocess

fe_path = "/Users/vladbarto/Documents/FACULTATE/AN4/LICENTA/ar-microcontroller-e.learning/professor-frontend"
be_path = "/Users/vladbarto/Documents/FACULTATE/AN4/LICENTA/ar-microcontroller-e.learning/common-backend"


def start_frontend():
    subprocess.run(["ng", "serve"], cwd=fe_path)


def start_backend():
    subprocess.run(["mvn", "spring-boot:run"], cwd=be_path)


# Press the green button in the gutter to run the script.
if __name__ == '__main__':
   thread_FE = threading.Thread(target=start_frontend)
   thread_BE = threading.Thread(target=start_backend)

   thread_FE.start()
   thread_BE.start()

# See PyCharm help at https://www.jetbrains.com/help/pycharm/
