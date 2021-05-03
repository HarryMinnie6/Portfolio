import React, { Fragment } from "react";
import Project from "./ProjectComponent/Project";
import "./ProjectsPage.css";

function ProjectsPage() {
  return (
    <section class="projects-section" id="projects">
      <h2>PROJECTS</h2>
      <div class="projects-holder">
        <Project
          project__name={"NodeJS login"}
          project__image={""}
          project__description={"ggg"}
          made__using={
            "Made using EJS (embedded JavaScript), Express.js, HTML5, CSS3"
          }
          github__link={"https://github.com/HarryMinnie6/NodeJS-JWT-login"}
          demo__link={"https://nodejs-jwt-login.herokuapp.com/"}
        />
        <Project
          project__name={"Legal-One challenge"}
          project__image={""}
          project__description={
            "I was asked to build this project as part of a coding task to proceed in their recruitment process. In this project a call center log is displayed from various JSON files. The call logs for a specific number or agent can be viewed as well as the agent profile."
          }
          made__using={"Made using React, Express.js, Node.js."}
          github__link={"https://github.com/HarryMinnie6/challenge-legal-one"}
          demo__link={"https://legal-one-challenge.herokuapp.com/"}
        />
        <Project
          project__name={"Random buy E-commerce"}
          project__image={""}
          project__description={
            "An ecommerce site where users can add items to their cart, proceed to checkout and process the payment. This project was made to focus on Stripe Payment and the checkout process"
          }
          made__using={
            "Made using React, Stripe online payment, deployed to firebase."
          }
          github__link={"https://github.com/HarryMinnie6/random-buy-ecommerce"}
          demo__link={"https://random-buy-ecommerce-37454.web.app/"}
        />
        <Project
          project__name={"Accomodation in Struisbaai"}
          project__image={""}
          project__description={
            "A site for a holiday home in Struisbaai, visitors can view images of the house, view the rates of the house and find out about acitivites in/around the town."
          }
          made__using={""}
          github__link={""}
          demo__link={"https://accommodation-struisbaai.co.za/"}
        />
        <Project
          project__name={"Developer Searcher"}
          project__image={""}
          project__description={
            "On this site the user is able to Sign-up, login and logout, add work experience and education history to their profile, view other user profiles, post a comment, like comments as well as delete their profile."
          }
          made__using={"Made using React, MongoDB, Express.js, Node.js."}
          github__link={"https://github.com/HarryMinnie6/DevSearcher2-MERN"}
          demo__link={"https://safe-ridge-27366.herokuapp.com/"}
        />
        <Project
          project__name={"'Fakealot' - Takealot clone"}
          project__image={""}
          project__description={
            "A clone of the leading ecommerce retailer in South Africa. This is a clone of the homepage where the user is able to create an account, login, add items to their cart, remove items from their cart as well as log out"
          }
          made__using={"Made using React, deployed to firebase."}
          github__link={"https://takealot-clone.web.app/"}
          demo__link={"https://takealot-clone.web.app/"}
        />
        <Project
          project__name={"Netflix-clone"}
          project__image={""}
          project__description={
            "A clone of the online streaming service Netflix. The site data is pulled from a third party API and displays the relevant information to the user. The user is able to scroll through the genres and view the trailer for the selected series or movie."
          }
          made__using={"Made using React, deployed to firebase."}
          github__link={"https://github.com/HarryMinnie6/netflix-clone"}
          demo__link={"https://netflix-clone-3d128.web.app/"}
        />
        <Project
          project__name={"Sunset Skimboards"}
          project__image={""}
          project__description={
            "Concept site for Sunset skim-boards. There is a link to the shop where users can view products and add them to the cart. When items are added to the cart they are stored in local storage. Items in the cart can have the quantities increased/decreased and can also be removed from the cart."
          }
          made__using={"Made with HTML, CSS, JavaScript."}
          github__link={"https://github.com/HarryMinnie6/Sunset-Skim-boards"}
          demo__link={"https://harryminnie6.github.io/Sunset-Skim-boards/"}
        />
        <Project
          project__name={"Rock Paper Scissors"}
          project__image={""}
          project__description={
            "A Rock Paper Scissors game built with HTML, CSS and vanilla JavaScript. The user plays against the computer, where the scores are updated after every round as well as if the user has won, lost or a draw is obtained."
          }
          made__using={"Made with HTML, CSS, JavaScript."}
          github__link={"https://github.com/HarryMinnie6/Rock-Paper-Scissors"}
          demo__link={"https://harryminnie6.github.io/Rock-Paper-Scissors/"}
        />
        <Project
          project__name={"Weather App"}
          project__image={""}
          project__description={
            "A Weather app that displays the user's current location and weather conditions. It also has an extended 4 day forecast. The app gets info from a third party API and displays the relevant information to the user."
          }
          made__using={"Made with HTML, CSS, JavaScript."}
          github__link={"https://github.com/HarryMinnie6/Weather-app"}
          demo__link={"https://harryminnie6.github.io/Weather-app/."}
        />
      </div>
    </section>
  );
}

export default ProjectsPage;
