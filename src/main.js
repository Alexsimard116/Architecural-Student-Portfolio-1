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
  "./treeDrawings/tree1.jpg",
  "./treeDrawings/tree2.jpg",
  "./treeDrawings/tree3.jpg",
  "./treeDrawings/tree4.jpg",
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
          <div id="model1"></div>
        </div>
        <div id="images-description">
          <div id="images">
            <img src="./cubeDrawings/DSGN_313_Collage_Alex_Simard.jpg">
            <img src="./cubeDrawings/DSGN_313_Cadavre_Exquis_Simard_Alex.jpg">
            <img src="./cubeDrawings/DSGN_313_Cadavre_Exquis_Simard_Alex2.jpg">
            <img src="./cubeDrawings/DSGN_313_Cadavre_Exquis_Simard_Alex3.jpg">
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
          <h4 id="description">A 3D tree model is a geometric representation of a tree, featuring a trunk, branches, and foliage. The trunk is typically cylindrical, with textured bark, while the branches extend outward to support leaves or a canopy. It may include roots or flowers for added detail.</h4>
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
createThreeScene("#model2", "/3DModels/project2/tree.obj");
createThreeScene("#model3", "/3DModels/project3/cottage.obj");
