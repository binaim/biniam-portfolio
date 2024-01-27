import AUTOMATION from "./Assets/Projects/3automation.jpg";
import COAST from "./Assets/Projects/MIUSchedule.png";
import DROPSHIP from "./Assets/Projects/dropship.jpg";
import GOOD_FOOD_DISCOUNTS from "./Assets/Projects/goodFoodDiscounts.png";
import GUAMEDIA from "./Assets/Projects/online-shopping.png";
import HSP from "./Assets/Projects/hsp.png";
import COSMOS from "./Assets/Projects/E-commerce.png";
import TECHSPEC from "./Assets/Projects/techspec.png";
import TRAVELWELL from "./Assets/Projects/Banking-framework.png";


export const PROJECTS = [
  {
    image: COSMOS,
    name: "REAL-TIME DATA VISUALIZATION",
    technologyUsed: "ReactJs, Javascript, Redux, knockout.js, Jest",
    description: "Azure Cosmos DB is Microsoft's proprietary globally distributed, multi-model database service 'for managing data at planet-scale' Azure Cosmos DB is a fully managed NoSQL database for modern app development. Single-digit millisecond response times, and automatic and instant scalability, guarantee speed at any scale.",
    url: "https://github.com/binaim/cs523-finalproject-main",
  },
  {
    image: TRAVELWELL,
    name: "Banking System Framework",
    technologyUsed: "Java, JDBC, Star UML, Java Design Patterns, Intellij as IDE",
    description: "This was mainly targeted on developing a stand alon java frame work for banking systems the framework was developed using"
     +" Java and OOP Design Patterns. Few of the Design patterns were used: Observer Pattern, Party Pattern, Account Pattern, Command Pattern, Singleton and Factory patterns",
    url: "https://github.com/binaim/cs523-finalproject-main",
  },
  {
    image: COAST,
    name: "Registration Scheduler",
    technologyUsed: "Java, Spring Boot, Postgres",
    description: "Student registration system and scheduler for the block eduction system practiced at MIU University",
    url: "https://github.com/binaim/se-project-MUMSched",
  },
  {
    image: AUTOMATION,
    name: "3automation.com (RPA)",
    technologyUsed: "ReactJs, Typescript, Redux",
    description: "The next-gen Robotic Process Automation (#RPA) platform for retail and telecom domains. The ultimate automation platform for your Shopify, Email, E- commerce shop",
    url: "https://github.com/binaim/cs523-finalproject-main",
  },
  {
    image: GUAMEDIA,
    name: "Online Ordering System (Shoping Cart)",
    technologyUsed: "Java, AWS SDK, AWS Lambda, DynamoDB, APIgateway, Route53, AMC, CloudFront and S3",
    description: "This is a scalable Microservice based architecture Online Ordering system. The Microservices are Lambda functions which runs behind an APIgateway.",
    url: "https://github.com/binaim/SCADA-AUTOMATION-SERVICES",
  },
  {
    image: TECHSPEC,
    name: "TechSpec",
    technologyUsed: "ReactJs, Typescript, Redux",
    description: "TechSpec is e-commerce web app. User can compare his product and purchange. This had a dashboard web app which had the data of orders placed and type of user.",
    url: "",
  },
  {
    image: HSP,
    name: "HSP (Health Solution Plus)",
    technologyUsed: "ReactJs, Javascript, Redux",
    description: "This is a Healthcare sector project which would be developed as replica of a desktop application. My responsibilities in this project are to develop UI, perform searching of medical codes and categories, addition/updation of codes and categories.",
    url: "",
  },
  {
    image: DROPSHIP,
    name: "DropShip Shopify App",
    technologyUsed: "Shopify, React, typescript, polaris, GraphQL, Nodejs, Koajs",
    description: "It is customized clothes shopify app which fetch order from store and give option to customize product and send detail to store owner. Also maintain tracking etc of product.",
    url: "",
  },
  {
    image: GOOD_FOOD_DISCOUNTS,
    name: "GoodFoodDiscounts",
    technologyUsed: "ReactNative, Javascript, Redux",
    description: "Good food discouts app is similar like swiggy. Food and hotel can be searched and can be order. Even has facility to add coupan. You can add food in favourite list.",
    url: "",
  },
];

export const SKILLS = [
  { name: "Java", initialRating: 4 },
  { name: "Spring Boot", initialRating: 4 },
  { name: "JavaScript", initialRating: 4 },
  { name: "Redux", initialRating: 4 },
  { name: "Reactjs", initialRating: 4 },
  { name: "Microservices", initialRating: 3 },
  { name: "Design Patterns", initialRating: 3 },
  { name: "Html", initialRating: 4 },
  { name: "CSS", initialRating: 4 },
  { name: "Unit-Testing(Jest)", initialRating: 3 },
  { name: "Restful Webservices", initialRating: 4 },
  { name: "Graphql", initialRating: 4 },
  { name: "Webspckets", initialRating: 4 },
  { name: "AntD | ReactStrap | Material UI", initialRating: 4 },
  { name: "Shopify Polaris", initialRating: 4 },
  { name: "Git", initialRating: 4 },
];

export const TOOLS = ["Intellij","Visual Studio Code", "Git", "Chrome DevTools", "Npm (Node Package Manager)", "Atom", "Sublime Text", "Linux", "Heroku", "Postman","Docker","Kubernetes","Dynatrace","Splunk","Xmatters","ServiceNow"]
