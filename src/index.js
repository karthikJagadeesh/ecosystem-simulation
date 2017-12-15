import "babel-polyfill";
import p5 from "p5";

import Tree from "./Tree";

const app = p => {

  p.setup = _ => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    const whiteColor = 255;
    p.background(whiteColor);
  };

  p.draw = _ => {};
};

const appInstance = new p5(app);
