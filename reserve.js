import * as Babylon from "../WebXR-Modules/babylon.js";
import * as sceneManager from "./sceneManager.js";
import * as BABYLONX from "../WebXR-Modules/GeometryBuilder.js"
import * as BabylonLoaders from "../WebXR-Modules/babylonjs.loaders.js"
import * as GUI from "../WebXR-Modules/babylon.gui.js"
import * as babylonD from "../WebXR-Modules/babylon.digitalRainPostProcess.js"
import * as firePro from "../WebXR-Modules/babylon.fireProceduralTexture.min.js"



 


///////////////////////////////////////////////////////////////////////////
class Background {
      constructor (skyboxLink, scene) {
          this.skybox = BABYLON.Mesh.CreateBox("skyBox", 10000.0, scene);
          this.skyboxMaterial = new BABYLON.BackgroundMaterial("skyBox", scene);
          this.skyboxMaterial.backFaceCulling = false;
          this.skyboxMaterial.disableLighting = true;
          var files = skyboxLink
        //   if() {

        //   }else{
              
        //   }
          this.skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture.CreateFromImages(files, scene);
          this.skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
          this.skybox.material = this.skyboxMaterial;
          this.skybox.infiniteDistance = true;
      }
  } //handling skybox insertion


var canvas = document.getElementById("renderCanvas");
var engine = new BABYLON.Engine(canvas, true);
var sceneAre = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15]
var fave = localStorage.getItem('pinScene'); //favourite/pinned scene
var chosenScene = null;
var showScene = 6; //scene to display

// if(fave == null){

//   showScene = sceneManager.randomScene(sceneAre); //spawn random scenes
//   localStorage.removeItem('newScene') //cear any saved scene
//   //saving current scene
//   var newScene = localStorage.setItem('newScene', JSON.stringify(showScene)); //Always save new scenes
//   console.log("New scene saved: " + localStorage.getItem('newScene'))


// }else{
  

//   var currentPop = localStorage.getItem('favePocket') // save former fave scene

//   if(currentPop == null){

//   showScene = parseInt(fave); //please remember to convert from string
  

//   }else{

//     //localStorage.removeItem
//   showScene = fave; 


//   }

//   console.log('This is the current scene ' + fave);
//   console.log('This is Show secne scene ' + showScene);

//   localStorage.removeItem('newScene') //clear any saved scene
//   //saving current scene
//   var newScene = localStorage.setItem('newScene', fave); //Always save new scenes
//   console.log("This is Fave: " + localStorage.getItem('newScene'))

// }




    
var checkboxText; //checkbox text
var checkbox;
var pinText;
sceneManager.searchBox();

sceneManager.pinScene(pinText);
sceneManager.createDate();

//sceneManager.chosenScene(showScene, favorite);

  switch (showScene) {
                    case 0:   

    var createScene00 = function () {

        var scene = new BABYLON.Scene(engine);
        scene.clearColor = BABYLON.Color3.Black();
        //container = new BABYLON.AssetContainer(scene) //Container for all assets

        var camera = new BABYLON.ArcRotateCamera("Camera", -.707, 1.1, 80, new BABYLON.Vector3(0, -4, 0), scene);
        camera.attachControl(canvas, true);
        camera.speed = 0.5;
        camera.useAutoRotationBehavior =  true;
        //camera.setPosition(new BABYLON.Vector3(-3.37, 0.95, 0));
        camera.attachControl(canvas, true);
        //camera.lowerRadiusLimit = camera.radius;
        //camera.upperRadiusLimit = camera.radius;
        // //  camera.inputs.clear();

        scene.activeCamera.beta = Math.PI/1.7;
        var sun = {
        name: "sun"
        } 
        
        var jake = sceneManager.loadStar(sun.name, true, scene);
    

        // This attaches the camera to the canvas
        camera.attachControl(canvas, true);



        var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);
        light.intensity = 0.7;

        var sphere = BABYLON.Mesh.CreateSphere("sphere1", 8, 2, scene);
        sphere.position.x = 10;
        //var box = BABYLON.Mesh.CreateBox('box', 3, scene);
        //var cylinder = BABYLON.Mesh.CreateCylinder('cylinder', 3, 2, 2, 6, 2, scene);
        // NOTE:: SET CAMERA TARGET AFTER THE TARGET'S CREATION AND NOTE CHANGE FROM BABYLONJS V 2.5
        // targetMesh created here.

        
        var perticleFromVerticesEmitter = sphere;
        perticleFromVerticesEmitter.useVertexColors = true;
        
        var verticesPositions = perticleFromVerticesEmitter.getVerticesData(BABYLON.VertexBuffer.PositionKind);
        var verticesNormals = perticleFromVerticesEmitter.getVerticesData(BABYLON.VertexBuffer.NormalKind);
        
        var verticesColor = [];
        for (var i = 0; i < verticesPositions.length; i += 3){
            var vertexPosition = new BABYLON.Vector3(
                verticesPositions[i],
                verticesPositions[i + 1],
                verticesPositions[i + 2]
            );
            var vertexNormal = new BABYLON.Vector3(
                verticesNormals[i],
                verticesNormals[i + 1],
                verticesNormals[i + 2]
            );
            var r = Math.random();
            var g = Math.random();
            var b = Math.random();
            var alpha = 1;
            var color = new BABYLON.Color4(r, g, b, alpha);
            verticesColor.push(r);
            verticesColor.push(g);
            verticesColor.push(b);
            verticesColor.push(alpha);
            
            var gizmo = BABYLON.Mesh.CreateBox('gizmo', 0.001, scene);
            gizmo.position = vertexPosition;
            gizmo.parent = perticleFromVerticesEmitter;
            createParticleSystem(
                gizmo,
                vertexNormal.normalize().scale(10),
                color
            );
        }
        perticleFromVerticesEmitter.setVerticesData(BABYLON.VertexBuffer.ColorKind, verticesColor);

        function createParticleSystem(emitter, direction, color) {
            var particleSystem = new BABYLON.ParticleSystem("particles", 1500, scene);

            //Texture of each particle
            particleSystem.particleTexture = new BABYLON.Texture("../textures/pngpart.png", scene);
        
            // Where the particles come from
            particleSystem.emitter = emitter; // the starting object, the emitter
            particleSystem.minEmitBox = new BABYLON.Vector3(0, 0, 0); // Starting all from
            particleSystem.maxEmitBox = new BABYLON.Vector3(0, 0, 0); // To...
        
            // Colors of all particles
            particleSystem.color1 = color;
            particleSystem.color2 = color
            particleSystem.colorDead = new BABYLON.Color4(color.r, color.g, color.b, 0.0);
        
            // Size of each particle (random between...
            particleSystem.minSize = 0.1;
            particleSystem.maxSize = 0.1;
        
            // Life time of each particle (random between...
            particleSystem.minLifeTime = 5;
            particleSystem.maxLifeTime = 5;
        
            // Emission rate
            particleSystem.emitRate = 100;
        
            // Blend mode : BLENDMODE_ONEONE, or BLENDMODE_STANDARD
            particleSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;
        
            // Set the gravity of all particles
            particleSystem.gravity = new BABYLON.Vector3(90, 0, 0);
        
            // Direction of each particle after it has been emitted
            particleSystem.direction1 = direction;
            particleSystem.direction2 = direction;
        
            // Angular speed, in radians
            particleSystem.minAngularSpeed = 0;
            particleSystem.maxAngularSpeed = Math.PI;
        
            // Speed
            particleSystem.minEmitPower = 1;
            particleSystem.maxEmitPower = 1;
            particleSystem.updateSpeed = 0.005;
        
            // Start the particle system
            particleSystem.start();
        }

        var alpha = 0.2;

        scene.registerBeforeRender(function () {
            //perticleFromVerticesEmitter.rotation.x += Math.random() * 0.01;
            perticleFromVerticesEmitter.rotation.x += .01;
            perticleFromVerticesEmitter.rotation.z += .02;

            //scene.activeCamera.rotation.y += 5 * alpha;
            alpha +=0.01; 
        })


        return scene;

    };

     chosenScene = createScene00();
                        
     

                    break;
                    case 1:
    //RAIN//Done //Change font // Add sphere adding functionality and maybe 3D names to show within the rain
var createScene01 = function () {

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

    var box2 = sceneManager.addSphere(5, 0, 0, 10, true, scene)
    var box = sceneManager.addSphere(5, 0, 0, 0, false, scene)
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

chosenScene = createScene01(); 

                    break;
                    case 2:
    //Diamonds
var createScene02 = function () {
    var scene = new BABYLON.Scene(engine);
    scene.clearColor = new BABYLON.Color3(.1, .1, .10);


    var camera = new BABYLON.ArcRotateCamera("camera1", 0, 50, -90, new BABYLON.Vector3(0, 0, -0), scene);
    camera.setPosition(new BABYLON.Vector3(0, 50, -90));
    camera.attachControl(canvas, true);
    camera.useAutoRotationBehavior = true;



    var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);
    light.intensity = 0.7;

    var pl = new BABYLON.PointLight("pl", BABYLON.Vector3.Zero(), scene);
    pl.diffuse = new BABYLON.Color3(1, 1, 1);
    pl.specular = new BABYLON.Color3(1, 1, 1);
    pl.intensity = 0.8;

        // Main program

        var polygons = [];
        var rotations = [];
        var divs = {};
        var counter = 0;
        var col = 0;
        var raw = 0;
        for (var p in POLYHEDRA) {

            var polyhedron = POLYHEDRA[p];
            var faceUV = [];
            var faceColors = [];
            var nbf = polyhedron.face.length;
            for (var f = 0; f < nbf; f++) {
                faceColors[f] = new BABYLON.Color4(Math.random(), Math.random(), Math.random(), 1);
            }

            var polygon = BABYLON.MeshBuilder.CreatePolyhedron(polyhedron.name, { custom: polyhedron, size: 2, faceColors: faceColors }, scene);

            col = counter % 21;
            if (col == 0) { raw++ }
            polygon.position.x = (col - 10) * 8;
            polygon.position.y = (raw - 3) * 8;
            polygons.push(polygon);
            rotations.push((0.5 - Math.random()) / 4);
            //divs[POLYHEDRA[p].name] = createDiv(POLYHEDRA[p].name);

            counter++;
        }
 //skybox mat
    //    var skySpace = [
    //       "../textures/sky/skybox2/skybox2_nx.jpg",
    //       "../textures/sky/skybox2/skybox2_ny.jpg",
    //       "../textures/sky/skybox2/skybox2_nz.jpg",
    //       "../textures/sky/skybox2/skybox2_px.jpg",
    //       "../textures/sky/skybox2/skybox2_py.jpg",
    //       "../textures/sky/skybox2/skybox2_pz.jpg",
    //     ];
    //     var bg = new Background(skySpace, scene);

        scene.registerBeforeRender(function () {
            // rotations
            for (var p = 0; p < polygons.length; p++) {
                polygons[p].rotation.y += rotations[p];
            }

            pl.position = camera.position;
        });
    return scene;
   
};

chosenScene = createScene02();


                    break;
                    case 3:
