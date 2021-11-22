import * as Babylon from "../WebXR-Modules/babylon.js";
import * as customMat from "../WebXR-Modules/babylonjs.materials.min.js";

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


// =============
// Shaders
// =============

var spiralSpringScene = function () {

    const {
        Scene, HemisphericLight, Vector3, Color3, Color4, ArcRotateCamera,
        MeshBuilder, DefaultRenderingPipeline, PBRCustomMaterial, Texture
    } = BABYLON;

    //
    // Main scene ===============================
    //    

    const scene = new Scene(engine);
    scene.clearColor = Color4.FromColor3(new Color3(25 / 255, 32 / 255, 38 / 255));

    const cAlpha = Math.PI / 4;
    const cBeta = Math.PI / 3;
    const camera = new ArcRotateCamera('camera', cAlpha, cBeta, 30.0, new Vector3(0, 0, 0), scene);
    camera.wheelPrecision = 50;
    camera.minZ = 0.9;
    camera.attachControl(canvas, true);

    const baseLight = new HemisphericLight('hemiLight', new Vector3(-2, 2, 0), scene);
    baseLight.diffuse = new Color3(1, 1, 1);
    baseLight.specular = new Color3(0.0, 0.0, 0.0);

    const segments = 512;
    const radius = 0.6;

    const createMesh = (baseMesh, time = 0) => {
        return MeshBuilder.CreateTube('torus', {
            path: (() => {
                const path = [];

                for (let i = 0; i <= segments; i += 1) {
                    const p = i / (segments - radius * 0.1);

                    const g = 16;

                    const f1 = p * Math.PI * g - time * 500;
                    const f2 = Math.cos(p * Math.PI * 2);

                    const x = Math.cos(f1) * (f2 * 0.5 + 0.5 + 0.5) * 5;
                    const z = Math.sin(f1) * (f2 * 0.5 + 0.5 + 0.5) * 5;
                    const y = Math.cos(p * (Math.PI * 2) + Math.PI / 2) * 5;

                    path.push(new Vector3(x, y, z));
                }

                return path;
            })(),
            radius,
            tessellation: 64,
            updatable: true,
            instance: baseMesh,
        });
    };

    const mesh = createMesh();

    const mat = new PBRCustomMaterial('plastic', scene);
    mat.metallic = 0.0;
    mat.roughness = 1.0;
    mat.albedoColor = new Color3(1, 0, 0);
    mat.albedoTexture = new Texture('none', scene);
    mesh.material = mat;

    // -------------------

    mat.Fragment_Definitions(`
vec3 hsv2rgb_smooth( in vec3 c ) {
    vec3 rgb = clamp( abs(mod(c.x*6.0+vec3(0.0,4.0,2.0),6.0)-3.0)-1.0, 0.0, 1.0 );
	rgb = rgb*rgb*(3.0-2.0*rgb); // cubic smoothing
	return c.z * mix( vec3(1.0), rgb, c.y);
}`);
    mat.Fragment_Custom_Albedo(`
vec2 uv =  vAlbedoUV+uvOffset;
surfaceAlbedo.rgb = hsv2rgb_smooth(vec3(uv.y*2. - iTime*.1, .95, 1.));    
`);

    mat.AddUniform('iTime', 'float');

    mat.onBind = () => {
        const time = (+new Date() - initTime) * 0.001;
        mat.getEffect().setFloat('iTime', time);
    };

    // -----------------------

    const defaultPipeline = new DefaultRenderingPipeline('default', true, scene, [camera]);
    defaultPipeline.fxaaEnabled = true;
    defaultPipeline.samples = 8;

    defaultPipeline.imageProcessingEnabled = false;

    defaultPipeline.chromaticAberrationEnabled = true;
    defaultPipeline.chromaticAberration.aberrationAmount = 2.5;

    // ------------------------------

    const initTime = +new Date();
    let prevTime = initTime;
    let renderTime = 0;
    scene.registerBeforeRender(() => {

        const time = (+new Date() - initTime) * 0.001;

        const deltaTime = time - prevTime;
        prevTime = time;

        const delta = Math.min(deltaTime, 1 / 60);
        renderTime += delta;

        // use renderTime 

        mesh.rotation.y = renderTime * Math.PI;

        // ......

    });

    /////////////Mouse control on hover/////////////////

    // /* mouse control */

    // const canvasSize = { x: canvas.width, y: canvas.height };
    // const camSettings = {
    //     lerpSpeed: 0.1,
    //     lerpDistanceAlpha: 0.4,
    //     lerpDistanceBeta: 0.4,
    //     centerAlpha: parseInt(camera.alpha),
    //     centerBeta: parseInt(camera.beta),
    //     newAlpha: parseInt(camera.alpha),
    //     newBeta: parseInt(camera.beta)
    // };
    // const lerp = (a, b, n) => (1 - n) * a + n * b;

    // scene.onPointerMove = function (evt, pickInfo) {
    //     const x = evt.pageX / canvasSize.x * 2 - 1;
    //     const y = evt.pageY / canvasSize.y * 2 - 1;
    //     camSettings.newAlpha = camSettings.centerAlpha + camSettings.lerpDistanceAlpha * x;
    //     camSettings.newBeta = camSettings.centerBeta + camSettings.lerpDistanceBeta * y;
    // }

    // scene.registerBeforeRender(() => {
    //     camera.alpha = lerp(camera.alpha, camSettings.newAlpha, camSettings.lerpSpeed);
    //     camera.beta = lerp(camera.beta, camSettings.newBeta, camSettings.lerpSpeed);
    // });

    // /////////////////////////////////

    return scene;
};


var chosenScene = spiralSpringScene();   
            

  

engine.runRenderLoop(function () {
  
   chosenScene.render();
   
});

// Resize
window.addEventListener("resize", function () {
    engine.resize();
});

