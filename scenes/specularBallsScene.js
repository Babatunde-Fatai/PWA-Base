import * as Babylon from "../WebXR-Modules/babylon.js";
// import * as GUI from "../WebXR-Modules/babylon.gui.js"
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

   var specularBallsScene = function () {  
    var scene = new BABYLON.Scene(engine);
    var camera = new BABYLON.ArcRotateCamera("Camera", -Math.PI / 4, Math.PI / 2.5, 200, BABYLON.Vector3.Zero(), scene);
    camera.attachControl(canvas, true);
    camera.minZ = 0.1;
    camera.useAutoRotationBehavior = true;
    
    // Environment Texture
    var hdrTexture = BABYLON.CubeTexture.CreateFromPrefilteredData("../textures/environment.dds", scene);
    var hdrTexture02 = BABYLON.CubeTexture.CreateFromPrefilteredData("../textures/ennisSpecularHDR.dds", scene);

    scene.imageProcessingConfiguration.exposure = 0.6;
    scene.imageProcessingConfiguration.contrast = 1.6;

    // Skybox
    var hdrSkybox = BABYLON.Mesh.CreateBox("hdrSkyBox", 1000.0, scene);
    var hdrSkyboxMaterial = new BABYLON.PBRMaterial("skyBox", scene);
    hdrSkyboxMaterial.backFaceCulling = false;
    hdrSkyboxMaterial.reflectionTexture = hdrTexture.clone();
    hdrSkyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
	hdrSkyboxMaterial.microSurface = 1.0;
    hdrSkyboxMaterial.disableLighting = true;
    hdrSkybox.material = hdrSkyboxMaterial;
    hdrSkybox.infiniteDistance = true;

    // Create meshes
    var sphereGlass = BABYLON.Mesh.CreateSphere("sphereGlass", 48, 30.0, scene);
    sphereGlass.translate(new BABYLON.Vector3(1, 0, 0), -60);

    var sphereMetal = BABYLON.Mesh.CreateSphere("sphereMetal", 48, 30.0, scene);
    sphereMetal.translate(new BABYLON.Vector3(1, 0, 0), 60);

	var spherePlastic = BABYLON.Mesh.CreateSphere("spherePlastic", 48, 30.0, scene);
    spherePlastic.translate(new BABYLON.Vector3(0, 0, 1), -60);

    var woodPlank = BABYLON.MeshBuilder.CreateBox("plane", { width: 65, height: 1, depth: 65 }, scene);
    //var woodPlank02 = BABYLON.MeshBuilder.CreateBox("plane", { width: 65, height: 1, depth: 65 }, scene);
    //woodPlank02.translate(new BABYLON.Vector3(0, 1, 0), -60);

    // Create meshes
    var sphereGlass1 = BABYLON.Mesh.CreateSphere("sphereGlass2", 48, 30.0, scene);
    sphereGlass1.translate(new BABYLON.Vector3(1, 0, -2), -60);

    var sphereMetal1 = BABYLON.Mesh.CreateSphere("sphereMetal2", 48, 30.0, scene);
    sphereMetal1.translate(new BABYLON.Vector3(1, 0, 2), 60);

	var spherePlastic1 = BABYLON.Mesh.CreateSphere("spherePlastic2", 48, 30.0, scene);
    spherePlastic1.translate(new BABYLON.Vector3(0, 0, -3), -60);

    var woodPlank02 = BABYLON.MeshBuilder.CreateBox("plane2", { width: 65, height: 1, depth: 65 }, scene);
    woodPlank02.translate(new BABYLON.Vector3(0, 0, -2), -60);


    // Create materials
    var glass = new BABYLON.PBRMaterial("glass", scene);
    glass.reflectionTexture = hdrTexture;
    glass.refractionTexture = hdrTexture;
    glass.linkRefractionWithTransparency = true;
    glass.indexOfRefraction = 0.52;
    glass.alpha = 0;
    glass.microSurface = 1;
    glass.reflectivityColor = new BABYLON.Color3(Math.random(), Math.random(), 0.2);
    glass.albedoColor = new BABYLON.Color3(Math.random(), Math.random(), Math.random());
    sphereGlass.material = glass;

   // Create materials
    var glass2 = new BABYLON.PBRMaterial("glass", scene);
    glass2.reflectionTexture = hdrTexture;
    glass2.refractionTexture = hdrTexture;
    glass2.linkRefractionWithTransparency = true;
    glass2.indexOfRefraction = 0.52;
    glass2.alpha = 0;
    glass2.microSurface = 1;
    glass2.reflectivityColor = new BABYLON.Color3(Math.random(), Math.random(), Math.random());
    glass2.albedoColor = new BABYLON.Color3(Math.random(), Math.random(), Math.random());
    sphereGlass1.material = glass2;
    //console.log(Math.random());


    var metal = new BABYLON.PBRMaterial("metal", scene);
    metal.reflectionTexture = hdrTexture;
    metal.microSurface = 0.96;
    metal.reflectivityColor = new BABYLON.Color3(Math.random(), Math.random(), Math.random());
    metal.albedoColor = new BABYLON.Color3(Math.random(), Math.random(), Math.random());
    sphereMetal.material = metal;

    var metal02 = new BABYLON.PBRMaterial("metal", scene);
    metal02.reflectionTexture = hdrTexture;
    metal02.microSurface = 0.96;
    metal02.reflectivityColor = new BABYLON.Color3(Math.random(), Math.random(), Math.random());
    metal02.albedoColor = new BABYLON.Color3(Math.random(), Math.random(), Math.random());
    sphereMetal1.material = metal02;



	
	var plastic = new BABYLON.PBRMaterial("plastic", scene);
    plastic.reflectionTexture = hdrTexture;
    plastic.microSurface = 0.96;
	plastic.albedoColor = new BABYLON.Color3(Math.random(), Math.random(), Math.random());
	plastic.reflectivityColor = new BABYLON.Color3(Math.random(), Math.random(), Math.random());
    spherePlastic.material = plastic;

    var plastic1 = new BABYLON.PBRMaterial("plastic", scene);
    plastic1.reflectionTexture = hdrTexture;
    plastic1.microSurface = 0.96;
	plastic1.albedoColor = new BABYLON.Color3(Math.random(), Math.random(), Math.random());
	plastic1.reflectivityColor = new BABYLON.Color3(Math.random(), Math.random(), Math.random());
    spherePlastic1.material = plastic1;



    var wood = new BABYLON.PBRMaterial("wood", scene);
    wood.reflectionTexture = hdrTexture;
    wood.environmentIntensity = 1;
    wood.specularIntensity = Math.random();

    wood.reflectivityTexture = new BABYLON.Texture("../textures/reflectivity.png", scene);
    wood.useMicroSurfaceFromReflectivityMapAlpha = true;

    wood.albedoColor = BABYLON.Color3.White();
    wood.albedoTexture = new BABYLON.Texture("../textures/albedo.png", scene);
    woodPlank.material = wood;
    woodPlank02.material = wood;

    //scene control
    //  sceneManager.sceneEffect(10);


		
    return scene;
};
var chosenScene = specularBallsScene();   
            

  

engine.runRenderLoop(function () {
  
   chosenScene.render();
   
});

// Resize
window.addEventListener("resize", function () {
    engine.resize();
});

