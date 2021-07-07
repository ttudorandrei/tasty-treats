# Tasty Treats

## Table of Contents

- [Tasty Treats](#tasty-treats)
  - [Table of Contents](#table-of-contents)
  - [Description](#description)
  - [Getting Started](#getting-started)
  - [Screenshots](#screenshots)
  - [Link to Github](#link-to-github)

## Description

Tasty Treats app is an inquiry form that allows for messages to be submitted by users and saved in the database. Messages can also be viewed by accessing the View Messages page.

## Getting Started

- open the terminal and cd into your desired folder

- run `git clone git@github.com:ttudorandrei/tasty-treats.git`

- cd into tasty-treats folder

- run `mongo`

- type `use tastyBakeryDb` into your terminal and press "Enter"

- to seed the database type `db.messages.insert()` into your terminal and add [this array](./src/data/messages.js) between the round brackets

- type in `code .`

- in your VSCode terminal type in `npm run start`

- open the link displayed in your terminal

## Screenshots

Homepage
![Tasty Treats Homepage](public/assets/img/tasty-treats-homepage.png)

Leave a Message
![Leave a Message Page](public/assets/img/tasty-treats-leave-a-message.png)

View Messages
![View Messages](public/assets/img/tasty-treats-view-messages.png)

## Link to Github

You can view the repository for this application by clicking [here](https://github.com/ttudorandrei/tasty-treats)
