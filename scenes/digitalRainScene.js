import * as Babylon from "../WebXR-Modules/babylon.js";
import * as babylonD from "../WebXR-Modules/babylon.digitalRainPostProcess.js"
///////////////////////////////////////////////////////////////////////////



var canvas = document.getElementById("renderCanvas");
var engine = new BABYLON.Engine(canvas, true);

// var checkboxText; //checkbox text
// var checkbox;
// var pinText;
// sceneManager.searchBox();
// sceneManager.sceneDetail();
// sceneManager.createCheckbox(checkboxText, checkbox); // deal wth onclick event
// sceneManager.pinScene(pinText);

//add sphere
function addSphere (dia, x, y, z, w, scene) { //w is to make wireframe

    var sphere = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter: dia}, scene);
    sphere.position = new BABYLON.Vector3(x, y, z)
    var pointsMaterial = new BABYLON.StandardMaterial("Material", scene);
    // pointsMaterial.pointsCloud = true;
    // pointsMaterial.pointSize = 2;
    pointsMaterial.diffuseColor = new BABYLON.Color3(1, 0, 1);
    pointsMaterial.specularColor = new BABYLON.Color3(0.5, 0.6, 0.87);
    pointsMaterial.emissiveColor = new BABYLON.Color3(1, 1, 1);
    pointsMaterial.ambientColor = new BABYLON.Color3(0.23, 0.98, 0.53);

    if(w == true) {
    pointsMaterial.wireframe = true;
    sphere.material = pointsMaterial;

    }else {
      sphere.material = pointsMaterial;

    }
    

    return sphere;
}

     //RAIN//Done //Change font // Add sphere adding functionality and maybe 3D names to show within the rain
var digitalRainScene = function () {

    // This creates a basic Babylon Scene object (non-mesh)
    var scene = new BABYLON.Scene(engine);

    // This creates and positions a free camera (non-mesh)
    //var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(10, 5, -10), scene);

    var camera = new BABYLON.ArcRotateCamera("camera1", 0, 50, -90, new BABYLON.Vector3(0, 0, -0), scene);
    camera.setPosition(new BABYLON.Vector3(10, 5, -10));
    camera.attachControl(canvas, true);
    camera.useAutoRotationBehavior = true;
    camera.autoRotationBehavior.idleRotationSpeed = 0.2; 



    // var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);
    // light.intensity = 0.7;


    // This targets the camera to scene origin
    camera.setTarget(BABYLON.Vector3.Zero());

    // This attaches the camera to the canvas
    camera.attachControl(canvas, true);

    // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
    var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);

    // Default intensity is 1. Let's dim the light a small amount
    light.intensity = 0.7;

    var box2 = addSphere(5, 0, 0, 10, true, scene)
    var box = addSphere(5, 0, 0, 0, false, scene)
    //var box = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter: 5}, scene);
    //sceneManager.addSphere(5, 10, 0, 0, true, scene)

     // Our built-in 'sphere' shape.
    //var Earth = BABYLON.MeshBuilder.CreateBox("Earth", {diameter: 2, segments: 32}, scene);

    box.position.z = 2;
    box2.position.x = 2;


    const frameRate = 10;

    const zSlide = new BABYLON.Animation("zSlide", "position.z", frameRate, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
    const xSlide = new BABYLON.Animation("xSlide", "position.x", frameRate, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);

    const keyFrames = []; 

    keyFrames.push({
        frame: 0,
        value: 2
    });

    keyFrames.push({
        frame: frameRate,
        value: -4
    });

    keyFrames.push({
        frame: 2 * frameRate,
        value: 2
    });

    zSlide.setKeys(keyFrames);
    xSlide.setKeys(keyFrames);

    box.animations.push(zSlide);
    box2.animations.push(xSlide);


    scene.beginAnimation(box, 0, 2 * frameRate, true);
    scene.beginAnimation(box2, 0, 2 * frameRate, true);


    

    // Our built-in 'ground' shape. Params: name, width, depth, subdivs, scene
    //var ground = BABYLON.Mesh.CreateGround("ground1", 6, 6, 2, scene);
	
	// Creates the post process
	var postProcess = new BABYLON.DigitalRainPostProcess("DigitalRain", camera);
    
  


  return scene;
 



};

var chosenScene = digitalRainScene();
            


//localStorage.removeItem('favePocket') //remove instance of fave made by popup if any
  

engine.runRenderLoop(function () {
  
   chosenScene.render();
   
});

// Resize
window.addEventListener("resize", function () {
    engine.resize();
});

