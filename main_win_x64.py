import threading
import subprocess
import shutil
import sys
import os

# Get the current working directory (where main.py is located)
current_dir = os.getcwd()

# Define relative paths for frontend and backend
fe_path = os.path.join(current_dir, "professor-frontend")
be_path = os.path.join(current_dir, "common-backend")

def check_command_exists(command):
    path = shutil.which(command)
    if path:
        print(f"{command} found at: {path}")
    return path is not None

def start_frontend():
    try:
        # Check if Angular CLI is installed
        if not check_command_exists("ng"):
            print("Error: Angular CLI (ng) is not installed. Please install it with `npm install -g @angular/cli`.")
            sys.exit(1)

        # Run Angular command with .CMD extension explicitly for Windows
        process = subprocess.Popen(["ng.CMD", "serve", "--host", "0.0.0.0"], cwd=fe_path, stdout=subprocess.PIPE, stderr=subprocess.PIPE, shell=True)

        # Stream the output live
        while True:
            output = process.stdout.readline()
            if output == b'' and process.poll() is not None:
                break
            if output:
                print(f"Frontend: {output.decode().strip()}")
        
        # Handle stderr as well
        while True:
            error = process.stderr.readline()
            if error == b'' and process.poll() is not None:
                break
            if error:
                print(f"Frontend Error: {error.decode().strip()}")
        
    except Exception as e:
        print(f"Error in starting frontend: {e}")

def start_backend():
    try:
        # Check if Maven is installed
        if not check_command_exists("mvn"):
            print("Error: Maven (mvn) is not installed. Please install it following instructions at https://maven.apache.org/install.html")
            sys.exit(1)

        # Use 'mvn' universally for Maven commands and explicitly use the .CMD extension for Windows
        process = subprocess.Popen(["mvn.CMD", "spring-boot:run"], cwd=be_path, stdout=subprocess.PIPE, stderr=subprocess.PIPE, shell=True)

        # Stream the output live
        while True:
            output = process.stdout.readline()
            if output == b'' and process.poll() is not None:
                break
            if output:
                print(f"Backend: {output.decode().strip()}")
        
        # Handle stderr as well
        while True:
            error = process.stderr.readline()
            if error == b'' and process.poll() is not None:
                break
            if error:
                print(f"Backend Error: {error.decode().strip()}")
        
    except Exception as e:
        print(f"Error in starting backend: {e}")

if __name__ == '__main__':
    # Ensure the user is in the correct directory
    if not os.path.isdir(fe_path) or not os.path.isdir(be_path):
        print("Error: Either 'professor-frontend' or 'common-backend' directory is missing.")
        sys.exit(1)

    thread_FE = threading.Thread(target=start_frontend)
    thread_BE = threading.Thread(target=start_backend)

    thread_FE.start()
    thread_BE.start()

    thread_FE.join()
    thread_BE.join()
