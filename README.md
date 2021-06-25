# **Authentication Full Stack App**

*You will find a Full Stack Authentication component built with Django Rest Framework and Angular 11 which you can use anytime on your app*

## **Features**
- Token Authentication
- Json Web Token Authentication
- Password Reset
- Social Login

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

- **Clone this project to your desired directory.**

### ***Run the backend:***

***`NB: Please use pip3 and/or python3 if on linux`***

1. *Setup a python environment on your root project folder. [Linux](https://mothergeo-py.readthedocs.io/en/latest/development/how-to/venv.html) or [Windows](https://mothergeo-py.readthedocs.io/en/latest/development/how-to/venv-win.html) (Alternatively use `python3 -m venv environment_name`).*
2. *Activate your python environment and navigate to /backend, then run the following command:*
   > `pip install -r requirements.txt`
3. *Setup your database schema:*
   > `python manage.py migrate`
4. *Setup your admin superuser and fill in the required info:*
   > `python manage.py createsuperuser`
5. *Then run the server:*
   > `python manage.py runserver`
6. *Go to the browser and navigate to `http://127.0.0.1:8000/api/v1` to run the Backend API*

### ***Run the frontend:***
1. *Open another terminal on the same project and navigate to /frontend, then run the following commands to start your frontend:*
	> `npm install`
	>
	> `ng serve`
2. *Go to the browser and navigate to `http://localhost:4200/` to run the Frontend App*

#

## **Login or Register**

#

***`Nolan Seokane Ⓒ Copyright 2021`***
