import "babel-polyfill";
import p5 from "p5";

import { Tree } from "./Tree";

const app = p => {
  p.setup = _ => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    const whiteColor = 255;
    p.background(whiteColor);

    const rootStart = p.createVector(p.width / 2, p.height);
    const rootEnd = p.createVector(p.width / 2, p.height - 100);
    const root = new Tree(p, rootStart, rootEnd);
    root.show();
    const branchRight = root.branchRight();
    branchRight.show();
    const branchLeft = root.branchLeft();
    branchLeft.show();
  };

  p.draw = _ => {
    // p.background(255);
  };
};

const appInstance = new p5(app);
