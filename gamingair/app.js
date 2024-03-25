import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.124/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";

const scene = new THREE.Scene();

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
  });
renderer.setSize(window.innerWidth,window.innerHeight);

const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 30;

const geometry = new THREE.TorusGeometry( 13, 2, 10, 25 ); 
const material = new THREE.MeshStandardMaterial( { color: 0x555555, wireframe:true} ); 
const torus = new THREE.Mesh( geometry, material ); 

scene.add( torus );

const geometry2 = new THREE.TorusKnotGeometry( 9.481, 1.722, 77, 7, 3, 7 );
const material2 = new THREE.MeshStandardMaterial( { color: 0xffffff, wireframe: true } ); 
const torusKnot = new THREE.Mesh( geometry2, material2 ); 

torusKnot.position.x = -20
torusKnot.position.y = 0
torusKnot.position.z = 220
torusKnot.rotation.y = 15

scene.add( torusKnot );

let object;

const loader = new GLTFLoader();
loader.load(
    `untitled.glb`,
    function (glb) {
      //If the file is loaded, add it to the scene
      object = glb.scene;
      object.position.set(0,4,0)
      object.rotation.x = -0.25
      
      scene.add(object);
      object.rotation.y = 2
    },
    function (xhr) {
      //While it is loading, log the progress
      console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    },
    function (error) {
      //If there is an error, log it
      console.error(error);
    }
  );


const pointLight = new THREE.PointLight(0xffffff, 10, 0, 0);
pointLight.position.set(-9, 5, 5);
const pointLight2 = new THREE.PointLight(0xffffff, 1, 0, 0);
pointLight2.position.set(15, -5, 20);
const pointLight3 = new THREE.PointLight(0xffffff, 10, 0, 0);
pointLight2.position.set(15, -20, 20);
const ambientLight = new THREE.AmbientLight(0xffffff);

scene.add(pointLight, ambientLight, pointLight2 ,pointLight3);

const sphereSize = 1;
const pointLightHelper = new THREE.PointLightHelper( pointLight, sphereSize );
scene.add( pointLightHelper );
const pointLightHelper2 = new THREE.PointLightHelper( pointLight2, sphereSize );
scene.add( pointLightHelper2 );
const pointLightHelper3 = new THREE.PointLightHelper( pointLight3, sphereSize );
scene.add( pointLightHelper3 );

// const controls = new OrbitControls(camera, renderer.domElement);


function animate() {
    const t = document.body.getBoundingClientRect().top;
    requestAnimationFrame(animate);
    // controls.update();
    
    object.rotation.y = 4+t/2500
    object.rotation.x = -0.25+t*-0.00012
    torusKnot.rotation.z += 0.004
    torusKnot.rotation.y += 0.002
    torusKnot.rotation.x += 0.004
    renderer.render(scene, camera);
}

function addStar() {
    const geometry = new THREE.IcosahedronGeometry(0.2, 1);
    const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
    const star = new THREE.Mesh(geometry, material);
  
    const [x, y, z] = Array(3)
      .fill()
      .map(() => THREE.MathUtils.randFloatSpread(500));
  
    star.position.set(x, y, z);
    scene.add(star);
}

Array(400).fill().forEach(addStar);

function moveCamera() {
    const t = document.body.getBoundingClientRect().top;

    if (t > -100) {
      camera.position.x=10
    }

    camera.position.z = t * -0.01;
    camera.position.x = 20
    torus.rotation.x = t*0.0001
    torus.rotation.y = t*0.0001
    
    if (t < -6000) {
        // camera.position.x = (t+6000) * -0.0002;
        camera.rotation.y = (t+6000) * -0.0002;
    }
}
document.body.onscroll = moveCamera;
moveCamera();

animate()