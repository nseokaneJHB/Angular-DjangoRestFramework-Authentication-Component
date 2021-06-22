# **Components**

*You will find a Full Stack Token Authentication component built with Django Rest Framework and Angular 11 which you can use anytime on your app*

#

## **Prerequisites**

- **Python**
	- `python 3.9.1`
	- `pip 21.0.1`
- **Node & NPM**
	- `NodeJS v14.16.0`
	- `npm 7.6.3`
	- `Angular 11.2.4`
	- `Angular CLI 11.2.4`
- **Text Editor of your choice** (I am using [vscode](https://code.visualstudio.com/download))

*NB: If you have not installed `Python` on your machine please visit the [Python Official Site](https://www.python.org/downloads/), download and set it up*

*NB: If you have not installed `NodeJS` on your machine please visit the [NodeJS Official Site](https://nodejs.org/en/), download and set it up*

#

## ***Project Setup***

- *_Clone this project to your desired directory._*

### ***Run the backend:***
1. _Setup a python environment on your root project folder. [Linux](https://mothergeo-py.readthedocs.io/en/latest/development/how-to/venv.html) or [Windows](https://mothergeo-py.readthedocs.io/en/latest/development/how-to/venv-win.html) (Alternatively use `python3 -m venv environment_name`)._
2. _Activate your python environment and navigate to /backend, then run the following command:_
   - _`pip install -r requirements.txt` if on Windows_
   - _`pip3 install -r requirements.txt` if on Linux_
3. _Setup your database schema:_
   - _`python manage.py migrate` if on Windows_
   - _`python3 manage.py migrate` if on Linux_
4. _Then run the server:_
   - _`python manage.py runserver` if on Windows_
   - _`python3 manage.py runserver` if on Linux_
5. _Go to the browser and navigate to `http://127.0.0.1:8000/api/v1` to run the Backend API_

### ***Run the frontend:***
1. _Open another terminal on the same project and navigate to /frontend, then run the following commands to start your frontend:_
	- _`npm install`_
	- _`ng serve`_
2. _Go to the browser and navigate to `http://localhost:4200/` to run the Frontend App_

#

## **Login and Register Component**

#

***`Nolan Seokane Ⓒ Copyright 2021`***