var createScene03 = function () {
    var scene = new BABYLON.Scene(engine);
    	scene.clearColor = BABYLON.Color3.Black();

    // create and position arc-rotate camera
    var camera = new BABYLON.ArcRotateCamera("ArcRotateCamera", BABYLON.Tools.ToRadians(-270), Math.PI/2, 90, new BABYLON.Vector3(0, 0,0), scene);
    camera.setPosition(new BABYLON.Vector3(150, 0, -10));
    camera.attachControl(canvas, true);
    var cameraControl = true;

    var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);
    light.intensity = 0.7;
    light.position = camera.position;
    light.parent = camera;

    var pl = new BABYLON.PointLight("pl", BABYLON.Vector3.Zero(), scene);
    pl.diffuse = new BABYLON.Color3(1, 1, 1);
    pl.specular = new BABYLON.Color3(1, 1, 1);
    pl.intensity = 0.8;

    var daggerMagicActive = true;
    var swordMagicActive = false;
    var axeMagicActive = false;

    // async loading list
      var promises = [];

  //  var bg = new Background(skySpace, scene);



   // create node materials
    var daggerHandleMat = new BABYLON.NodeMaterial("daggerHandleMat", scene, { emitComments: false });
    var daggerGemMat = new BABYLON.NodeMaterial("daggerGemMat", scene, { emitComments: false });
    var daggerBladeMat = new BABYLON.NodeMaterial("daggerBladeMat", scene, { emitComments: false });

   // load assets 
    promises.push(BABYLON.SceneLoader.AppendAsync("../assets/moltenDagger.glb"));
   promises.push(daggerHandleMat.loadAsync("../assets/daggerHandleMat.json"));
    promises.push(daggerBladeMat.loadAsync("../assets/daggerBladeMat.json"));
    promises.push(daggerGemMat.loadAsync("../assets/daggerGemMat.json"));

      // callback when assets are loaded
   Promise.all(promises).then(function() {


    
        // new render pipeline
        var pipeline = new BABYLON.DefaultRenderingPipeline("renderPass", true, scene, scene.camera);
        pipeline.imageProcessingEnabled = false;

        // glow layer
        pipeline.glowLayerEnabled = true;
        var gl = new BABYLON.GlowLayer("glow", scene, { 
            mainTextureFixedSize: 1024,
            blurKernelSize: 64
        });
        gl.intensity = 1.25;

          // particle noise
        var noiseTexture = new BABYLON.NoiseProceduralTexture("perlin", 256, scene);
        noiseTexture.animationSpeedFactor = 5;
        noiseTexture.persistence = 2;
        noiseTexture.brightness = 0.5;
        noiseTexture.octaves = 6;

          // prevent animation desync by limiting how often to accept input
        var acceptInput = true;
        function inputDelay() {
        acceptInput = true;
        }

       // scene position meshes
        var weaponsParent = new BABYLON.AbstractMesh("weaponsParent", scene);
        weaponsParent.position = new BABYLON.Vector3(0, 0, 0);
        var activeWeapon = "dagger";

         // dagger mesh
        const daggerHandle = scene.getMeshByName("daggerHandle_low");
        const daggerBlade = scene.getMeshByName("daggerBlade_low");
        const daggerGem = scene.getMeshByName("daggerGem_low");
        const daggerParent = daggerHandle.parent;
        daggerParent.parent = weaponsParent;


            // active mesh
            var focusedMesh = daggerParent;

            // build and assign node materials
        daggerHandleMat.build(false);
        daggerHandle.material = daggerHandleMat;

        daggerBladeMat.build(false);
        daggerBlade.material = daggerBladeMat;

        daggerGemMat.build(false);
        daggerGem.material = daggerGemMat;

          // textures
        const daggerDiffuseTex = new BABYLON.Texture("../textures/moltenDagger_diffuse.png", scene, false, false);
        const daggerSpecularTex = new BABYLON.Texture("../textures/moltenDagger_specular.png", scene, false, false);
        const daggerGlossTex = new BABYLON.Texture("../textures/moltenDagger_gloss.png", scene, false, false);
        const daggerEmissiveTex = new BABYLON.Texture("../textures/moltenDagger_emissive.png", scene, false, false);
        const daggerMaskTex = new BABYLON.Texture("../textures/moltenDagger_mask.png", scene, false, false);
            
          // get shader parameters
        var daggerBladeDiffuse = daggerBladeMat.getBlockByName("diffuseTexture");
        var daggerBladeSpecular = daggerBladeMat.getBlockByName("specularTexture");
        var daggerBladeGloss = daggerBladeMat.getBlockByName("glossTexture");
        var daggerBladeEmissive = daggerBladeMat.getBlockByName("emissiveTexture");
        var daggerBladeMask = daggerBladeMat.getBlockByName("maskTexture");
        var daggerBladeAnim = daggerBladeMat.getBlockByName("animTexture");
        var daggerHandleDiffuse = daggerHandleMat.getBlockByName("diffuseTexture");
        var daggerHandleSpecular = daggerHandleMat.getBlockByName("specularTexture");
        var daggerHandleGloss = daggerHandleMat.getBlockByName("glossTexture");
        var daggerGemEmissive = daggerGemMat.getBlockByName("emissiveTexture");
        
         // assign textures
        daggerBladeDiffuse.texture = daggerDiffuseTex;
        daggerBladeSpecular.texture = daggerSpecularTex;
        daggerBladeGloss.texture = daggerGlossTex;
        daggerBladeEmissive.texture = daggerEmissiveTex;
        daggerBladeMask.texture = daggerMaskTex;
        daggerBladeAnim.texture = daggerMaskTex;
        daggerHandleDiffuse.texture = daggerDiffuseTex;
        daggerHandleSpecular.texture = daggerSpecularTex;
        daggerHandleGloss.texture = daggerGlossTex;
        daggerGemEmissive.texture = daggerEmissiveTex;

         // glow parameters
        var daggerBladeGlowMask = daggerBladeMat.getBlockByName("glowMask");
        var daggerGemGlowMask = daggerGemMat.getBlockByName("glowMask");

      
        var daggerGemParams = {
            "emissiveParam": daggerGemMat.getBlockByName("emissiveStrength"),
            "glowStartKeys": [
                {frame: 0, value: 0.0},
                {frame: 90, value: 1.0}
            ],
            "glowFinishKeys": [
                {frame: 0, value: 1.0},
                {frame: 120, value: 0.0}
            ]
        };

        var daggerBladeParams = {
            "emissiveParam": daggerBladeMat.getBlockByName("emissiveStrength"),
            "heatLevelParam": daggerBladeMat.getBlockByName("heatLevel"),
            "charLevelParam": daggerBladeMat.getBlockByName("charLevel"),
            "uOffsetParam": daggerBladeMat.getBlockByName("uOffset"),
            "flickerStrengthParam": daggerBladeMat.getBlockByName("flickerStrength"),
            "glowStartKeys": [
                {frame: 0, value: 0.0},
                {frame: 20, value: 0.0},
                {frame: 90, value: 1.0}
            ],
            "glowLoopKeys": [
                {frame: 0, value: 1.0},
                {frame: 70, value: 0.75},
                {frame: 140, value: 1.0}
            ],
            "glowFinishKeys": [
                {frame: 0, value: 0.75},
                {frame: 90, value: 0.0}
            ],
            "heatStartKeys": [
                {frame: 0, value: 0.0},
                {frame: 40, value: 0.0},
                {frame: 160, value: 0.67}
            ],
            "heatFinishKeys": [
                {frame: 0, value: 0.67},
                {frame: 40, value: 0.67},
                {frame: 160, value: 0.0}
            ],
            "charStartKeys": [
                {frame: 0, value: 0.0},
                {frame: 80, value: 0.0},
                {frame: 160, value: 1.0}
            ],
            "charFinishKeys": [
                {frame: 0, value: 1.0},
                {frame: 60, value: 1.0},
                {frame: 160, value: 0.0}
            ],
            "animStartKeys": [
                {frame: 0, value: 0.0},
                {frame: 180, value: 1.0}
            ],
            "animStopKeys": [
                {frame: 0, value: 0.0},
                {frame: 10, value: 0.0}
            ],
            "flickerStrengthStartKeys": [
                {frame: 0, value: 0.0},
                {frame: 40, value: 0.0},
                {frame: 160, value: 0.65}
            ],
            "flickerStrengthFinishKeys": [
                {frame: 0, value: 0.65},
                {frame: 40, value: 0.65},
                {frame: 160, value: 0.0}
            ]
        };


          // dagger blade mesh emitter
        var daggerMeshEmitter = new BABYLON.MeshParticleEmitter(daggerBlade);
        daggerMeshEmitter.useMeshNormalsForDirection = false;
        daggerMeshEmitter.direction1 = new BABYLON.Vector3(1, 0, 0);
        daggerMeshEmitter.direction2 = new BABYLON.Vector3(1, 0.2, 0);

        // dagger embers particle system
        var daggerEmbers = new BABYLON.ParticleSystem("daggerEmbers", 1000, scene);
        daggerEmbers.particleTexture = new BABYLON.Texture("../textures/sparks.png", scene);
        daggerEmbers.minSize = 0.2;
        daggerEmbers.maxSize = 0.6;
        daggerEmbers.particleEmitterType = daggerMeshEmitter;
        daggerEmbers.emitter = daggerBlade;
        daggerEmbers.minLifeTime = 4.0;
        daggerEmbers.maxLifeTime = 4.0;
        daggerEmbers.emitRate = 30;
        daggerEmbers.addColorGradient(0.0, new BABYLON.Color4(0.9245, 0.6540, 0.0915, 0));
        daggerEmbers.addColorGradient(0.04, new BABYLON.Color4(0.9062, 0.6132, 0.0942, 0.1));
        daggerEmbers.addColorGradient(0.4, new BABYLON.Color4(0.7968, 0.3685, 0.1105, 1));
        daggerEmbers.addColorGradient(0.7, new BABYLON.Color4(0.6886, 0.1266, 0.1266, 1));
        daggerEmbers.addColorGradient(0.9, new BABYLON.Color4(0.3113, 0.0367, 0.0367, 0.6));
        daggerEmbers.addColorGradient(1.0, new BABYLON.Color4(0.3113, 0.0367, 0.0367, 0));
        daggerEmbers.blendMode = BABYLON.ParticleSystem.BLENDMODE_ADD;
        daggerEmbers.gravity = new BABYLON.Vector3(0, 5, 0);
        daggerEmbers.noiseTexture = noiseTexture;
        daggerEmbers.noiseStrength = new BABYLON.Vector3(6, 6, 4);
        daggerEmbers.minEmitPower = 4;
        daggerEmbers.maxEmitPower = 6;
        daggerEmbers.updateSpeed = 1/60;

        daggerBlade.renderingGroupId = 1;
        daggerGem.renderingGroupId = 1;
        daggerHandle.renderingGroupId = 1;
            
        // glow mask switch for node material emissive texture to be accessible to the glow layer
      gl.referenceMeshToUseItsOwnMaterial(daggerBlade);
        gl.referenceMeshToUseItsOwnMaterial(daggerGem);
  

        gl.onBeforeRenderMeshToEffect.add(() => {
           
           daggerBladeGlowMask.value = 1.0;
            daggerGemGlowMask.value = 1.0;
       
        });
        gl.onAfterRenderMeshToEffect.add(() => {
           
           daggerBladeGlowMask.value = 0.0;
            daggerGemGlowMask.value = 0.0;
           
        });
   

        function playParticleSystem() {
            if (activeWeapon == "dagger"){ 
                if (daggerMagicActive) {
                    daggerEmbers.start();
                } else {
                    daggerEmbers.stop();
                }
            } else if (activeWeapon == "sword") {
                if (swordMagicActive) {
                    swordGlow.start();
                } else {
                    swordGlow.stop();
                }
            } else if (activeWeapon == "axe") {
                if (axeMagicActive) {
                    axeSnow.start();
                    axeVapor.start();
                } else {
                    axeSnow.stop();
                    axeVapor.stop();
                }
            } else {
                return;
            }
        }

        // prevent animation desync by limiting how often to accept input
        var acceptInput = true;
        function inputDelay() {
        acceptInput = true;
        }

       
       
 
        // dagger magic FX animations
        function activateDaggerMagic(trigger) {
            if (trigger) {
                playAnimation(daggerGemParams.emissiveParam, "value", daggerGemParams.glowStartKeys, false, true, false);
                playAnimation(daggerBladeParams.emissiveParam, "value", daggerBladeParams.glowStartKeys, false, true, true, daggerBladeParams.emissiveParam, "value", daggerBladeParams.glowLoopKeys, true, true);
                playAnimation(daggerBladeParams.heatLevelParam, "value", daggerBladeParams.heatStartKeys, false, true, false);
                playAnimation(daggerBladeParams.charLevelParam, "value", daggerBladeParams.charStartKeys, false, true, false);
                playAnimation(daggerBladeParams.uOffsetParam, "value", daggerBladeParams.animStartKeys, true, false, false);
                playAnimation(daggerBladeParams.flickerStrengthParam, "value", daggerBladeParams.flickerStrengthStartKeys, false, true, false);
                daggerMagicActive = true;
                acceptInput = false;
                setTimeout(playParticleSystem, 2000);
                setTimeout(inputDelay, 3500);
            } else {
                daggerBladeParams.glowFinishKeys[0].value = daggerBladeParams.emissiveParam.value;
                playAnimation(daggerGemParams.emissiveParam, "value", daggerGemParams.glowFinishKeys, false, true, false);
                playAnimation(daggerBladeParams.emissiveParam, "value", daggerBladeParams.glowFinishKeys, false, true, false);
                playAnimation(daggerBladeParams.heatLevelParam, "value", daggerBladeParams.heatFinishKeys, false, true, false);
                playAnimation(daggerBladeParams.charLevelParam, "value", daggerBladeParams.charFinishKeys, false, true, false);
                playAnimation(daggerBladeParams.flickerStrengthParam, "value", daggerBladeParams.flickerStrengthFinishKeys, false, true, true, daggerBladeParams.uOffsetParam, "value", daggerBladeParams.animStopKeys, false, false);
                daggerMagicActive = false;
                acceptInput = false;
                setTimeout(playParticleSystem, 500);
                setTimeout(inputDelay, 3500);
            }
        }

       
        
        // update magic effects 
        
        function updateWeaponState(button) {
            if ((event.keyCode == 32 || button == true) && acceptInput) { // space bar to activate magic 
                if (activeWeapon == "dagger") {
                    if (daggerMagicActive) {
                        activateDaggerMagic(false);
                    } else {
                        activateDaggerMagic(true);
                    }     
                } else if (activeWeapon == "sword") {
                    if (swordMagicActive) {
                        activateSwordMagic (false);
                    } else {
                        activateSwordMagic(true);
                    }
                } else if (activeWeapon == "axe") {
                    if (axeMagicActive) {
                        activateAxeMagic (false);
                    } else {
                        activateAxeMagic(true);
                    }
                } else {
                    return;
                }
            }
        }
    
        // mesh rotation with inertia
        var inertialAlpha = 0;
        var inertialBeta = 0;
        var inertia = 0.95;
        var angularSpeed = 0.0005;
        var xRotationSign = -1;
    
        var mouseDown = false;
        scene.onPointerObservable.add(evt => {
            if (cameraControl) {
                return;
            }
    
            if (evt.type === BABYLON.PointerEventTypes.POINTERDOWN) {
                mouseDown = true;
                if (BABYLON.Vector3.Dot(focusedMesh.up, camera.getWorldMatrix().getRotationMatrix().getRow(1)) >= 0) {
                    xRotationSign = -1;
                } else {
                    xRotationSign = 1;
                }
                return;
            }
            if (evt.type === BABYLON.PointerEventTypes.POINTERUP) {
                mouseDown = false;
                return;
            }
    
            if (!mouseDown || evt.type !== BABYLON.PointerEventTypes.POINTERMOVE) {
                return;
            }
    
            var offsetX = evt.event.movementX ||
                            evt.event.mozMovementX ||
                            evt.event.webkitMovementX ||
                            evt.event.msMovementX ||
                            0;
            var offsetY = evt.event.movementY ||
                            evt.event.mozMovementY ||
                            evt.event.webkitMovementY ||
                            evt.event.msMovementY ||
                            0;
    
            inertialAlpha += xRotationSign * offsetX * angularSpeed;
            inertialBeta -= offsetY * angularSpeed;     
        });

        // add listener for key press
        document.addEventListener('keydown', updateWeaponState);
        // document.addEventListener('keydown', updateWeaponsPosition);

        // remove listeners when scene disposed
        scene.onDisposeObservable.add(function() {
            document.removeEventListener('keydown', updateWeaponState);
            // document.removeEventListener('keydown', updateWeaponsPosition);
        });

        // run every frame
        scene.registerBeforeRender(function () {
            if (cameraControl) {
                return;
            }
            focusedMesh.rotate(BABYLON.Vector3.UpReadOnly, inertialAlpha, BABYLON.Space.LOCAL);
            focusedMesh.rotate(BABYLON.Vector3.Left(), inertialBeta, BABYLON.Space.WORLD);

            inertialAlpha *= inertia;
            inertialBeta *= inertia;
        });

     

    });
    
    // display loading screen while loading assets
    engine.displayLoadingUI();  
    scene.executeWhenReady(function() {
        engine.hideLoadingUI();
    });

    
        
    return scene;
   
};

