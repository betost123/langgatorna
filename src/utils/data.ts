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
    name: "??lstugan Tullen",
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
    name: "??lstugan Tullen",
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
    name: "9:ans ??lhall",
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
    title: "Quiz p?? Byns Bistro",
    date: "Tisdagar",
    time: "19.00 - 21.00",
    groupSize: "2+",
    description:
      "D?? k??ra v??nner ??r det dags att dra ig??ng quizzet f??r s??songen igen. En blandning av allm??nbildning och popkultur. Ring och boka upp erat bord redan idag p?? 031-242003, eller bes??k hemsidan. Vi har alltid bra erbjudanden p?? mat & dryck. Varmt v??lkomna",
    buttonText: "Boka bord",
    navLink: "https://bynsbistro.superbexperience.com/reserve/experience",
  },
  {
    title: "Andra L??ng Comedy",
    date: "M??ndagar",
    time: "19.00 - 21.00",
    groupSize: "The Abyss",
    description:
      "Andral??ng Comedy med allt fr??n debutanter till mer erfarna komiker. Varje m??ndag kl 20:00 p?? the Abyss",
    buttonText: "Bes??k hemsidan",
    navLink: "https://theabyss.se",
  },
  {
    title: "Quiz med Mike & Jimmy",
    date: "M??n - Tor",
    groupSize: "Flera barer!",
    description:
      "Jimmy & Mike, G??teborgs b??sta, roligaste och snyggaste quizmasters som har quiz p?? olika st??llen. Se fullt schema p?? hemsidan.",
    buttonText: "Quiz-schema",
    navLink: "https://www.facebook.com/quizjimmymike/",
  },
];

export const lunchOfToday: Array<LunchCardModel> = [
  {
    restaurant: "Tvinky",
    navLink: "https://www.tvinky.se",
    optionalInfo:
      "Vi tar inte kontanter, men det g??r j??ttebra att betala med kort.",
    lunchItems: [
      {
        nameOfDish: "Dagens Fisk",
        info: "Bakad Bleka - Rostad Spetsk??l - Rotselleripur?? - Gurkcitronette - F??nk??lscrudit??",
        cost: 135,
      },
      {
        nameOfDish: "Veckans Vegetariska",
        info: "Friterad Fetaost - Bulgur - Rostad Tomatbuljong - Myntayoghurt - Aubergine - Harissa",
        cost: 125,
        allergies: ["vegetarian"],
      },
      {
        nameOfDish: "Veckans K??tt",
        info: "Viltf??rslimpa - Kokt Potatis - Lingon - Stekt Svamp - ??rtor - Gr??dds??s",
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
        info: "Chipotle marinated shrimps / herb mayo / jalape??o slaw / cilantro",
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
          "KALV WALLENBERGARE MED SKIRAT SM??R, POTATISMOS & GR??NA ??RTOR.",
        cost: 129,
      },
      {
        nameOfDish: "STEKT STR??MMING MED ??RTPUR?? & SALTROSTAD POTATIS.",
        cost: 129,
        allergies: ["gluten", "vegan"],
      },
      {
        nameOfDish: "GREKISK MOUSSAKA MED TOMATS??S & FETAOST",
        cost: 129,
      },
    ],
  },
];
