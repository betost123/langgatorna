import danskenImage from "../images/dansken.png";
import tullenImage from "../images/olstugan-tullen.png";
import contrastImage from "../images/contrast.png";
import bynsImage from "../images/byns-bistro.png";
import brygghusetImage from "../images/brygghuset.png";
import kingsHeadImage from "../images/kings-head.png";
import hopsImage from "../images/hops.png";
import haketImage from "../images/haket.png";
import niansImage from "../images/9ans.png";
import kickOffImage from "../images/kick-off.png";
import tvinkyImage from "../images/tvinky.png";
import magasinetBild from "../images/magasinet-bild.png";
import { BarItem, LunchCardModel } from "./models";

export const categoryCardData = [
  {
    imageSrc:
      "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Dagens lunch",
    navLink: "/activities",
  },
  {
    imageSrc:
      "https://images.pexels.com/photos/6173860/pexels-photo-6173860.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Dagens aktiviteter",
    navLink: "/activities",
  },
  {
    imageSrc:
      "https://images.pexels.com/photos/1267351/pexels-photo-1267351.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Dagens erbjudanden",
    navLink: "/activities",
  },
];

export const BarImages = [
  {
    image:
      "https://images.pexels.com/photos/274192/pexels-photo-274192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "image1",
  },
  {
    image:
      "https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "image2",
  },
  {
    image:
      "https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "image3",
  },
  {
    image:
      "https://images.pexels.com/photos/1089930/pexels-photo-1089930.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "image4",
  },
  {
    image:
      "https://images.pexels.com/photos/1876878/pexels-photo-1876878.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "image5",
  },
];

export const dogFriendlyBarsList = [
  {
    name: "Dansken",
    imageSrc: danskenImage,
  },
  {
    name: "Ölstugan Tullen",
    imageSrc: tullenImage,
  },
  {
    name: "Contrast",
    imageSrc: contrastImage,
  },
  {
    name: "Byns Bistro",
    imageSrc: bynsImage,
  },
  {
    name: "Tvinky",
    imageSrc: tvinkyImage,
  },
  {
    name: "Kafe Magasinet",
    imageSrc: magasinetBild,
  },
];

const dogFriendly = "dogFriendly";
const greatBeers = "greatBeers";
const activityHost = "activityHost";
const vegetarian = "vegetarian";
const goodBathrooms = "goodBathrooms";
const gangFavorite = "gangFavorite";

export const barerLista: Array<BarItem> = [
  {
    name: "Dansken",
    imageSrc: danskenImage,
    filters: [dogFriendly],
  },
  {
    name: "Ölstugan Tullen",
    imageSrc: tullenImage,
    filters: [greatBeers],
  },
  {
    name: "Contrast",
    imageSrc: contrastImage,
    filters: [dogFriendly, activityHost, vegetarian, goodBathrooms],
  },
  {
    name: "Byns Bistro",
    imageSrc: bynsImage,
    filters: [dogFriendly, activityHost, gangFavorite, goodBathrooms],
  },
  {
    name: "Brygghuset",
    imageSrc: brygghusetImage,
    filters: [activityHost, gangFavorite],
  },
  {
    name: "Kings Head",
    imageSrc: kingsHeadImage,
  },
  {
    name: "Hops",
    imageSrc: hopsImage,
    filters: [greatBeers],
  },
  {
    name: "Haket",
    imageSrc: haketImage,
    filters: [activityHost],
  },
  {
    name: "9:ans ölhall",
    imageSrc: niansImage,
  },
  {
    name: "Kick off",
    imageSrc: kickOffImage,
    filters: [dogFriendly, activityHost, gangFavorite],
  },
  {
    name: "Tvinky",
    imageSrc: tvinkyImage,
    filters: [dogFriendly, vegetarian, goodBathrooms],
  },
  {
    name: "Kafe Magasinet",
    imageSrc: magasinetBild,
    filters: [dogFriendly, vegetarian, goodBathrooms],
  },
];

