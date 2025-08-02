# My official bachelor thesis : ar-microcontroller-e.learning
## Important: any other operation than reading is strictly forbidden, as the project makes now part of the official TUCN archive.
My bachelor thesis on Augmented Reality used in educational domain of learning about ARM-based microcontrollers (e.g. Arduino)

# Results
Student app:

<img width="570" height="384" alt="image" src="https://github.com/user-attachments/assets/52e47dbc-0485-4ac3-aa84-ddc8abce914c" />
<img width="569" height="409" alt="image" src="https://github.com/user-attachments/assets/b0c27fed-d9d1-44f6-bd1a-70ece0f4193a" />

Teacher app:

<img width="574" height="294" alt="image" src="https://github.com/user-attachments/assets/ffe19309-bb66-43b6-8c2e-bc61cc1626fd" />
<img width="578" height="280" alt="image" src="https://github.com/user-attachments/assets/f1bbc0b9-2df0-4b8e-b5ef-d472c7e4bdd1" />

# Real life situation setup use case
<img width="644" height="419" alt="image" src="https://github.com/user-attachments/assets/010dc03c-c4ad-4895-837b-ebe2f4c56325" />

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


