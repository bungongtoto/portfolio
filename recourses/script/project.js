import { projects } from "./data.js";

// const viewProjectBtns = document.getElementsByClassName("project-button");
const projectList = document.getElementById("project-list");

// const projectBtnClicked = () => {
//   window.location.href = "project-view.html";
// };

projects.forEach((project) => {
  const div = document.createElement("div");
  const image = document.createElement("img");
  const title = document.createElement("h2");
  const paragraph = document.createElement("p");
  const button = document.createElement("button");
  const i = document.createElement("i");

  // the project tile container
  div.setAttribute("id", project.id);
  div.classList.add("project-container");

  //project tile image
  image.setAttribute("src", project.image);

  //project tile title
  title.textContent = project.title;

  //project tile paragraph
  paragraph.classList.add("project-description");
  paragraph.textContent = project.description.slice(0, 100);

  //button
  button.textContent = "View Project";
  button.classList.add("project-button");
  button.appendChild(i);

  //buttoon even listener
  button.addEventListener("click", () => {
    const url = `project-view.html?id=${project.id}`;
    window.location.href = url;
  });
  //i
  i.classList.add("fa-solid");
  i.classList.add("fa-arrow-right");

  //finalizing the elements
  div.appendChild(image);
  div.appendChild(title);
  div.appendChild(paragraph);

  div.appendChild(button);

  projectList.appendChild(div);
});