chosenScene = createScene03();


                    break;
                    case 4:
var createScene04 = function () {

    engine.setHardwareScalingLevel(1 / window.devicePixelRatio);    
    engine.displayLoadingUI();

    var scene = new BABYLON.Scene(engine);
    scene.clearColor = new BABYLON.Color3.Black()
    var camera = new BABYLON.ArcRotateCamera("Camera", Math.PI, Math.PI / 8, 10, BABYLON.Vector3.Zero(), scene);
    var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI('UI', undefined, undefined, BABYLON.Texture.NEAREST_NEAREST);
  
    advancedTexture.rootContainer.scaleX = window.devicePixelRatio;
    advancedTexture.rootContainer.scaleY = window.devicePixelRatio;

    function createGlow(text, options){
    var fontFamily = options.family || null
    var color = options.color || null
    var glow = options.backgroundGlow || null
    var intensity = options.glowIntensity || null
    var size = options.fontSize || null
    var Y_AXIS = options.y_axis || "0px"
    var X_AXIS = options.x_axis || "0px"

    var text1 = new BABYLON.GUI.TextBlock();
        text1.text = text;
            text1.color = "white";
            text1.fontFamily = fontFamily
            text1.fontSize = 92 * size;
            text1.shadowBlur = 20*intensity;
            text1.shadowColor = "green"
            text1.shadowOffsetX = 1;
            text1.shadowOffsetY = 1;
    
advancedTexture.addControl(text1);


var blurtext2 = new BABYLON.GUI.TextBlock();
    blurtext2.text = text
        blurtext2.color = color;
        blurtext2.fontFamily = fontFamily
        blurtext2.fontSize = 92 * size;
        blurtext2.shadowBlur = 70*intensity;
        blurtext2.shadowColor = glow
        blurtext2.shadowOffsetX = -7;
        blurtext2.shadowOffsetY = 1;
        blurtext2.fontWeight = "bold"
advancedTexture.addControl(blurtext2);

var blurtext3 = new BABYLON.GUI.TextBlock();
    blurtext3.text = text
        blurtext3.color = color;
        blurtext3.fontFamily = fontFamily
        blurtext3.fontSize = 92 * size;
        blurtext3.shadowBlur = 10*intensity;
        blurtext3.shadowColor = glow
        blurtext3.shadowOffsetX = 7;
        blurtext3.shadowOffsetY = 1;
    
advancedTexture.addControl(blurtext3);

var blurtext4 = new BABYLON.GUI.TextBlock();
    blurtext4.text = text;
        blurtext4.color = color;
        blurtext4.fontFamily = fontFamily
        blurtext4.fontSize = 92 * size;
        blurtext4.shadowBlur = 60*intensity;
        blurtext4.shadowColor = glow
        blurtext4.shadowOffsetX = -1;
        blurtext4.shadowOffsetY = 1;
    
advancedTexture.addControl(blurtext4);

this.text1 = text1
this.blurtext2 = blurtext2
this.blurtext3 = blurtext3
this.blurtext4 = blurtext4

this.text1.top = this.blurtext2.top = this.blurtext3.top = this.blurtext4.top = Y_AXIS
this.text1.left = this.blurtext2.left = this.blurtext3.left = this.blurtext4.left = X_AXIS


}

createGlow.prototype.update = function(options){
var new_updated_text = options.new_text || null
this.text1.text = this.blurtext2.text = this.blurtext3.text = this.blurtext4.text = new_updated_text
}

function zeroPadding(num, digit) {
    var zero = '';
    for(var i = 0; i < digit; i++) {
        zero += '0';
    }
    return (zero + num).slice(-digit);
}
 // get a new date (locale machine date time)
var date = new Date();
// get the date as a string
var n = date.toDateString();
// get the time as a string
var time = date.toLocaleTimeString();

var week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

var timeMsg = new createGlow(time, {family: "Digital-7", color: "#DAF6FF", backgroundGlow: "#DAF6FF", glowIntensity: 1.3, fontSize: 1.0})
var dateMsg = new createGlow(time, {family: "Digital-7", color: "#DAF6FF", backgroundGlow: "#DAF6FF", glowIntensity: 1.3, fontSize: .3, y_axis: "-100px", x_axis: "100px"})
var productMsg = new createGlow("Powered by Babylon.js", {family: "Share Tech Mono", color: "#DAF6FF", backgroundGlow: "#DAF6FF", glowIntensity: 1.3, fontSize: .2, y_axis: "100px", x_axis: "-100px"})
var timeZoneMsg = new createGlow("", {family: "Share Tech Mono", color: "#DAF6FF", backgroundGlow: "#DAF6FF", glowIntensity: 1.3, fontSize: .1, y_axis: "60px", x_axis: "100px"})
scene.beforeRender=()=>{

var cd = new Date();

// get the date as a string
var n = cd.toDateString();
// get the time as a string
var gmt = cd.toTimeString().slice(9, 100)

var time = cd.toLocaleTimeString();
var date = zeroPadding(cd.getFullYear(), 4) + '-' + zeroPadding(cd.getMonth()+1, 2) + '-' + zeroPadding(cd.getDate(), 2) + ' ' + week[cd.getDay()]
timeMsg.update({new_text: time})
dateMsg.update({new_text: date})
timeZoneMsg.update({new_text: gmt})
 }	

 setTimeout(function(){
     engine.hideLoadingUI();
 }, 1000)

    return scene;

};

