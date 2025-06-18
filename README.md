# ar-microcontroller-e.learning
My bachelor thesis on Augmented Reality used in educational domain of learning about ARM-based microcontrollers (e.g. Arduino)

# Installation and use
## Professor-Frontend and Common-Backend

### Prerequisites
```
- node
- python
- maven
- java v17
- postgreSQL v14.18
```

**Installation of Prerequisites for Windows 64bit x86 architecture**
1. Install __Node__ from (here)[https://nodejs.org/en]. On Windows systems it will install __Chocolatey__ which will also install Python. So first two prerequisites: job done!
2. Install __Maven__ from (here)[https://maven.apache.org/download.cgi], section **Maven Daemon__. 
    2.1. Go to System Environment -> click on **Path** -> then **Edit** -> add **bin** folder from where Maven has been installed here.
3. Install **Java 17** from (here)[https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html].
    3.1. Go to System Environment -> click on **New** -> Variable name: JAVA_HOME -> Variable path: (browse) insert **jdk-17** folder from wherever Java has installed itself, tipically C:\Program Files\Java\jdk-17
    3.2. Still in System Environment -> click on **Path** -> add New -> the entry is gonna be the following, without the double-quotes: "%JAVA_HOME%\bin".
4. Install **PostgreSQL v14.18** from (here)[https://www.enterprisedb.com/downloads/postgres-postgresql-downloads]. When installing, **check Install PgAdmin4** as well.
    4.1. Username: postgres, Password: postgres (you have to set it), Port: 5432
    4.2. Open PgAdmin4 and create a Database called **embedded_systems_db**

## Initialization
In this repo you can find a file called `setup.py`. This file deletes old caches and rebuilds the project.

Regardless of the operating system, please run with python in any command line:
```bash
python3 setup.py # If your OS is MacOS or any Linux distro
```
or
```bash
python setup.py # For Windows
```

## Running 
In the repo you will find a `main_win_x64.py` (For Windows) and a `main_macOS_arm64.py` file (For MacOS, but works as well on any Linux distro) which runs both programs. In order to start it, open a terminal where the file is located and run the following command:
```bash
python3 main_macOS_arm64.py # MacOS or Linux
```
or
```bash
python main_win_x64.py # Windows
```

This command will start the backend server on port 2003 and frontend web app on port 4200.

The website is accessible on http://localhost:4200/ or http://localhost:4200/auth/login. If you see a blank page, you have to delete the `jwt-token` entry from cookies (by accessing in your browser Inspector -> Application or Storage -> Cookies)


