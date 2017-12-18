class Tree {
  constructor(p, rootStart, rootEnd) {
    this._p = p;
    this.start = rootStart;
    this.end = rootEnd;
  }

  show() {
    const p = this._p;

    p.line(this.start.x, this.start.y, this.end.x, this.end.y);
  }

  branchRight() {
    const p = this._p;

    const start = p.createVector(this.end.x, this.end.y);
    const end = this.end.copy();
    end.sub(this.start);
    end.rotate(p.PI / 4);
    end.add(this.end);
    const rightBranch = new Tree(p, start, end);
    return rightBranch;
  }

  branchLeft() {
    const p = this._p;

    const start = p.createVector(this.end.x, this.end.y);
    const end = this.end.copy();
    end.sub(this.start);
    end.rotate(-p.PI / 4);
    end.add(this.end);
    const leftBranch = new Tree(p, start, end);
    return leftBranch;
  }
}

export { Tree };