chosenScene = createScene04();     
           
                    break;
                    case 5:
  var createScene05 = function () {

    // This creates a basic Babylon Scene object (non-mesh)
    var scene = new BABYLON.Scene(engine);
    scene.clearColor = new BABYLON.Color3.Black();

    // This creates and positions a free camera (non-mesh)
    var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 5, -10), scene);
    // camera.useAutoRotationBehavior = true;
      // create and position arc-rotate camera
    // var camera = new BABYLON.ArcRotateCamera("ArcRotateCamera", 1, 0.8, 5, new BABYLON.Vector3(0, 0, 0), scene);
   // console.log('of course i am up')
    // This targets the camera to scene origin
    camera.setTarget(BABYLON.Vector3.Zero());
    // camera.useAutoRotationBehavior = true;
    // camera.autoRotationBehavior.idleRotationSpeed = 0.3; 


    // This attaches the camera to the canvas
    camera.attachControl(canvas, true);

    // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
    var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);

    // Default intensity is 1. Let's dim the light a small amount
    light.intensity = 0.8;
    light.specular = new BABYLON.Color3(0.4, 0.4, 0.9);


    var cornell = BABYLON.SceneLoader.ImportMesh("", "../assets/", "cornellBox.glb", scene,
        function (cornellBoxMeshes) {
            // delayCreateScene so as to ease automatic camera creation 
            scene.createDefaultCameraOrLight(true, true, true);
            scene.createDefaultEnvironment({ createGround: false, createSkybox: false });
            scene.activeCamera.alpha = Math.PI / 2;

            scene.getMaterialByName("light.000").emissiveColor = BABYLON.Color3.White();

            /* lightmaps assignation */

            // we have to cycles through objects to assign their lightmaps
            const lightmappedMeshes = ["bloc.000", "suzanne.000", "cornellBox.000"];

            lightmappedMeshes.forEach((meshName) => {
                // lightmap texture creation
                let currentLightmap = new BABYLON.Texture(
                    "../textures/" + meshName + ".lightmap.jpg",
                    scene,
                    null,
                    false);
                currentLightmap.onLoadObservable.addOnce(function (tex) {
                    currentLightmap.name = meshName + "-lightmap";
                    cornellBoxMeshes.forEach((mesh) => {
                        if (mesh.name.indexOf(meshName) != -1) {
                            mesh.material.lightmapTexture = currentLightmap;
                            mesh.material.lightmapTexture.coordinatesIndex = 1;
                            mesh.material.useLightmapAsShadowmap = true;
                        }
                    });
                });
            });
        });

    

    return scene;
};
chosenScene = createScene05();   
               
                    break;
                    case 6:
 var createScene06 = function () {

    var scene = new BABYLON.Scene(engine);
    var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0, 10, BABYLON.Vector3.Zero(), scene);
    camera.speed = 0.5;
    camera.useAutoRotationBehavior =  true;
    var material = new BABYLON.StandardMaterial("kosh", scene);
    var sphere1 = BABYLON.Mesh.CreateSphere("Sphere1", 48, 5, scene);
    var light = new BABYLON.PointLight("Omni0", new BABYLON.Vector3(-17.6, 18.8, -49.9), scene);
    light.diffuse = BABYLON.Color3.Blue();
    camera.setPosition(new BABYLON.Vector3(-3.37, 0.95, 0));
    camera.attachControl(canvas, true);
    camera.lowerRadiusLimit = camera.radius;
    camera.upperRadiusLimit = camera.radius;
    //  camera.inputs.clear();

    scene.activeCamera.beta = Math.PI/1.7;
    // Sphere1 material
    material.refractionTexture = new BABYLON.CubeTexture("../textures/sky/Angar/ang", scene);
    material.reflectionTexture = new BABYLON.CubeTexture("../textures/sky/Angar/ang", scene);
    material.diffuseColor = new BABYLON.Color3(0, 0, 0);
    material.invertRefractionY = false;
    material.indexOfRefraction = 0.58;
    material.specularPower = 256;
    sphere1.material = material;
    material.refractionFresnelParameters = new BABYLON.FresnelParameters();
    material.refractionFresnelParameters.power = 24;
    material.reflectionFresnelParameters = new BABYLON.FresnelParameters();
    material.reflectionFresnelParameters.power = 8;
    material.reflectionFresnelParameters.leftColor = BABYLON.Color3.Red();
    material.reflectionFresnelParameters.rightColor = BABYLON.Color3.Green();
    material.reflectionTexture.level=1.8;

    // Skybox
    var skybox = BABYLON.Mesh.CreateBox("skyBox", 100.0, scene);
    var skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
    skyboxMaterial.backFaceCulling = false;
    skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("../textures/sky/Angar/ang", scene);
    skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
    skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 1);
    skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 1);
    skyboxMaterial.disableLighting = true;
    skybox.material = skyboxMaterial;

    // GUI
    var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");

    var button1 = BABYLON.GUI.Button.CreateSimpleButton("but1", "Switch");
    button1.width = "10%"
    button1.height = "15%";
    button1.color = "pink";
    button1.cornerRadius = 20;
    button1.background = "darkslategrey";
    button1.border = null;
    var clickCounter = 0;
    button1.onPointerUpObservable.add(function() {

clickCounter = clickCounter+1;
console.log(clickCounter)

switch(clickCounter) {
  case 1:
        skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("../textures/sky/skybox3/skybox3", scene);
    material.refractionTexture = new BABYLON.CubeTexture("../textures/sky/skybox3/skybox3", scene);
    material.reflectionTexture = new BABYLON.CubeTexture("../textures/sky/skybox3/skybox3", scene);
    break;
  case 2:
        skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("../textures/sky/skybox2/", scene);
    material.refractionTexture = new BABYLON.CubeTexture("../textures/sky/skybox2/", scene);
    material.reflectionTexture = new BABYLON.CubeTexture("../textures/sky/skybox2/", scene);
    break;
  case 3:
        skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("../textures/sky/Tropical/TropicalSunnyDay", scene);
    material.refractionTexture = new BABYLON.CubeTexture("../textures/sky/Tropical/TropicalSunnyDay", scene);
    material.reflectionTexture = new BABYLON.CubeTexture("../textures/sky/Tropical/TropicalSunnyDay", scene);
    break;

  default:
        skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("../textures/sky/skybox4/skybox4", scene);
    material.refractionTexture = new BABYLON.CubeTexture("../textures/sky/skybox4/skybox4", scene);
    material.reflectionTexture = new BABYLON.CubeTexture("../textures/sky/skybox4/skybox4", scene);
    clickCounter = 0;
}

    });
    advancedTexture.addControl(button1);  


  var alpha = 0;
 scene.registerBeforeRender(function () {
scene.activeCamera.beta -= Math.sin(alpha*3)/550;
alpha +=0.01; 


    material.reflectionFresnelParameters.leftColor = new BABYLON.Color3(Math.sin(alpha)*Math.random()+0.1, 0.1, 0,1);
    material.reflectionFresnelParameters.rightColor = new BABYLON.Color3(0.2, Math.sin(alpha*2)+0.3, 0.2);


 });


    return scene;
}
chosenScene = createScene06();        
          
                    break;
                    case 7:
 var createScene07 = function () {
	var scene = new BABYLON.Scene(engine);
    scene.clearColor = BABYLON.Color3.Black();

	var camera = new BABYLON.ArcRotateCamera("Camera", -Math.PI/2, 1.5, 30, BABYLON.Vector3.Zero(), scene);
	camera.attachControl(canvas, true);

	var light = new BABYLON.HemisphericLight("hemi", new BABYLON.Vector3(0, 1, 0), scene);

	//Array of points to construct lines
	var myPoints = [
		new BABYLON.Vector3(-5, 5, 0),
		new BABYLON.Vector3(5, 5, 0),
		new BABYLON.Vector3(-5, -5, 0),
		new BABYLON.Vector3(5, -5, 0),
		new BABYLON.Vector3(-5, 5, 0),
	];

    var lines = [];

	//Create lines 
	var lines1 = BABYLON.MeshBuilder.CreateLines("lines1", {points: myPoints}, scene);
    // lines1.color = new BABYLON.Color3(.3, .3, .3);
    lines1.color = BABYLON.Color3.Gray();
    lines1.setPivotPoint(lines1.getBoundingInfo().boundingBox.center);
    lines.push(lines1);

	var lines2 = lines1.clone();
	lines2.position = new BABYLON.Vector3(-5.5, -5.5, 0);
    lines.push(lines2);

	var lines3 = lines1.clone();
	lines3.position = new BABYLON.Vector3(-5.5, 5.5, 0);
    lines.push(lines3);

	var lines4 = lines1.clone();
	lines4.position = new BABYLON.Vector3(5.5, 5.5, 0);
    lines.push(lines4);

    // var myPoints5 = [];
    // for (point of myPoints) {
    //     myPoints5.push(point.negate().add(new BABYLON.Vector3(0, 11, 0)));
    // }
	// var lines5 = BABYLON.MeshBuilder.CreateLines("lines5", {points: myPoints4}, scene);
	var lines5 = lines1.clone();
	lines5.position = new BABYLON.Vector3(5.5, -5.5, 0);
    lines.push(lines5);

    var gl = new BABYLON.GlowLayer("", scene);

    gl.intensity = 4;
    gl.customEmissiveColorSelector = (mesh, subMesh, material, result) => {
        if (mesh == lines[0]) {
            gl._emissiveTextureAndColor.color = new BABYLON.Color4(0,0,1,1);
        }
        else if (mesh == lines[1]) {
            gl._emissiveTextureAndColor.color = new BABYLON.Color4(1,0,0,1);
        }
        else if (mesh == lines[2]) {
            gl._emissiveTextureAndColor.color = new BABYLON.Color4(0,1,0,1);
        }
        else if (mesh == lines[3]) {
            gl._emissiveTextureAndColor.color = new BABYLON.Color4(1,1,0,1);
        }
        else if (mesh == lines[4]) {
            gl._emissiveTextureAndColor.color = new BABYLON.Color4(0,1,1,1);
        }
        else if (mesh == lines[5]) {
            gl._emissiveTextureAndColor.color = new BABYLON.Color4(1,0,1,1);
        }
        else {
            gl._emissiveTextureAndColor.color = new BABYLON.Color4(0,0,0,1);
        }
        // console.log("cecs");
    }

    lines1.showBoundingBox = true;

    function arrayRotate(arr, reverse) {
        if (reverse) arr.unshift(arr.pop());
        else arr.push(arr.shift());
        return arr;
    }

    var fred;

    scene.onReadyObservable.add(function(){

        fred = setInterval(function(){
            arrayRotate(lines, false);
        }, 100);

        scene.onDispose = function(){
            if (fred)
                clearInterval(fred);
        }

        scene.onBeforeRenderObservable.add(function(){
            lines1.rotation.z += .05;
        })
    })

	return scene;
}
chosenScene = createScene07();     
  

                    break;
                    case 8:
  var createScene08 = function () {
	var scene = new BABYLON.Scene(engine);
	scene.clearColor = BABYLON.Color3.Black();
	// -----------------------------------------------
	// function Ribbon
	// mesh : a BABYLON.Mesh object
	// pathArray : array populated with paths; path = arrays of Vector3
	// doubleSided : boolean, true if the ribbon has got two reflective faces
	// closeArray : boolean, true if paths array is a loop => adds a extra ribbon joining last path and first path
	// closePath : boolean, true if paths are circular => last point joins first point, default false
	// offset : default  path length / 2, only for a single path
	// scene : the current scene
	var createRibbon = function(mesh, pathArray, doubleSided, closeArray, closePath, offset, scene) {
		var positions = [];
		var indices = [];
		var indicesRecto = [];
		var indicesVerso = [];
		var normals = [];
		var normalsRecto = [];
		var normalsVerso = [];
		var uvs = [];
		var us = [];		// us[path_id] = [uDist1, uDist2, uDist3 ... ] distances between points on path path_id
		var vs = [];		// vs[i] = [vDist1, vDist2, vDist3, ... ] distances between points i of consecutives paths from pathArray
		var uTotalDistance = []; // uTotalDistance[p] : total distance of path p
		var vTotalDistance = []; //  vTotalDistance[i] : total distance between points i of first and last path from pathArray
		var minlg;		  // minimal length among all paths from pathArray
		var lg = [];		// array of path lengths : nb of vertex per path
		var idx = [];	   // array of path indexes : index of each path (first vertex) in positions array

		closeArray = closeArray || false;
		closePath = closePath || false;
		doubleSided = doubleSided || false;
		var defaultOffset = Math.floor(pathArray[0].length / 2);
		offset = offset || defaultOffset;
		offset = offset > defaultOffset ? defaultOffset : Math.floor(offset);

		// single path in pathArray
		if ( pathArray.length < 2) {
			var ar1 = [];
			var ar2 = [];
			for (var i = 0; i < pathArray[0].length - offset; i++) {
			ar1.push(pathArray[0][i]);
			ar2.push(pathArray[0][i+offset]);
			}
			pathArray = [ar1, ar2];
		}

		// positions and horizontal distances
		var idc = 0;
		minlg = pathArray[0].length;
		for(var p = 0; p < pathArray.length; p++) {
			uTotalDistance[p] = 0;
			us[p] = [0];
			var path = pathArray[p];
			var l = path.length;
			minlg = (minlg < l) ? minlg : l;
			lg[p] = l;
			idx[p] = idc;
			var j = 0;
			while (j < l) {
			positions.push(path[j].x, path[j].y, path[j].z);
			if (j > 0) {
				var vectlg = path[j].subtract(path[j-1]).length();
				var dist = vectlg + uTotalDistance[p];
				us[p].push(dist);
				uTotalDistance[p] = dist;
			}
			j++;
			}
			if ( closePath ) {
			var vectlg = path[0].subtract(path[j-1]).length();
			var dist = vectlg + uTotalDistance[p];
			uTotalDistance[p] = dist;
			}
			idc += l;
		}

		// vertical distances
		for(var i = 0; i < minlg; i++) {
			vTotalDistance[i] = 0;
			vs[i] =[0];
			for (var p = 0; p < pathArray.length-1; p++) {
			var path1 = pathArray[p];
			var path2 = pathArray[p+1];
			var vectlg = path2[i].subtract(path1[i]).length();
			var dist =  vectlg + vTotalDistance[i];
			vs[i].push(dist);
			vTotalDistance[i] = dist;
			}
			if (closeArray) {
			var path1 = pathArray[p];
			var path2 = pathArray[0];
			var vectlg = path2[i].subtract(path1[i]).length();
			var dist =  vectlg + vTotalDistance[i];
			vTotalDistance[i] = dist;
			}
		}

		// uvs
		for(var p = 0; p < pathArray.length; p++) {
			for(var i = 0; i < minlg; i++) {
			var u = us[p][i] / uTotalDistance[p];
			var v = vs[i][p] / vTotalDistance[i];
			uvs.push(u, v);
			}
		}

		// indices
		var p = 0;					// path index
		var i = 0;					// positions array index
		var l1 = lg[p] - 1;		   // path1 length
		var l2 = lg[p+1] - 1;		 // path2 length
		var min = ( l1 < l2 ) ? l1 : l2 ;   // index d'arrÃªt de i dans le path en cours
		var shft = idx[1] - idx[0];						  // shift
		var path1nb = closeArray ? lg.length : lg.length -1;	 // combien de path1 Ã  parcourir
		while ( i <= min && p < path1nb ) {					  // on reste sur le min des deux paths et on ne va pas au delÃ  de l'avant-dernier

			// draw two triangles between path1 (p1) and path2 (p2) : (p1.i, p2.i, p1.i+1) and (p2.i+1, p1.i+1, p2.i) clockwise
			var t1 = i;
			var t2 = i + shft;
			var t3 = i +1;
			var t4 = i + shft + 1;

			indices.push(i, i+shft, i+1);
			indices.push(i+shft+1, i+1, i+shft);
			i += 1;
			if ( i == min  ) {						  // dÃ¨s qu'on atteint la fin d'un des deux paths consÃ©cutifs, on passe au suivant s'il existe
			if (closePath) {						  // if closePath, add last triangles between start and end of the paths
				indices.push(i, i+shft, idx[p]);
				indices.push(idx[p]+shft, idx[p], i+shft);
				t3 = idx[p];
				t4 = idx[p] + shft;
			}
			p++;
			if ( p == lg.length - 1 ) {							// si on a atteint le dernier path du tableau <=> closeArray == true
				shft = idx[0] - idx[p];
				l1 = lg[p] - 1;
				l2 = lg[0] - 1;
			}
			else {
				shft = idx[p+1] - idx[p];
				l1 = lg[p] - 1;
				l2 = lg[p+1] - 1;
			}

			i = idx[p];
			min = ( l1 < l2 ) ? l1 + i : l2 + i;
			}
		}

		//faces(false, indices);
		BABYLON.VertexData.ComputeNormals(positions, indices, normals);

		mesh.setVerticesData(BABYLON.VertexBuffer.PositionKind, positions, false);
		mesh.setVerticesData(BABYLON.VertexBuffer.NormalKind, normals, false);
		mesh.setIndices(indices);
		mesh.setVerticesData(BABYLON.VertexBuffer.UVKind, uvs, false);
	};
	// END RibbonMesh
	// -----------------------------------------------
	var harmonic = function(m, lat, long, paths) {
		var pi = Math.PI;
		var pi2 = Math.PI * 2;
		var steplat = pi / lat;
		var steplon = pi2 / long;

		for (var theta = 0; theta <= pi2; theta += steplon) {
			var path = [];

			for (var phi = 0; phi <= pi; phi += steplat ) {
				var r = 0;
				r += Math.pow( Math.sin(m[0]*phi), m[1] );
				r += Math.pow( Math.cos(m[2]*phi), m[3] );
				r += Math.pow( Math.sin(m[4]*theta), m[5] );
				r += Math.pow( Math.cos(m[6]*theta), m[7] );

				var p = new BABYLON.Vector3( r * Math.sin(phi) * Math.cos(theta), r * Math.cos(phi), r * Math.sin(phi) * Math.sin(theta) );
				path.push(p);
			}
			paths.push(path);
		}
		paths.push(paths[0]);
	};
	// -----------------------------------------------
	var showPath = function(path, scene) {
		var line = BABYLON.Mesh.CreateLines("line", path, scene )
	};
	// -----------------------------------------------
	var paths = [];

	// here's the 'm' numbers used to create the SH shape
	// var m = [7,3,8,0,9,2,7,2];
	var m = [
		Math.random().toFixed(1)*10,
		Math.random().toFixed(1)*10,

		// 1, // this makes the shapes more basic, less spikey.  Or use this line...
		Math.random().toFixed(1)*10,

		Math.random().toFixed(1)*10,
		Math.random().toFixed(1)*10,
		Math.random().toFixed(1)*10,
		Math.random().toFixed(1)*10,
		Math.random().toFixed(1)*10
	];
	console.log("m-numbers: " + m);
    harmonic(m, 64, 64, paths);


    //save coordinate for shape creation
    //localStorage.removeItem('newShape')
//      var newShape = JSON.parse(localStorage.getItem('coloratura'));  //favourite/pinned shape
//      //var newPaths = JSON.parse(localStorage.getItem('paths'));
  
// 	// -----------------------------------------------
//     if (newShape == null || newPaths == null){

//     // go make the shape!
// 	harmonic(m, 64, 64, paths);
//     localStorage.removeItem('newShape')
//    // localStorage.removeItem('newpaths')
//     var newShape = localStorage.setItem('newShape', JSON.stringify(m));
//    // var newpaths = localStorage.setItem('newpaths', JSON.stringify(paths));




//     }else {
     
//         harmonic(newShape, 64, 64, paths)

//     }
	


/*
	for (var p = 0; p < paths.length; p++) {
	showPath(paths[p], scene);
	}
*/

	// make a blank mesh and scale it up. Used soon, past the fire stuff.
	var mesh = new BABYLON.Mesh("mesh", scene);
	mesh.scaling = new BABYLON.Vector3(1.5, 1.5, 1.5);
	// -----------------------------------------------
	// clone of the BJS fire procedural texture's shader
	BABYLON.Effect.ShadersStore["myFirePixelShader"]=

		"#ifdef GL_ES\r\n"+
		"precision highp float;\r\n"+
		"#endif\r\n"+

		"uniform float time;\r\n"+
		"uniform vec3 c1;\r\n"+
		"uniform vec3 c2;\r\n"+
		"uniform vec3 c3;\r\n"+
		"uniform vec3 c4;\r\n"+
		"uniform vec3 c5;\r\n"+
		"uniform vec3 c6;\r\n"+
		"uniform vec2 speed;\r\n"+
		"uniform float shift;\r\n"+
		"uniform float alphaThreshold;\r\n"+

		"varying vec2 vUV;\r\n"+

		"float rand(vec2 n) {\r\n"+
		"	return fract(cos(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);\r\n"+
		"}\r\n"+

		"float noise(vec2 n) {\r\n"+
		"	const vec2 d = vec2(0.0, 1.0);\r\n"+
		"	vec2 b = floor(n), f = smoothstep(vec2(0.0), vec2(1.0), fract(n));\r\n"+
		"	return mix(mix(rand(b), rand(b + d.yx), f.x), mix(rand(b + d.xy), rand(b + d.yy), f.x), f.y);\r\n"+
		"}\r\n"+

		"float fbm(vec2 n) {\r\n"+
		"	float total = 0.0, amplitude = 1.0;\r\n"+
		"	for (int i = 0; i < 4; i++) {\r\n"+
		"		total += noise(n) * amplitude;\r\n"+
		"		n += n;\r\n"+
		"		amplitude *= .5;\r\n"+
		"	}\r\n"+
		"	return total;\r\n"+
		"}\r\n"+

		"void main() {\r\n"+
		"	vec2 p = vUV * 8.0;\r\n"+
		"	float q = fbm(p - time * .1);\r\n"+
		"	vec2 r = vec2(fbm(p + q + time * speed.x - p.x - p.y), fbm(p + q - time * speed.y));\r\n"+
		"	vec3 c = mix(c1, c2, fbm(p + r)) + mix(c3, c4, r.x) - mix(c5, c6, r.y);\r\n"+
		"	vec3 color = c * cos(shift * vUV.y);\r\n"+
		"	float luminance = dot(color.rgb, vec3(0.3, 0.59, 0.11));\r\n"+

		"	gl_FragColor = vec4(color, luminance * alphaThreshold + (1.0 - alphaThreshold));\r\n"+
	"}";
	// alert(BABYLON.Effect.ShadersStore["myFirePixelShader"]);
	// -----------------------------------------------
	// create/texturize the fire material that uses it
	var fireMaterial = new BABYLON.StandardMaterial("fontainSculptur2", scene);
	var fireTexture = new BABYLON.FireProceduralTexture("fire", 256, scene);
	fireTexture.level = 1;

	// black area compensator
	fireTexture.uScale = .7;
	fireTexture.vScale = .7;

	// el forco de shadero
	fireTexture.setFragment("myFire");

	// turn more fire material knobs
	fireMaterial.diffuseColor = new BABYLON.Color3(Math.random()/2, Math.random()/2, Math.random()/2);
	fireMaterial.diffuseTexture = fireTexture;
	fireMaterial.alpha = 1;
	// fireMaterial.opacityTexture = fireTexture;
	// fireMaterial.opacityColor = new BABYLON.Color3(0, 3, 0);
	fireMaterial.specularTexture = fireTexture;
	fireMaterial.emissiveTexture = fireTexture;
	fireMaterial.specularPower = 4;
	fireMaterial.backFaceCulling = false;

	// use a preset firecolors 6-pack
	// fireTexture.fireColors = BABYLON.FireProceduralTexture.PurpleFireColors;

	// or stock the firecolors array with six colors
	fireTexture.fireColors = [
		new BABYLON.Color3(Math.random(), Math.random(), Math.random()),
		new BABYLON.Color3(Math.random(), Math.random(), Math.random()),
		new BABYLON.Color3(Math.random(), Math.random(), Math.random()),
		new BABYLON.Color3(Math.random(), Math.random(), Math.random()),
		new BABYLON.Color3(Math.random(), Math.random(), Math.random()),
		new BABYLON.Color3(Math.random(), Math.random(), Math.random())
	];
	// -----------------------------------------------
	// assign it to the mesh
	mesh.material = fireMaterial;
	// -----------------------------------------------
	// here we go loop-tee-loo
	createRibbon(mesh, paths, false, null, scene);
	// -----------------------------------------------
	// Adding some experimenter's lights
	var light = new BABYLON.PointLight("Omni", new BABYLON.Vector3(0, 0, 0), scene);
	light.diffuse = new BABYLON.Color3(1, 1, 1);
	// light.specular = new BABYLON.Color3(1, 1, 1);
	light.intensity = .25;

	// var light = new BABYLON.DirectionalLight("Dir0", new BABYLON.Vector3(0, 1, 0), scene);
	// light.diffuse = new BABYLON.Color3(1, 1, 1);
	// light.specular = new BABYLON.Color3(1, 1, 1);

	// var light = new BABYLON.SpotLight("Spot0", new BABYLON.Vector3(0, -10, 0), new BABYLON.Vector3(0, 1, 0), 0.8, 2, scene);
	// light.diffuse = new BABYLON.Color3(1, 1, 1);
	// light.specular = new BABYLON.Color3(1, 1, 1);
	// light.intensity = 0;

	// var light = new BABYLON.HemisphericLight("Hemi0", new BABYLON.Vector3(0, -1, 0), scene);
	// light.diffuse = new BABYLON.Color3(1, 1, 1);
	// light.specular = new BABYLON.Color3(1, 1, 1);
	// light.intensity = .7;

	//Adding an Arc Rotate Camera
	var camera = new BABYLON.ArcRotateCamera("Camera", -Math.PI/2, 1, 20, BABYLON.Vector3.Zero(), scene);
	camera.attachControl(canvas, false);
	camera.wheelPrecision = 50;  // lower = faster
	// -----------------------------------------------
/*
	// a handy m&m for experimenting-with.  (mesh & material)
	var box = BABYLON.Mesh.CreateBox("box", 1, scene);
	// var box = BABYLON.Mesh.CreatePlane("box", 50, scene);
	box.visibility = 1;
	// camera.target = box;

	box.material = new BABYLON.StandardMaterial("bmat", scene);
	// box.material.emissiveColor = new BABYLON.Color3(0.2, 0.2, 0.2);
	box.position = new BABYLON.Vector3(0, -.1, 0);
	box.rotation = new BABYLON.Vector3(-Math.PI/2, 0, 0);
	box.showBoundingBox = true;
*/
	// -----------------------------------------------
	// Create the "God Rays" effect (volumetric light scattering)
	var godrays = new BABYLON.VolumetricLightScatteringPostProcess('godrays', 1.0, camera, mesh, 50, BABYLON.Texture.BILINEAR_SAMPLINGMODE, engine, false);
	// alert("gr.mesh name: " + godrays.mesh.name);

	// no particles in this demo, so we leave this false
	// godrays._volumetricLightScatteringRTT.renderParticles = true;

	// some advanced godrays settings for you to play-with
	godrays.exposure = 0.2;
	godrays.decay = 0.96815;
	godrays.weight = 0.58767;
	godrays.density = 0.926;
	// -----------------------------------------------
	// not sure about this.  Right now, with my active hemi, it does little/nothing.
	light.position = godrays.mesh.position;
	// -----------------------------------------------
/*
	// this displays a small flat plane to better see the fire texture
	var monitor = BABYLON.Mesh.CreatePlane("mon", 1.8, scene);
	monitor.rotation = new BABYLON.Vector3(0, Math.PI, 0);
	monitor.position = new BABYLON.Vector3(4, 2, -1);
	monitor.material = fireMaterial;
	monitor.showBoundingBox = true;
	// monitor.billboardMode = BABYLON.AbstractMesh.BILLBOARDMODE_ALL;
*/
	// -----------------------------------------------
	// how about some animation?
	var alpha = 1;
	scene.registerBeforeRender(function() {
		mesh.rotation.y -= 0.03;
		mesh.rotation.x += 0.01;

		// activate these 2 lines for y-axis scale-pulsing
		// alpha += 0.3;
		// mesh.scaling.y = (Math.cos(alpha)/2)+.7;

	});


	return scene;
}
chosenScene = createScene08();     
            
                    break;

                    case 9:
 var createScene09 = function () {
	  //create scene
    var scene = new BABYLON.Scene(engine);
    scene.clearColor = new BABYLON.Color3(0.001, 0.001, 0.001);
    scene.ambientColor = new BABYLON.Color3(0.001, 0.001, 0.001);
    //const xrHelper = await WebXRExperienceHelper.CreateAsync(scene);

      // create and position arc-rotate camera
      var camera = new BABYLON.ArcRotateCamera("ArcRotateCamera", 1, 0.8, 5, new BABYLON.Vector3(0, 0, 0), scene);
    
    camera.attachControl(canvas, true);
    camera.useAutoRotationBehavior = true;


    camera.lowerRadiusLimit = 2.5;
    camera.upperRadiusLimit = 10;
    camera.pinchDeltaPercentage = 0.01;
    camera.wheelDeltaPercentage = 0.01;

    //  BABYLON.ParticleHelper.CreateAsync("sun", scene).then((set) => {
    //     set.start();
    // });

    var sun = {
      name: "sun"
      } 
      
    var jake = sceneManager.loadStar(sun.name, true, scene);

 
        //skybox mat
       var skySpace = [
          "../textures/sky/space/nx.jpg",
          "../textures/sky/space/ny.jpg",
          "../textures/sky/space/nz.jpg",
          "../textures/sky/space/px.jpg",
          "../textures/sky/space/py.jpg",
          "../textures/sky/space/pz.jpg",
        ];
    var bg = new Background(skySpace, scene);


    //   // Create a particle system
    // var particleSystem = new BABYLON.ParticleSystem("particles", 2000, scene);

    // //Texture of each particle
    // particleSystem.particleTexture = new BABYLON.Texture("../textures/T_SunSurface.png", scene);

    // // console.log(particleSystem.particleTexture._texture.height);


    
    // // Where the particles come from
    // particleSystem.emitter = BABYLON.Vector3.Zero(); // the starting location

    // // Colors of all particles
    // particleSystem.color1 = new BABYLON.Color4(0.7, 0.8, 1.0, 1.0);
    // particleSystem.color2 = new BABYLON.Color4(0.2, 0.5, 1.0, 1.0);
    // particleSystem.colorDead = new BABYLON.Color4(0, 0, 0.2, 0.0);

    // // Size of each particle (random between...
    // particleSystem.minSize = 0.1;
    // particleSystem.maxSize = 0.5;

    // // Life time of each particle (random between...
    // particleSystem.minLifeTime = 1;
    // particleSystem.maxLifeTime = 4;

    // // Emission rate
    // particleSystem.emitRate = 1000;


    // /******* Emission Space ********/
    // particleSystem.createCylinderEmitter(3,0.1,2);


    // // Speed
    // particleSystem.minEmitPower = 1;
    // particleSystem.maxEmitPower = 3;
    // particleSystem.updateSpeed = 0.005;

    // // Start the particle system
    // particleSystem.start();


	return scene;
};