export const activitiesList = [
  {
    title: "Quiz på Byns Bistro",
    date: "Tisdagar",
    time: "19.00 - 21.00",
    groupSize: "2+",
    description:
      "Då kära vänner är det dags att dra igång quizzet för säsongen igen. En blandning av allmänbildning och popkultur. Ring och boka upp erat bord redan idag på 031-242003, eller besök hemsidan. Vi har alltid bra erbjudanden på mat & dryck. Varmt välkomna",
    buttonText: "Boka bord",
    navLink: "https://bynsbistro.superbexperience.com/reserve/experience",
  },
  {
    title: "Andra Lång Comedy",
    date: "Måndagar",
    time: "19.00 - 21.00",
    groupSize: "The Abyss",
    description:
      "Andralång Comedy med allt från debutanter till mer erfarna komiker. Varje måndag kl 20:00 på the Abyss",
    buttonText: "Besök hemsidan",
    navLink: "https://theabyss.se",
  },
  {
    title: "Quiz med Mike & Jimmy",
    date: "Mån - Tor",
    groupSize: "Flera barer!",
    description:
      "Jimmy & Mike, Göteborgs bästa, roligaste och snyggaste quizmasters som har quiz på olika ställen. Se fullt schema på hemsidan.",
    buttonText: "Quiz-schema",
    navLink: "https://www.facebook.com/quizjimmymike/",
  },
];

export const lunchOfToday: Array<LunchCardModel> = [
  {
    restaurant: "Tvinky",
    navLink: "https://www.tvinky.se",
    optionalInfo:
      "Vi tar inte kontanter, men det går jättebra att betala med kort.",
    lunchItems: [
      {
        nameOfDish: "Dagens Fisk",
        info: "Bakad Bleka - Rostad Spetskål - Rotselleripuré - Gurkcitronette - Fänkålscrudité",
        cost: 135,
      },
      {
        nameOfDish: "Veckans Vegetariska",
        info: "Friterad Fetaost - Bulgur - Rostad Tomatbuljong - Myntayoghurt - Aubergine - Harissa",
        cost: 125,
        allergies: ["vegetarian"],
      },
      {
        nameOfDish: "Veckans Kött",
        info: "Viltfärslimpa - Kokt Potatis - Lingon - Stekt Svamp - Ärtor - Gräddsås",
        cost: 125,
      },
    ],
  },

  {
    restaurant: "Tacos & Tequila",
    navLink: "https://tacosandtequila.se/lunch",
    optionalInfo:
      "Side order of your choice (included). Red rice and refritos or Sweet potato fries.",
    lunchItems: [
      {
        nameOfDish: "PULLED LAMB TACOS",
        info: "Braised chili lamb / salsa verde / white onions/ pomegranate",
        cost: 125,
      },
      {
        nameOfDish: "CRISPY BROCCOLI TACOS",
        info: "Beer battered broccoli / habanero BBQ / pickled onions / spring onions",
        cost: 125,
        allergies: ["vegetarian", "vegan", "lactose"],
      },
      {
        nameOfDish: "CHILI SHRIMP TACOS",
        info: "Chipotle marinated shrimps / herb mayo / jalapeño slaw / cilantro",
        cost: 125,
      },
    ],
  },
  {
    restaurant: "Papa Mastani",
    navLink: "https://www.papamastani.se/blank-2",
    lunchItems: [
      {
        nameOfDish:
          "KALV WALLENBERGARE MED SKIRAT SMÖR, POTATISMOS & GRÖNA ÄRTOR.",
        cost: 129,
      },
      {
        nameOfDish: "STEKT STRÖMMING MED ÄRTPURÉ & SALTROSTAD POTATIS.",
        cost: 129,
        allergies: ["gluten", "vegan"],
      },
      {
        nameOfDish: "GREKISK MOUSSAKA MED TOMATSÅS & FETAOST",
        cost: 129,
      },
    ],
  },
];
