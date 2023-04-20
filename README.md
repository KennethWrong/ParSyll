# Parsyll
We aim to automate your early semester syllabus reading through an easy-to-access dashboard. ParSyll parses key information from your syllabus such as class times, instructor information, locations and more!

Goals:
- Allow students to upload their syllabus and generate a downloadable calendar.
- Display important information about instructor and course.

Our main functionalities:
- Drop pdf for parsing
- Download pdf after parsing
- Add/Edit fields to keep consistent with course
- Easy access to all courses of the syllabus you have parsed

## Run Locally
**NOTICE: YOU MUST HAVE YOUR OWN ENV FILE TO RUN THE PROJECT**
### Two ways of running parsyll locally:
* (**Docker**) Run `docker-compose up && docker-compose rm -fsv` where the docker-compose file is located in the main directory.
* (**Locally**) 
    *  **Frontend**: `cd` into */react-frontend*, run `npm install` and then `npm start`.
    *  **Backend**: `cd` into *backend/src/parsyll_fastapi/*, run `pip install -r requirements.txt` and then `python3 main.py`.

## Homepage
This is where the user is greeted and prompted to login.
![alt text](misc/parsyll_homepage.png)
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FKennethWrong%2FParSyll.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2FKennethWrong%2FParSyll?ref=badge_shield)

## Course Dashboard
This is a preview of the Dashboard that the user will have once they have populated the dashboard.
![alt text](misc/parsyll_dashboard.png)

## PDF drop zone
This is a preview of where the user can drop their pdf for parsing.
![alt text](misc/parsyll_parse_pdf.png)


## License
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FKennethWrong%2FParSyll.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2FKennethWrong%2FParSyll?ref=badge_large)