chosenScene = createScene09();                   
                    break;
                    case 10:
   var createScene10 = function () {  
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
     sceneManager.sceneEffect(10);


		
    return scene;
};
chosenScene = createScene10();                 
                    break;
                    case 11:
   var createScene11 = function () {  
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
     sceneManager.sceneEffect(10);


		
    return scene;
};
   chosenScene = createScene11();    
                    break;
                    case 12:
var createScene12 = function () {

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
    material.diffuseTexture = new BABYLON.Texture("../textures/floor.png", scene);

    material.bumpTexture = new BABYLON.Texture("../textures/floor_bump.PNG", scene);
    material.bumpTexture.level = 0.3;
    //   material.bumpTexture.uScale = 2;
    //       material.bumpTexture.vScale = 2;
    material.emissiveTexture = new BABYLON.Texture("../textures/candleopacity.png", scene);
    material.emissiveColor = new BABYLON.Color3(0.6, 0.5, 0.4);
    material.specularTexture = new BABYLON.Texture("../textures/earth.jpg", scene);

    ground.material = material;
    sphere.material = material;
    sphere2.material = material;
    sceneManager.sceneEffect(12);

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

chosenScene = createScene12();
                    break;
                    case 13:
 var createScene13 = function () {

    // This creates a basic Babylon Scene object (non-mesh)
    var scene = new BABYLON.Scene(engine);

    var assetPath = "../textures/";

    // This creates and positions a free camera (non-mesh)
    var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 5, -10), scene);

    // This targets the camera to scene origin
    camera.setTarget(BABYLON.Vector3.Zero());
    camera.clearColor = new BABYLON.Color3.Black();

    // This attaches the camera to the canvas
    camera.attachControl(canvas, true);

    // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
    var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);

    // Default intensity is 1. Let's dim the light a small amount
    light.intensity = 0.8;
    light.specular = new BABYLON.Color3(0.9, 0.4, 0.9);

    var gl = new BABYLON.GlowLayer("glow", scene);
    gl.intensity = 0.1;
    // Our built-in 'sphere' shape. Params: name, subdivs, size, scene
    var sphere = BABYLON.Mesh.CreateSphere("sphere1", 8, 2, scene);

    // Move the sphere upward 1/2 its height
    sphere.position.y = 2;

    // Our built-in 'ground' shape. Params: name, width, depth, subdivs, scene
 //   var ground = BABYLON.Mesh.CreateGround("ground1", 6, 6, 2, scene);
   
    var ground = BABYLON.Mesh.CreateGroundFromHeightMap("ground",assetPath+
        "Lava_005_DISP.png",
        10, 10, 400, 0, 0.4, scene, false);


    var material = new BABYLON.PBRMaterial("mat", scene);
    material.albedoTexture = new BABYLON.Texture(assetPath+"Lava_005_COLOR.jpg", scene);

    material.bumpTexture = new BABYLON.Texture(assetPath+"reflectivity.png", scene);
    material.bumpTexture.level = 0.5;
    //   material.bumpTexture.uScale = 2;
    //       material.bumpTexture.vScale = 2;
    material.emissiveTexture = new BABYLON.Texture(assetPath+"spider_webs_compressed.jpg", scene);
    material.emissiveColor = new BABYLON.Color3(245/255, 20/255, 20/255);
