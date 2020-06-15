import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import './scripts/preloader';

import "./scripts/skills";

import "./scripts/slider";

import "./scripts/reviews";

import "./scripts/form";

import inputValue from "./scripts/inputValue";

import parallax  from "./scripts/parallax";

import popupMenu from "./scripts/popupMenu";

import hoverScroll from "./scripts/hoverScroll";

import anchorScroll from "./scripts/anchorScroll";

inputValue();

parallax('.js-promo-area');

parallax('.js-leaf-area');

popupMenu();

hoverScroll();

anchorScroll();



