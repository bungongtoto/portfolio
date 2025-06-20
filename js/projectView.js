import { projects } from "./data.js";

const urlParams = new URLSearchParams(window.location.search);
const projectId = parseInt(urlParams.get("id"));

const project = projects.find((project) => project.id === projectId);

const title = document.getElementById("project-title");
const description = document.getElementById("project-description");
const mainImg = document.getElementById("main-image");
const features = document.getElementById("features");

//setting up the page
title.textContent = project.title;
description.textContent = project.description;
mainImg.setAttribute("src", project.image);

//setup github links

//setting up the feature section.
const featureList = project.features.forEach((feature) => {
  //feature container
  const div = document.createElement("div");
  div.classList.add("feature-container");

  //feature div
  const featureDiv = document.createElement("div");
  featureDiv.classList.add("feature");

  //feature container title
  const title = document.createElement("h3");
  title.textContent = feature.featureName;

  //feature description
  const paragraph = document.createElement("p");
  paragraph.textContent = feature.description;

  // feature image
  const image = document.createElement("img");
  image.setAttribute("src", feature.image);

  //setting up
  featureDiv.appendChild(title);
  featureDiv.appendChild(paragraph);
  div.appendChild(featureDiv);
  div.appendChild(image);

  features.appendChild(div);
});