//    material.specularTexture = new BABYLON.Texture("Lava_005_DISP.jpg", scene);
    material.ambientTexture = new BABYLON.Texture(assetPath+"Lava_005_OCC.jpg", scene);

    material.metallicTexture = new BABYLON.Texture(assetPath+"Lava_005_ROUGH.jpg", scene);

    material.roughness = 1;
    material.metallic = 0.1;
        material.useRoughnessFromMetallicTextureAlpha = true;
    material.useRoughnessFromMetallicTextureGreen = false;
    material.useMetallnessFromMetallicTextureBlue = false;
    ground.material = material;
    sphere.material = material;
/*
material.clearCoat.isEnabled = true;
material.clearCoat.bumpTexture = new BABYLON.Texture(assetPath+"Lava_005_NORM.jpg", scene);
material.clearCoat.bumpTexture.level = 0.0;
*/
    var alpha = 0;
    scene.registerBeforeRender(function () {
      material.albedoTexture.uOffset += 0.001;
       material.bumpTexture.uOffset += 0.001;
     //   material.bumpTexture.vOffset -= 0.01;
        material.ambientTexture.uOffset += 0.001;
      material.metallicTexture.uOffset += 0.001;   
      material.emissiveTexture.uOffset += 0.01; 
     material.emissiveTexture.vOffset -= 0.005; 
      ground.scaling.y += Math.sin(alpha) / 300;   
        //  material.diffuseTexture.vOffset += 0.005;
        //    material.bumpTexture.vOffset += 0.005;
  //      material.bumpTexture.level += Math.sin(alpha) / 200;
        gl.intensity += Math.sin(alpha*2) / 100;
  //      console.log(material.bumpTexture.level);
   //  console.log(gl.intensity );
       alpha += 0.01;
 //  console.log(ground.scaling.y);

 //material.clearCoat.bumpTexture.level  += Math.sin(alpha) / 100;
    });

 //skybox mat
       var HellBox = [
          "../textures/sky/skybox2/nx.jpg",
          "../textures/sky/skybox2/ny.jpg",
          "../textures/sky/skybox2/nz.jpg",
          "../textures/sky/skybox2/px.jpg",
          "../textures/sky/skybox2/py.jpg",
          "../textures/sky/skybox2/pz.jpg",
        ];
        var bg = new Background(HellBox, scene);
    // scene.createDefaultEnvironment({
    //     createGround: false,
    //     createSkybox: true,
    // });
//scene.debugLayer.show();
    return scene;

};

chosenScene = createScene13();                   
                    break;
                    case 14:
var createScene14 = function () {
    // This creates a basic Babylon Scene object (non-mesh)
    var scene = new BABYLON.Scene(engine);
    scene.ambientColor = new BABYLON.Color3(0.01, 0, 0);
    scene.clearColor = new BABYLON.Color3(0.01, 0.01, 0.01);
    var camera = new BABYLON.ArcRotateCamera("camera1", 12, Math.PI/3, 55, BABYLON.Vector3.Zero());
    camera.setTarget(BABYLON.Vector3.Zero());
    camera.attachControl(canvas, true);
    camera.wheelPrecision = 120.0
    camera.useAutoRotationBehavior =  true;

    
    // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
    var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);

    // Default intensity is 1. Let's dim the light a small amount
    light.intensity = 0.7;

    // Our built-in 'ground' shape.
    var ground = BABYLON.MeshBuilder.CreateGround("ground", {width: 23*2, height: 23*2}, scene);
    ground.material = new BABYLON.StandardMaterial("groundMat", scene);
    ground.material.diffuseTexture = new BABYLON.Texture("../textures/albedo.png", scene);

