import "./style.css";
import data from "./data/data";
import { createThreeScene } from "./threeScene";

const cubes = [
  "./treeDrawings/DSGN_313_Cadavre_Exquis_Simard_Alex.jpg",
  "./DSGN_313_Cadavre_Exquis_Simard_Alex2.jpg",
  "./DSGN_313_Cadavre_Exquis_Simard_Alex3.jpg",
  "./DSGN 313-Collage-Alex Simard.jpg",
];

const trees = [
  "./public/Naming_Convention.png",
  "./public/Object_1.png",
  "./public/Object_2.png",
  "./public/Object_3.png",
];

const dogs = [
  "./public/3d_print.png",
  "./public/Paper Model.png",
  "./public/Photogrammetry.png",
];
document.querySelector("#app").innerHTML = `
  <main id="container">
    <section id="heading">
      <h1>${data.name}</h1>
      <p>${data.bio}</p>
    </section>

    <section id="projects">
      <div id="project-row">
      Model 1
        <div class="three-model">
          <a href="./cubeDrawings/DSGN_313_Cadavre_Exquis_Simard_AlexV2.jpg" target="new">
              <img src="./cubeDrawings/DSGN_313_Cadavre_Exquis_Simard_AlexV2.jpg" alt="random image" width="400" height="300" id="model1"> 
            </a>
        </div>
        <div id="images-description">
          <div id="images">
            <a href="./cubeDrawings/DSGN_313_Cadavre_Exquis_Simard_AlexV2.jpg" target="new">
              <img src="./cubeDrawings/DSGN_313_Cadavre_Exquis_Simard_AlexV2.jpg" alt="random image" width="400" height="300">
            </a>
            <a href="./cubeDrawings/DSGN_313_Cadavre_Exquis_Simard_Alex.jpg" target="new">
              <img src="./cubeDrawings/DSGN_313_Cadavre_Exquis_Simard_Alex.jpg" alt="random image" width="400" height="300">
            </a>
            <a href="./cubeDrawings/DSGN_313_Cadavre_Exquis_Simard_Alex2.jpg" target="new">
              <img src="./cubeDrawings/DSGN_313_Cadavre_Exquis_Simard_Alex2.jpg" alt="random image" width="400" height="300">
            </a>
            <a href="./cubeDrawings/DSGN_313_Cadavre_Exquis_Simard_Alex3.jpg" target="new">
              <img src="./cubeDrawings/DSGN_313_Cadavre_Exquis_Simard_Alex3.jpg" alt="random image" width="400" height="300">
            </a>
          </div>
          <h4 id="description">Throughout my teenage years, I found myself losing a part of my identity, one which directed me as a child; my desire for adventure. Over time I began to see moments of excitement, formed on the back of adventures and exploration, slip away, leaving me discontent with the monotony of which my life was quickly becoming. Upon reflecting on this issue further, I was able to reintroduce “adventure” into my life. Despite this, I have been left with a singular question: If I am to lose this part of me again, will the next time I regain it be too late?.</h4>
        </div>
      </div>

      <div id="project-row">
      Model 2
        <div class="three-model">
          <div id="model2"></div>
        </div>
        <div id="images-description">
          <div id="images">
            ${trees
              .map(
                (trees, index) =>
                  `<img src="${trees}" alt="tree${index + 1}" />`
              )
              .join("")}
          </div>
          </div>
                  <div class="three-model">
                </div>
        <div id="images-description">
          <div id="images">
            ${dogs
              .map(
                (dogs, index) =>
                  `<img src="${dogs}" alt="dog${index + 1}" />`
              )
              .join("")}
          </div>
          <h4 id="description">Interoperability brought forward the extensive exploration of import/export modifications, and in-house program modifications, yielding wildly different results for each individual combination. With my own approach to this project, I focussed on exploring the cascading effects of these aforementioned manipulations.</h4>
        </div>
      </div>

      <div id="project-row">
      Model 3
        <div class="three-model">
          <div id="model3"></div>
        </div>
        <div id="images-description">
          <div id="images">
            ${cubes
              .map(
                (cube, index) => `<img src="${cube}" alt="cube${index + 1}" />`
              )
              .join("")}
          </div>
          <h4 id="description">A 3D house model is a geometric representation of a house, featuring walls, a roof, and windows. It often includes additional details such as doors, chimneys, and balconies, with textures like brick, wood, or stucco to enhance realism. The interior may also feature rooms, furniture, and lighting for a more detailed design.</h4>
        </div>
      </div>
    </section>

    <ul id="footer-items">
      <li>Email: ${data.contact.email}</li>
      <li>Phone: ${data.contact.phone}</li>
      <li>LinkedIn: <a href="${data.contact.linkedin}">${
  data.contact.linkedin
}</a></li>
      <li>GitHub: <a href="${data.contact.github}">${
  data.contact.github
}</a></li>
    </ul>
  </main>
`;

// Create three.js scenes for each
createThreeScene("#model1", "/3DModels/project1/cube.obj");
createThreeScene("#model2", "/Portfolio.obj");
createThreeScene("#model3", "/3DModels/project3/cottage.obj");
