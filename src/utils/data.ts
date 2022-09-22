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

export const barerLista = [
  {
    name: "Dansken",
    imageSrc: danskenImage,
    dogFriendly: true,
  },
  {
    name: "Ölstugan Tullen",
    imageSrc: tullenImage,
    greatBeers: true,
  },
  {
    name: "Contrast",
    imageSrc: contrastImage,
    dogFriendly: true,
    activityHost: true,
    vegetarian: true,
    goodBathrooms: true,
  },
  {
    name: "Byns Bistro",
    imageSrc: bynsImage,
    dogFriendly: true,
    activityHost: true,
    gangFavorite: true,
    goodBathrooms: true,
  },
  {
    name: "Brygghuset",
    imageSrc: brygghusetImage,
    activityHost: true,
    gangFavorite: true,
  },
  {
    name: "Kings Head",
    imageSrc: kingsHeadImage,
  },
  {
    name: "Hops",
    imageSrc: hopsImage,
    greatBeers: true,
  },
  {
    name: "Haket",
    imageSrc: haketImage,
    activityHost: true,
  },
  {
    name: "9:ans ölhall",
    imageSrc: niansImage,
  },
  {
    name: "Kick off",
    imageSrc: kickOffImage,
    dogFriendly: true,
    activityHost: true,
    gangFavorite: true,
  },
  {
    name: "Tvinky",
    imageSrc: tvinkyImage,
    dogFriendly: true,
    vegetarian: true,
    goodBathrooms: true,
  },
  {
    name: "Kafe Magasinet",
    imageSrc: magasinetBild,
    dogFriendly: true,
    vegetarian: true,
    goodBathrooms: true,
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

export const lunchOfToday = [
  {
    title: "Tvinky",
    time: "11.30 - 15.00",
    groupSize: "125 - 135 kr",
    description:
      "Dagens Fisk - Meunièrestekt Flundra. Veckans vegetariska - Friterad Fetaost. Veckans kött - Viltfärslimpa",
  },
  {
    title: "Papa Mastani",
    time: "11.30 - 15.00",
    groupSize: "125 - 135 kr",
    description:
      "MAROKANSK HÖGREVSGRYTA MED PLOMMON & RIS. PASTA TAGLIATELLE MED VARMRÖKT LAX. SURDEGSPIZZA MED BURRATA, PESTO & SOLTORKADE TOMATER.",
  },
  {
    title: "Brödernas",
    time: "11.30 - 15.00",
    groupSize: "120 kr",
    description:
      "Valfri enkelburgare inklusive pommes frites eller side salad. En läsk och kaffe ingår. Kycklingsallad, halloumisallad, barnsallad",
  },
];