///////////////////////////////Handling island switch//////////////////////////////
    var form = document.createElement("FORM"); //need to be accessed by other functions
    form.setAttribute('type', 'search');
    form.setAttribute('id',   'burst');
    form.style.flexDirection= 'row';
    form.style.alignItems= 'right';
    form.style.display = 'flex';
    form.style.width= '100%';
    form.style.height= '0%';
    document.body.appendChild(form);

    var label = document.createElement('LABEL')
    label.style.position= 'absolute';
    label.style.left= '50%';
    label.style.top= '10%';
    label.style.width = "100px";
    label.style.height = "100px";
    form.appendChild(label);


    var text = document.createElement("div"); 
    var newContent = document.createTextNode("Switch Island");
    newContent.readOnly = 'true'
    text.appendChild(newContent);
    text.style.position= 'absolute';
    text.style.left= '43%';
    text.style.top= '-10%';
    //text.style.width = '100%';
   // newDiv.style.background= 'white';
    text.style.fontSize= '8px';
    text.style.color= "black";
    text.style.width = "100px";

    //document.body.appendChild(text); 
    label.appendChild(text);


     //dealing with switch icon
    var switchIcon = document.createElement("img");
    switchIcon.setAttribute('type', 'image');
    switchIcon.setAttribute('id',   'mySceneSwitch');
    switchIcon.style.left= "50%";
    switchIcon.style.top= '10.5%'
    switchIcon.style.position= 'absolute';
     //pinned icon
    switchIcon.src= "../textures/change.png";
    switchIcon.style.width = "30px";
    switchIcon.style.height = "30px";

     var mountain = BABYLON.MeshBuilder.CreateGroundFromHeightMap("gdhm1", "../textures/heightmap01.jpg", {width:45, height :45, subdivisions: 210, maxHeight: 5});
    mountain.material = new BABYLON.StandardMaterial("groundMat", scene);
    mountain.material.diffuseTexture = new BABYLON.Texture("../textures/grass.jpg", scene);
    mountain.material.diffuseTexture.uScale = mountain.material.diffuseTexture.vScale = 8;
    mountain.material.specularColor = new BABYLON.Color3(0, .1, 0);
    mountain.position.y = .5;
   console.log(mountain.material)
    var island = 0;
    switchIcon.onclick = function (){

    if(island < 4){
    
        island++;

      //  island++;

    switch (island) {
        case 0:

    mountain = BABYLON.MeshBuilder.CreateGroundFromHeightMap("gdhm1", "../textures/heightmap01.jpg", {width:45, height :45, subdivisions: 210, maxHeight: 5});
    mountain.material = new BABYLON.StandardMaterial("groundMat", scene);
    mountain.material.diffuseTexture = new BABYLON.Texture("../textures/grass.jpg", scene);
    mountain.material.diffuseTexture.uScale = mountain.material.diffuseTexture.vScale = 8;
    mountain.material.specularColor = new BABYLON.Color3(0, .1, 0);
    mountain.position.y = .5;
    console.log(mountain.material)
              
            break;
        case 1:
    var mountain = BABYLON.MeshBuilder.CreateGroundFromHeightMap("gdhm2", "../textures/heightmap02.jpg", {width:45, height :45, subdivisions: 210, maxHeight: 5});
    mountain.material = new BABYLON.StandardMaterial("groundMat", scene);
    mountain.material.diffuseTexture = new BABYLON.Texture("../textures/grass.jpg", scene);
    mountain.material.diffuseTexture.uScale = mountain.material.diffuseTexture.vScale = 8;
    mountain.material.specularColor = new BABYLON.Color3(0, .1, 0);
    mountain.position.y = .5;
    console.log(mountain.material)
      
            break;
        case 2:
    var mountain = BABYLON.MeshBuilder.CreateGroundFromHeightMap("gdhm3", "../textures/heightmap03.jpg", {width:45, height :45, subdivisions: 210, maxHeight: 5});
    mountain.material = new BABYLON.StandardMaterial("groundMat", scene);
    mountain.material.diffuseTexture = new BABYLON.Texture("../textures/grass.jpg", scene);
    mountain.material.diffuseTexture.uScale = mountain.material.diffuseTexture.vScale = 8;
    mountain.material.specularColor = new BABYLON.Color3(0, .1, 0);
    mountain.position.y = .5;
    console.log(mountain.material)
            
            break;
        case 3:
    var mountain = BABYLON.MeshBuilder.CreateGroundFromHeightMap("gdhm", "../textures/heightmap04.png", {width:45, height :45, subdivisions: 210, maxHeight: 5});
    mountain.material = new BABYLON.StandardMaterial("groundMat", scene);
    mountain.material.diffuseTexture = new BABYLON.Texture("../textures/grass.jpg", scene);
    mountain.material.diffuseTexture.uScale = mountain.material.diffuseTexture.vScale = 8;
    mountain.material.specularColor = new BABYLON.Color3(0, .1, 0);
    mountain.position.y = .5;
    //console.log(mountain.material)
      island = 0;   
            4;
    
        default:

    var mountain = BABYLON.MeshBuilder.CreateGroundFromHeightMap("gdhm", "../textures/heightmap02.jpg", {width:45, height :45, subdivisions: 210, maxHeight: 5});
    mountain.material = new BABYLON.StandardMaterial("groundMat", scene);
    mountain.material.diffuseTexture = new BABYLON.Texture("../textures/grass.jpg", scene);
    mountain.material.diffuseTexture.uScale = mountain.material.diffuseTexture.vScale = 8;
    mountain.material.specularColor = new BABYLON.Color3(0, .1, 0);
    mountain.position.y = .5;
    console.log(mountain.material)
            
            break;
        }

        }else{
   
//             island++;

//     switch (island) {
//         case 0:

//    var mountain = BABYLON.MeshBuilder.CreateGroundFromHeightMap("gdhm1", "../textures/heightmap01.jpg", {width:45, height :45, subdivisions: 210, maxHeight: 5});
//     mountain.material = new BABYLON.StandardMaterial("groundMat", scene);
//     mountain.material.diffuseTexture = new BABYLON.Texture("../textures/grass.jpg", scene);
//     mountain.material.diffuseTexture.uScale = mountain.material.diffuseTexture.vScale = 8;
//     mountain.material.specularColor = new BABYLON.Color3(0, .1, 0);
//     mountain.position.y = .5;
//     console.log(mountain.material)
              
//             break;
//         case 1:
//     var mountain = BABYLON.MeshBuilder.CreateGroundFromHeightMap("gdhm2", "../textures/heightmap02.jpg", {width:45, height :45, subdivisions: 210, maxHeight: 5});
//     mountain.material = new BABYLON.StandardMaterial("groundMat", scene);
//     mountain.material.diffuseTexture = new BABYLON.Texture("../textures/grass.jpg", scene);
//     mountain.material.diffuseTexture.uScale = mountain.material.diffuseTexture.vScale = 8;
//     mountain.material.specularColor = new BABYLON.Color3(0, .1, 0);
//     mountain.position.y = .5;
//     console.log(mountain.material)
      
//             break;
//         case 2:
//     var mountain = BABYLON.MeshBuilder.CreateGroundFromHeightMap("gdhm3", "../textures/heightmap03.jpg", {width:45, height :45, subdivisions: 210, maxHeight: 5});
//     mountain.material = new BABYLON.StandardMaterial("groundMat", scene);
//     mountain.material.diffuseTexture = new BABYLON.Texture("../textures/grass.jpg", scene);
//     mountain.material.diffuseTexture.uScale = mountain.material.diffuseTexture.vScale = 8;
//     mountain.material.specularColor = new BABYLON.Color3(0, .1, 0);
//     mountain.position.y = .5;
//     console.log(mountain.material)
            
//             break;
//         case 3:
//     var mountain = BABYLON.MeshBuilder.CreateGroundFromHeightMap("gdhm", "../textures/heightmap04.png", {width:45, height :45, subdivisions: 210, maxHeight: 5});
//     mountain.material = new BABYLON.StandardMaterial("groundMat", scene);
//     mountain.material.diffuseTexture = new BABYLON.Texture("../textures/grass.jpg", scene);
//     mountain.material.diffuseTexture.uScale = mountain.material.diffuseTexture.vScale = 8;
//     mountain.material.specularColor = new BABYLON.Color3(0, .1, 0);
//     mountain.position.y = .5;
//     console.log(mountain.material)
            
//             4;
    
//         default:

//     var mountain = BABYLON.MeshBuilder.CreateGroundFromHeightMap("gdhm", "../textures/heightmap02.jpg", {width:45, height :45, subdivisions: 210, maxHeight: 5});
//     mountain.material = new BABYLON.StandardMaterial("groundMat", scene);
//     mountain.material.diffuseTexture = new BABYLON.Texture("../textures/grass.jpg", scene);
//     mountain.material.diffuseTexture.uScale = mountain.material.diffuseTexture.vScale = 8;
//     mountain.material.specularColor = new BABYLON.Color3(0, .1, 0);
//     mountain.position.y = .5;
//     console.log(mountain.material)
            
//             break;
//         }

          }

    console.log(island)
    
       



    }
    switchIcon.onmouseover = function(){

    switchIcon.style.width = "27px";
    switchIcon.style.height = "27px";
    text.style.color= "white";
    switchIcon.src= "../textures/changeWh.png";

    }
    switchIcon.onmouseleave = function(){

    switchIcon.style.width = "30px";
    switchIcon.style.height = "30px";
    text.style.color= "black";
    switchIcon.src= "../textures/change.png";



    }
    label.appendChild(switchIcon); 

    ///////////////////////////End of island switch//////////////////


    // water
    var water = BABYLON.Mesh.CreateGround("water", 45, 45, 64, scene);
    water.position.y+=2;
    // tub sides
    const box1 = BABYLON.MeshBuilder.CreateBox("box1", {height: 4, width: 45, depth: 1});
    box1.material = new BABYLON.StandardMaterial("box1Mat", scene);
    box1.material.diffuseTexture = new BABYLON.Texture("../textures/albedo.png", scene);
    box1.position.z=23;
    box1.position.y=2;
    const box2 = BABYLON.MeshBuilder.CreateBox("box2", {height: 4, width: 45, depth: 1});
    box2.material = new BABYLON.StandardMaterial("box2Mat", scene);
    box2.material.diffuseTexture = new BABYLON.Texture("../textures/albedo.png", scene);
    box2.position.z=-23;
    box2.position.y=2;
    const box3 = BABYLON.MeshBuilder.CreateBox("box3", {height: 4, width: 1, depth: 45});
    box3.material = new BABYLON.StandardMaterial("box3Mat", scene);
    box3.material.diffuseTexture = new BABYLON.Texture("../textures/albedo.png", scene);
    box3.position.x=23;
    box3.position.y=2;
    const box4 = BABYLON.MeshBuilder.CreateBox("box4", {height: 4, width: 1, depth: 45});
    box4.material = new BABYLON.StandardMaterial("box4Mat", scene);
    box4.material.diffuseTexture = new BABYLON.Texture("../textures/albedo.png", scene);
    box4.position.x=-23;
    box4.position.y=2;

    // stylized water shader
    BABYLON.Effect.ShadersStore["customVertexShader"]= "\r\n"+   
		"precision highp float;\r\n"+

    	// Attributes
    	"attribute vec3 position;\r\n"+
    	"attribute vec2 uv;\r\n"+

    	// Uniforms
    	"uniform mat4 worldViewProjection;\r\n"+
        "uniform float time;\r\n"+
        "out float newY;\r\n"+

    	// Varying
        "varying vec3 vPosition;\r\n"+
        "varying vec4 vClipSpace;\r\n"+

    	"void main(void) {\r\n"+
            "float scale = 1.0;\r\n"+
            // calc new position
            "float newY = (sin(position.z * 1.0 / scale + time * 1.0)) * .1 ;\r\n"+
            // new model position
            "vec3 newPositionM = vec3(position.x,newY,position.z);\r\n"+
    	    "gl_Position = worldViewProjection * vec4(newPositionM, 1.0);\r\n"+
            // grab vertex position in world space
            "vPosition = position;\r\n"+
            // grab vertex position in view space
            "vClipSpace = gl_Position;\r\n"+
    	"}\r\n";

    BABYLON.Effect.ShadersStore["customFragmentShader"]="\r\n"+
        "precision highp float;\r\n"+

        // Varyings
        "varying vec3 vPosition;\r\n"+
        // world distance, camera to water
        "varying vec4 vClipSpace;\r\n"+

        // Uniforms
        "uniform sampler2D depthTex;\r\n"+
        "uniform sampler2D refractionSampler;\r\n"+
        "uniform float camMinZ;\r\n"+
        "uniform float camMaxZ;\r\n"+
        "uniform float maxDepth;\r\n"+
        // water colors
        "uniform vec4 wFoamColor;\r\n"+
        "uniform vec4 wDeepColor;\r\n"+
        "uniform vec4 wShallowColor;\r\n"+
        "uniform float time;\r\n"+
        "uniform float wNoiseScale;\r\n"+
        "uniform float wNoiseOffset;\r\n"+
        "uniform float fNoiseScale;\r\n"+
        "in float newY;\r\n"+

        "float mod289(float x){return x - floor(x * (1.0 / 289.0)) * 289.0;}\r\n"+
        "vec4 mod289(vec4 x){return x - floor(x * (1.0 / 289.0)) * 289.0;}\r\n"+
        "vec4 perm(vec4 x){return mod289(((x * 34.0) + 1.0) * x);}\r\n"+

        "float noise(vec3 p){\r\n"+
            "vec3 a = floor(p);\r\n"+
            "vec3 d = p - a;\r\n"+
            "d = d * d * (3.0 - 2.0 * d);\r\n"+

            "vec4 b = a.xxyy + vec4(0.0, 1.0, 0.0, 1.0);\r\n"+
            "vec4 k1 = perm(b.xyxy);\r\n"+
            "vec4 k2 = perm(k1.xyxy + b.zzww);\r\n"+

            "vec4 c = k2 + a.zzzz;\r\n"+
            "vec4 k3 = perm(c);\r\n"+
            "vec4 k4 = perm(c + 1.0);\r\n"+

            "vec4 o1 = fract(k3 * (1.0 / 41.0));\r\n"+
            "vec4 o2 = fract(k4 * (1.0 / 41.0));\r\n"+

            "vec4 o3 = o2 * d.z + o1 * (1.0 - d.z);\r\n"+
            "vec2 o4 = o3.yw * d.x + o3.xz * (1.0 - d.x);\r\n"+

            "return o4.y * d.y + o4.x * (1.0 - d.y);\r\n"+
        "}\r\n"+

    	"void main(void) {\r\n"+
            // waveNoise
            "float waveNoise = noise(vec3(0., time, 0.)+vPosition*wNoiseScale)*wNoiseOffset;\r\n"+
            
            // remap frag screen space coords to ndc (-1 to +1)
            "vec2 ndc = (vClipSpace.xy / vClipSpace.w) / 2.0 + 0.5;\r\n"+
            "float depthOfObjectBehindWater = texture2D(depthTex, vec2(ndc.x, ndc.y)+waveNoise).r;\r\n"+
            "float linearWaterDepth = (vClipSpace.z + camMinZ) / (camMaxZ + camMinZ);\r\n"+
            "float waterDepth = camMaxZ*(depthOfObjectBehindWater - linearWaterDepth);\r\n"+
            "float wdepth = clamp((waterDepth/maxDepth), 0.0, 1.0);\r\n"+

            // sampling refractive colors
            "vec4 refractiveColor = texture2D(refractionSampler, vec2(ndc.x, ndc.y)+waveNoise+newY);\r\n"+
            
            // foam 
            "float foam = 1.0-smoothstep(0.1, 0.2, wdepth);\r\n"+
            "float foamEffect = smoothstep( 0.1, 0.2, noise(vec3(0., time, 0.)+vPosition*fNoiseScale*0.3)*foam);\r\n"+
            "vec4 foamColor = vec4(foamEffect) *.5;\r\n"+

            // Colors
            "vec4 baseColor = vec4(0.0);\r\n"+
            "baseColor = mix(wShallowColor, wDeepColor, wdepth);\r\n"+
            "baseColor = mix(refractiveColor, baseColor, baseColor.a);\r\n"+
            "baseColor = mix(wFoamColor, baseColor, 1. - foamColor.r);\r\n"+
            // final result
            "gl_FragColor = baseColor;\r\n"+
            
    	"}\r\n";

    var shaderMaterial = new BABYLON.ShaderMaterial("shader", scene, {vertex: "custom",fragment: "custom"},
    {
	    attributes: ["position", "normal", "uv"],
		uniforms: ["world", "worldView", "worldViewProjection", "view", "projection"],
    });

    // linear depth only!! I dun want to work with non-linear depth map!
    var depthRenderer = scene.enableDepthRenderer(scene.activeCamera,false);
    var depthTex = depthRenderer.getDepthMap();
 
    var _refractionRTT = new BABYLON.RenderTargetTexture("water_refraction", { width: 256, height: 256 }, scene, false, true);
    _refractionRTT.wrapU = BABYLON.Constants.TEXTURE_MIRROR_ADDRESSMODE;
    _refractionRTT.wrapV = BABYLON.Constants.TEXTURE_MIRROR_ADDRESSMODE;
    _refractionRTT.ignoreCameraViewport = true;
    _refractionRTT.refreshRate = 1;

    _refractionRTT.renderList = depthTex.renderList = [ground, box1, box2, box3, box4, mountain ];

    scene.customRenderTargets.push(_refractionRTT);

    // set shader parameters
    shaderMaterial.setTexture("depthTex", depthTex);
    shaderMaterial.setTexture("refractionSampler", _refractionRTT);
    shaderMaterial.setFloat("camMinZ", scene.activeCamera.minZ);
    shaderMaterial.setFloat("camMaxZ", scene.activeCamera.maxZ);
    shaderMaterial.setFloat("time", 0);
    shaderMaterial.setFloat("wNoiseScale", 6.0);
    shaderMaterial.setFloat("wNoiseOffset", 0.01);
    shaderMaterial.setFloat("fNoiseScale", 10.0);
    shaderMaterial.setFloat("maxDepth", 5.0);
    shaderMaterial.setVector4("wDeepColor", new BABYLON.Vector4(0.0,0.3,0.5,0.8));
    shaderMaterial.setVector4("wShallowColor", new BABYLON.Vector4(0.0,0.6,0.8,0.8));
    shaderMaterial.setVector4("wFoamColor", new BABYLON.Vector4(1,1,1,1));
    shaderMaterial.alpha = .5;

    var time = 0;
    scene.registerBeforeRender(function() {
        time += engine.getDeltaTime() * 0.001;
        shaderMaterial.setFloat("time", time);
    });

    water.material = shaderMaterial;
       //skybox mat
       var skySpace = [
          "../textures/sky/Tropical/TropicalSunnyDay_nx.jpg",
          "../textures/sky/Tropical/TropicalSunnyDay_ny.jpg",
          "../textures/sky/Tropical/TropicalSunnyDay_nz.jpg",
          "../textures/sky/Tropical/TropicalSunnyDay_px.jpg",
          "../textures/sky/Tropical/TropicalSunnyDay_py.jpg",
          "../textures/sky/Tropical/TropicalSunnyDay_pz.jpg",
        ];
    var bg = new Background(skySpace, scene);

    return scene;
};
//can make height map change by click
chosenScene = createScene14();                   

                    break;
                    case 15:
let createScene15 = function () {
            var scene = new BABYLON.Scene(engine);
            scene.ambientColor = new BABYLON.Color3(0.3, 0.3, 0.3);
            var light = new BABYLON.DirectionalLight("dir01", new BABYLON.Vector3(0, -0.5, 1.0), scene);
            var camera = new BABYLON.ArcRotateCamera("Camera", -Math.PI / 2, Math.PI / 2.24, 500, new BABYLON.Vector3(0, 0, 0), scene);
            light.position = new BABYLON.Vector3(20, 150, 70);
            camera.attachControl(canvas, true);
            scene.ambientColor = new BABYLON.Color3(0.01, 0, 0);
            scene.clearColor = new BABYLON.Color3(0.01, 0.01, 0.01);
            camera.useAutoRotationBehavior =  true;
            camera.autoRotationBehavior.idleRotationSpeed = 0.3; 
            //retrieve bool on shape change            

            let meshSphere = BABYLON.MeshBuilder.CreateSphere("mySphere", { diameter: 50 }, scene);
            meshSphere.isVisible = false;

            var pcs1 = new BABYLON.PointsCloudSystem("pcs", 1, scene)

            var speed = 3;

            // recycle : reset the particle at the emitter origin
            pcs1.recycleParticle = function (particle) {
                particle.position.x = BABYLON.Scalar.RandomRange(-18, 18);
                particle.position.y = -50;
                particle.position.z = BABYLON.Scalar.RandomRange(-25, 10);
                particle.velocity = new BABYLON.Vector3(Math.random(),Math.random(),Math.random())
                particle.velocity.normalize();
                particle.velocity.scaleInPlace(-speed * (0.1 + 0.5 * Math.random()));
                var col = 0.2 + 0.8 * Math.random();
                particle.color = new BABYLON.Color4(col, col, col, 1);
            };

            pcs1.addPoints(15000, pcs1.recycleParticle);
            pcs1.buildMeshAsync();

            pcs1.updateParticle = function (particle) {
                // update position
                (particle.position).addInPlace(particle.velocity);      // update particle new position

                // intersection
                // if (particle.intersectsMesh(mesh)) {
                //              particle.velocity.x = 0;
                //         particle.velocity.y = 0;
                //         particle.velocity.z = 0;
                //         particle.direction = 0;
                // }
                // let h = Math.sqrt(particle.velocity.x*particle.velocity.x +
                //     particle.velocity.y*particle.velocity.y +
                //     particle.velocity.z*particle.velocity.z);
                //      console.log(h);
                if (particle.intersectsMesh(meshSphere, true)) {
                    particle.velocity.x = 0;
                    particle.velocity.y = 0;
                    particle.velocity.z = 0;
                }

                if (particle.position.x < -50 || particle.position.x > 50) {
                    particle.velocity.x *= -1;
                }
                if (particle.position.y < -50 || particle.position.y > 50) {
                    particle.velocity.y *= -1;
                }
                if (particle.position.z < -50 || particle.position.z > 50) {
                    particle.velocity.z *= -1;
                }
            };

            //////////////////////////

                
            let mesh = BABYLON.MeshBuilder.CreateSphere("mySphere", { diameter: 50 }, scene);
            mesh.isVisible = false;

            var pcs2 = new BABYLON.PointsCloudSystem("pcs2", 1, scene)

            //var speed = 3;

            // recycle : reset the particle at the emitter origin
            pcs2.recycleParticle = function (particle) {
                particle.position.x = BABYLON.Scalar.RandomRange(-18, 18);
                particle.position.y = -50;
                particle.position.z = BABYLON.Scalar.RandomRange(-25, 10);
                particle.velocity = new BABYLON.Vector3(Math.random(),Math.random(),Math.random())
                particle.velocity.normalize();
                particle.direction = -1;
                particle.velocity.scaleInPlace(-speed * (0.1 + 0.5 * Math.random()));
                // var col = 0.2 + 0.8 * Math.random();
                // particle.color = new BABYLON.Color4(col, col, col, 1);
            };

            pcs2.addPoints(10000, pcs2.recycleParticle);
            pcs2.buildMeshAsync();

            pcs2.updateParticle = function (particle) {
                // update position
                (particle.position).addInPlace(particle.velocity);      // update particle new position

                // // intersection
                if (particle.intersectsMesh(mesh)) {
                             particle.velocity.x = 0;
                        particle.velocity.y = 0;
                        particle.velocity.z = 0;
                        particle.direction = 0;
                }

                if (particle.position.x < -50 || particle.position.x > 50) {
                    particle.velocity.x *= -1;
                }
                if (particle.position.y < -50 || particle.position.y > 50) {
                    particle.velocity.y *= -1;
                }
                if (particle.position.z < -50 || particle.position.z > 50) {
                    particle.velocity.z *= -1;
                }
            };

            sceneManager.sceneEffect(15)
            

            scene.registerAfterRender(() => {

            var changeshape = localStorage.getItem('shaper');

                if (changeshape == null){
                    
                   pcs1.setParticles();
                  

                }else{
                   pcs2.setParticles();
                   


                }

                   

            });


            return scene;
        }
chosenScene = createScene15();  
                    break;
                    default:
let createScene16 = function () {
            var scene = new BABYLON.Scene(engine);
            scene.ambientColor = new BABYLON.Color3(0.3, 0.3, 0.3);
            var light = new BABYLON.DirectionalLight("dir01", new BABYLON.Vector3(0, -0.5, 1.0), scene);
            var camera = new BABYLON.ArcRotateCamera("Camera", -Math.PI / 2, Math.PI / 2.24, 500, new BABYLON.Vector3(0, 0, 0), scene);
            light.position = new BABYLON.Vector3(20, 150, 70);
            camera.attachControl(canvas, true);
            scene.ambientColor = new BABYLON.Color3(0.01, 0, 0);
            scene.clearColor = new BABYLON.Color3(0.01, 0.01, 0.01);
            camera.useAutoRotationBehavior =  true;
            camera.autoRotationBehavior.idleRotationSpeed = 0.3; 
            //retrieve bool on shape change            
            console.log("THIS IS DEFAULT")
            let meshSphere = BABYLON.MeshBuilder.CreateSphere("mySphere", { diameter: 50 }, scene);
            meshSphere.isVisible = false;

            var pcs1 = new BABYLON.PointsCloudSystem("pcs", 1, scene)

            var speed = 3;

            // recycle : reset the particle at the emitter origin
            pcs1.recycleParticle = function (particle) {
                particle.position.x = BABYLON.Scalar.RandomRange(-18, 18);
                particle.position.y = -50;
                particle.position.z = BABYLON.Scalar.RandomRange(-25, 10);
                particle.velocity = new BABYLON.Vector3(Math.random(),Math.random(),Math.random())
                particle.velocity.normalize();
                particle.velocity.scaleInPlace(-speed * (0.1 + 0.5 * Math.random()));
                var col = 0.2 + 0.8 * Math.random();
                particle.color = new BABYLON.Color4(col, col, col, 1);
            };

            pcs1.addPoints(15000, pcs1.recycleParticle);
            pcs1.buildMeshAsync();

            pcs1.updateParticle = function (particle) {
                // update position
                (particle.position).addInPlace(particle.velocity);      // update particle new position

                // intersection
                // if (particle.intersectsMesh(mesh)) {
                //              particle.velocity.x = 0;
                //         particle.velocity.y = 0;
                //         particle.velocity.z = 0;
                //         particle.direction = 0;
                // }
                // let h = Math.sqrt(particle.velocity.x*particle.velocity.x +
                //     particle.velocity.y*particle.velocity.y +
                //     particle.velocity.z*particle.velocity.z);
                //      console.log(h);
                if (particle.intersectsMesh(meshSphere, true)) {
                    particle.velocity.x = 0;
                    particle.velocity.y = 0;
                    particle.velocity.z = 0;
                }

                if (particle.position.x < -50 || particle.position.x > 50) {
                    particle.velocity.x *= -1;
                }
                if (particle.position.y < -50 || particle.position.y > 50) {
                    particle.velocity.y *= -1;
                }
                if (particle.position.z < -50 || particle.position.z > 50) {
                    particle.velocity.z *= -1;
                }
            };

            //////////////////////////

                
            let mesh = BABYLON.MeshBuilder.CreateSphere("mySphere", { diameter: 50 }, scene);
            mesh.isVisible = false;

            var pcs2 = new BABYLON.PointsCloudSystem("pcs2", 1, scene)

            //var speed = 3;

            // recycle : reset the particle at the emitter origin
            pcs2.recycleParticle = function (particle) {
                particle.position.x = BABYLON.Scalar.RandomRange(-18, 18);
                particle.position.y = -50;
                particle.position.z = BABYLON.Scalar.RandomRange(-25, 10);
                particle.velocity = new BABYLON.Vector3(Math.random(),Math.random(),Math.random())
                particle.velocity.normalize();
                particle.direction = -1;
                particle.velocity.scaleInPlace(-speed * (0.1 + 0.5 * Math.random()));
                // var col = 0.2 + 0.8 * Math.random();
                // particle.color = new BABYLON.Color4(col, col, col, 1);
            };

            pcs2.addPoints(10000, pcs2.recycleParticle);
            pcs2.buildMeshAsync();

            pcs2.updateParticle = function (particle) {
                // update position
                (particle.position).addInPlace(particle.velocity);      // update particle new position

                // // intersection
                if (particle.intersectsMesh(mesh)) {
                             particle.velocity.x = 0;
                        particle.velocity.y = 0;
                        particle.velocity.z = 0;
                        particle.direction = 0;
                }

                if (particle.position.x < -50 || particle.position.x > 50) {
                    particle.velocity.x *= -1;
                }
                if (particle.position.y < -50 || particle.position.y > 50) {
                    particle.velocity.y *= -1;
                }
                if (particle.position.z < -50 || particle.position.z > 50) {
                    particle.velocity.z *= -1;
                }
            };

            sceneManager.sceneEffect(15)
            

            scene.registerAfterRender(() => {

            var changeshape = localStorage.getItem('shaper');

                if (changeshape == null){
                    
                   pcs1.setParticles();
                  

                }else{
                   pcs2.setParticles();
                   


                }

                   

            });


            return scene;
        }
chosenScene = createScene16();   
                    break;

}

localStorage.removeItem('favePocket') //remove instance of fave made by popup if any
  

engine.runRenderLoop(function () {
  
   chosenScene.render();
   
});

// Resize
window.addEventListener("resize", function () {
    engine.resize();
});

