# ar-microcontroller-e.learning
My bachelor thesis on Augmented Reality used in educational domain of learning about ARM-based microcontrollers (e.g. Arduino)

# Installation and use
## Professor-Frontend and Common-Backend
For it to work you need to have `python` installed on your machine. In the repo you will find a `main.py` file which runs both programs. In order to start it, open a terminal where the file is located and run the following command:
```python
python3 main.py
```
This command will start the backend server on port 2003 and frontend web app on port 4200.

The website is accessible on http://localhost:4200/ or http://localhost:4200/auth/login. If you see a blank page, you have to delete the `jwt-token` entry from cookies (by accessing in your browser Inspector -> Application or Storage -> Cookies)


