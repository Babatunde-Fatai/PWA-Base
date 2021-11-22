import * as Babylon from "../WebXR-Modules/babylon.js";
import * as sceneManager from "./sceneManager.js";

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

var twinStoneScene = function () {

    // This creates a basic Babylon Scene object (non-mesh)
    var scene = new BABYLON.Scene(engine);
    scene.clearColor = new BABYLON.Color3.Black();

   // Parameters: name, alpha, beta, radius, target position, scene
    var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0, 10, new BABYLON.Vector3(0, 0, 0), scene);

    // Positions the camera overwriting alpha, beta, radius
    camera.setPosition(new BABYLON.Vector3(0, 5, -10));
    camera.useAutoRotationBehavior = true;
    //camera.idleRotationSpeed = 20;

    // This targets the camera to scene origin
    camera.setTarget(BABYLON.Vector3.Zero());

    // This attaches the camera to the canvas
    camera.attachControl(canvas, true);
    
    // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
    var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);

    // Default intensity is 1. Let's dim the light a small amount
    light.intensity = 0.8;
    light.specular = new BABYLON.Color3(0.4, 0.4, 0.9);

    var gl = new BABYLON.GlowLayer("glow", scene);
    gl.intensity = 0.25;
    // Our built-in 'sphere' shape. Params: name, subdivs, size, scene
    var sphere = BABYLON.Mesh.CreateSphere("sphere1", 8, 2, scene);
    var sphere2 = BABYLON.Mesh.CreateSphere("sphere2", 8, 2, scene);

    // Move the sphere upward 1/2 its height
    sphere.position.y = 2;
    sphere2.position.y = 2;
    sphere2.position.x = 3;
    sphere.position.x = -3;

    // Our built-in 'ground' shape. Params: name, width, depth, subdivs, scene
    var ground = BABYLON.Mesh.CreateGround("ground1", 10, 6, 2, scene);
    var material = new BABYLON.StandardMaterial("mat", scene);
    material.diffuseTexture = new BABYLON.Texture("../textures/Floor.png", scene);
    // material.diffuseTexture = new BABYLON.Texture("../textures/Floor-tile-textures.jpg", scene);
    // material.diffuseTexture.uScale = 5;
    // material.diffuseTexture.vScale = 5;
    material.bumpTexture = new BABYLON.Texture("../textures/floor_bump.png", scene);
    material.bumpTexture.level = 0.3;
    //   material.bumpTexture.uScale = 2;
    //       material.bumpTexture.vScale = 2;
    material.emissiveTexture = new BABYLON.Texture("../textures/candleopacity.png", scene);
    material.emissiveColor = new BABYLON.Color3(0.6, 0.5, 0.4);
    material.specularTexture = new BABYLON.Texture("../textures/earth.jpg", scene);

    ground.material = material;
    sphere.material = material;
    sphere2.material = material;
   

    var alpha = 0;
    scene.registerBeforeRender(function () {
        material.diffuseTexture.uOffset += 0.001;
        material.bumpTexture.uOffset += 0.002;
        material.bumpTexture.vOffset -= 0.001;
        material.specularTexture.vOffset -= 0.001;
        var reverse = localStorage.getItem('reverser');
        if (reverse == null){

         //  material.diffuseTexture.vOffset += 0.005;
        //    material.bumpTexture.vOffset += 0.005;
        }else{

        material.diffuseTexture.vOffset += 0.005;
        material.bumpTexture.vOffset += 0.005;

        }
    

        material.bumpTexture.level += Math.sin(alpha) / 200;
        gl.intensity += Math.sin(alpha) / 900;
        //console.log(material.bumpTexture.level);
        alpha += 0.01;
    });

    return scene;

};

var chosenScene = twinStoneScene();

  

engine.runRenderLoop(function () {
  
   chosenScene.render();
   
});

// Resize
window.addEventListener("resize", function () {
    engine.resize();
});

