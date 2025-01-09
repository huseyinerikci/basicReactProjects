# Crypto Place Project
Cryptoplace is a cryptocurrency tracker application where you can track and visualize live data of cryptocurrencies using CoinGecko API. This project is developed using React, Redux Toolkit, Redux-thunk, Chart.js and other modern web technologies. The application has a responsive user interface, allowing users to track the prices of cryptocurrencies and examine detailed data.

## Preview
A preview of my crypto place project is in the gif below.

![cryptoPlace](https://github.com/user-attachments/assets/a0fca624-c43c-46fa-97d8-6cfd6fa0143f)

## Features
* Live Crypto Data: Retrieves and displays current cryptocurrency data via CoinGecko API.
* State Management with Redux: All state management of the application is done using Redux Toolkit. Asynchronous data operations are performed with Redux-thunk.
* Interactive Charts: Graphically visualizes the value changes of cryptocurrencies over time with Chart.js and react-chart library.
* Detail Page: When users click on a cryptocurrency, detailed data and charts related to that currency are displayed.
* Dollar Equivalent Calculation: The user can change the value entered for 1 dollar of cryptocurrencies and the calculation is made instantly.
* Responsive Design: The application is designed to be responsive to provide a good experience on different devices.
* Price Formatting: Using the Millify library, prices and other data are displayed in a readable format (for example, 1M instead of 1,000,000).

## Technologies
* React.js: Creating a user interface
* Redux Toolkit: State management and asynchronous operations
* redux-thunk: Managing asynchronous actions
* axios: HTTP client for API requests
* Chart.js: Chart visualization
* react-chartjs-2: Integrating Chart.js with React
* react-router-dom: Routing for page transitions
* Millify: Number formatting (for example, 1,000,000 -> 1M)
* CSS: Style adjustments for responsive and aesthetic design
