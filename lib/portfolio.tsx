type Content = {
  pageTitle: string;
  apps: App[];
};

type App = {
  name: string;
  id: string;
  description: string;
  techUsed: Array<string>;
  href?: string;
  gitLink: string;
  imgSelector: string;
};

export const content: Content = {
  pageTitle: "Portfolio",
  apps: [
    {
      name: "< CN />",
      id: "cn",
      description:
        "The portfolio with the mostolio, you're already on it, it's web-ception. While the projects showcased here could, admittedly, still use a tad more polish (most were created in the span of either a few days or a couple weeks during the breakneck pace of Epicodus' accelerated-learning program), it is my intention that this portfolio demonstrates a few qualities of my work ethic, evolution, and style as a developer: a high aptitude for readily absorbing a wide range of tech concepts, languages, and tooling and then implementing them, the ability to handle fast deadlines and ship deliverables/MVPs, and a natural flair of creativity and innovation.",
      techUsed: [
        "Next.js, React + Hooks",
        "TypeScript",
        "TailwindCSS",
        "PostCSS + Autoprefixer plugin",
        "Nodemailer + Custom Internal API",
        "Form Validation",
        "Dynamic Page Routing",
        "Windups (Typewriter)",
        "CI/CD Deployment & Hosting (Vercel)",
        "Custom Domain Configuration (Google Domains)",
      ],
      gitLink: "https://github.com/cordenbrock/portfolio",
      imgSelector: "bg-cn",
    },
    {
      name: "Musica Universalis",
      id: "musica-universalis",
      description: `Interactive constellation drawing app that features an animated cosmic backdrop, "stellar" synth sounds, user configurables, and a talking moon... In the spirit of the great mathematically-minded audiophiles from Pythagoras to Keppler, Musica Universalis--a reference to the metaphysical concept also known as the "music of the spheres"--was developed with the goal to further explore the relations between sound and shapes, harmony and space. In the very least, the intention here is to invoke and highlight the fundamental human instinct for play and curiosity, and to tap into the often strange, emergent visual or aural patterns that arise.`,
      techUsed: [
        "React + Hooks",
        "Tone.js",
        "Material-UI",
        "Canvas API Graphics",
        "CSS Animations",
        "CI/CD Deployment & Hosting (Vercel)",
        "Custom Domain Configuration (Google Domains)",
        "Google Analytics Integration",
      ],
      href: "https://www.musica-universalis.com/",
      gitLink: "https://github.com/cordenbrock/musica-universalis",
      imgSelector: "bg-musica-universalis",
    },
    {
      name: "Paro",
      id: "paro",
      description:
        "An analog music discovery tool designed to bridge the preferential rift between analog and digital listening. Designed, developed, and deployed web app with five of my Epicodus peers! Paro takes user-input keywords to search through Spotify's library and return a playable album + album details. Paro checks to see if the album is available for purchase on Discogs' vinyl marketplace and will provide a link for purchase if so. Note: search results are queried from Spotify's database and thus a Spotify account is required to get Paro-ing.",
      techUsed: [
        "Vanilla JS/HTML/CSS",
        "jQuery",
        "oAuth 2.0 User Authorization",
        "Spotify API",
        "Discogs API",
        "Postman",
        "Heroku Deployment",
      ],
      href: "http://paro-for-president.herokuapp.com/",
      gitLink: "https://github.com/cordenbrock/paro",
      imgSelector: "bg-paro",
    },
    {
      name: "Tapper",
      id: "tapper",
      description:
        "A web app that would allow a barkeep to track and manage inventory for a Tapper-themed taproom. An exercise in building a frontend React SPA with a full CRUD interface and to create a Redux store along with corresponding actions/reducers to manage all state. Additionally, the source code contains basic unit tests for all reducer functions to demonstrate how to use Jest's testing framework.",
      techUsed: ["React", "Redux", "Bootstrap", "Jest unit testing", "GH-Pages Deployment"],
      href: "https://cordenbrock.github.io/tapper/",
      gitLink: "https://github.com/cordenbrock/tapper-redux",
      imgSelector: "bg-tapper",
    },
    {
      name: "Parks API",
      id: "parks-api",
      description:
        "This API was built as an exercise in creating a RESTful web API with full CRUD functionality. It may be used to read/write onto an SQL database structured with a two table schema and various properties detailing seeded data from a custom list of national and state parks. This API also flexes a couple bonus features in the form of very basic API versioning and an open-source display tool courtesy of Swagger-UI for neatly visualizing all requests/responses in the browser.",
      techUsed: [
        "C#",
        "ASP.NET Core MVC",
        "MySQL",
        "Entity Framework Core 2.2.6",
        "Identity",
        "NSwag 13.3.0",
        "Postman",
      ],
      gitLink: "https://github.com/cordenbrock/Parks",
      imgSelector: "bg-parks-api",
    },
    {
      name: "Exchangerator",
      id: "exchangerator",
      description:
        "Exchangerator is a simple web app for converting any monetary value to another in over 50 different currencies. Each currency conversion requested by the user utilizes the ExchangeRate API to ensure currency conversions are always accurate and up-to-date. Additionally, after the first user request, all current conversion rates retrieved from the API are then set in session storage. The benefit here is twofold: from the perspective of the API provider, their server resources are taxed less because all user conversion requests result in only one call per session; and, from the perspective of the end-user, all subsequent conversion requests after the first are executed on the client-side and thus calculated more quickly on account of there being no time wasted fetching data from a server.",
      techUsed: [
        "Vanilla JS/HTML/CSS",
        "jQuery",
        "Webpack",
        "Postman",
        "ExchangeRate API",
        "Session Storage",
        "Heroku Deployment",
      ],
      href: "https://exchangerator.herokuapp.com/",
      gitLink: "https://github.com/cordenbrock/currency-exchange",
      imgSelector: "bg-exchangerator",
    },
  ],
};
