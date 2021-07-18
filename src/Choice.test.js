import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Choice from "./Choice.js";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("Renders the proper orientation class", () => {
  act(() => {
    render(<Choice orientation="left"/>, container);
  });
  expect(container.children[0].className).toBe("choice left")
});

it("Renders the proper image", () => {
  act(() => {
    render(<Choice value="rock" />, container);
  });

  let img = container.querySelector("img")
  expect(img.alt).toEqual('rock')
  expect(img.src).toEqual('http://localhost/rock.png')
});

