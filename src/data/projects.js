import { ag, dcweb, slag, visualizer } from "../assets";

const data = [
  {
    id: 0,
    name: "Anaheim Grease",
    language: "CSS, Tailwind, JavaScript, React, OAuth, NoSQL",
    img: ag,
    url: "https://grease-prod.web.app",
    description: "A website front end and API that allows an admin to timestamp Anaheim City Council recordings and catalog information based on type. Any user can then view the website and interact with all the logged information."
  },
  {
    id: 2,
    name: "Doughnut Clicker Game and Storefront",
    language: "Python, Ursina Game Engine, React, JavaScript, CSS",
    img: dcweb,
    url: "https://doughnut-clicker.web.app",
    description: "A game where users can click on doughnuts to earn points and buy upgrades similar the the game Cookie Clicker. This also has a mock storefront with more info about the game and some reviews from friends."
  },
  {
    id: 3,
    name: "Seung Lee's Animal Gauntlet",
    language: "C#, Azure, MS SQL Server",
    img: slag,
    url: "https://github.com/a-shevlin/SLAGgame.Solution",
    description: "A .NET web app that interacts with a custom API that stores user data. Allows users to create and account, select a group of 'Animals' and then battle other existing users from the database."
  },
  {
    id: 4,
    name: "Top 20 Color Visualizer",
    language: "JavaScript, CSS, HTML",
    img: visualizer,
    url: "https://github.com/a-shevlin/top-20-color-visualizer",
    description: "Shows your Top 20 Spotify artists and songs for the last 6 months! Displays a random visualizer based on the most common genre across these statistics."
  }
]

export default data;