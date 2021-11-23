import * as Babylon from "../WebXR-Modules/babylon.js";


///////////////////////////////////////////////////////////////////////////



var canvas = document.getElementById("renderCanvas");
var engine = new BABYLON.Engine(canvas, true);

let radius = .25;
let size = 2;

class Waves {
    constructor(scene) {

        let pcs = new BABYLON.PointsCloudSystem("pcs", size, scene);

        let time = 0;
        let factor = 50;

        let p = new BABYLON.Vector3(0, 0, 0);
        let i = new BABYLON.Vector3(0, 0, 0);
        let c = new BABYLON.Vector3(0, 0, 0);

        pcs.recycleParticle = (particle) => {
            particle.color.set(1, 1, 1);

            particle.x = Math.PI * Math.random();
            particle.y = Math.PI * Math.random();
            particle.z = Math.PI * Math.random();
        };

        pcs.addPoints(10000, pcs.recycleParticle);
        pcs.buildMeshAsync();

        pcs.updateParticle = (particle) => {

            p.x = particle.x;
            p.y = particle.y;
            p.z = particle.z;

            let letime = time * .5 + 23.0;

            i.x = p.x;
            i.y = p.y;
            i.z = p.z;
            for (let n = 0; n < 5; n++) {
                let t = letime * (1.0 - (.01 / (n + 1)));
                i.x = p.x + Math.cos(t - i.x) + Math.sin(t + i.y);
                i.y = p.y + Math.sin(t - i.y) + Math.cos(t + i.x);
                i.z = p.y + Math.sin(t - i.x) + Math.cos(t + i.z);
            }

            particle.position.x = factor * i.x;
            particle.position.y = factor * i.y;
            particle.position.z = factor * i.z;

            c.x = BABYLON.Scalar.RangeToPercent(i.x, 0, Math.PI);
            c.y = BABYLON.Scalar.RangeToPercent(i.y, 0, Math.PI);
            c.z = BABYLON.Scalar.RangeToPercent(i.z, 0, Math.PI);

            particle.color.set(c.x, c.y, c.z);
        };


        scene.registerAfterRender(() => {
            pcs.setParticles();
            time += .01;
        });
    }
}

let flow = function() {
    let scene = new BABYLON.Scene(engine);
    scene.clearColor = new BABYLON.Color3(0, 0, 0);
    let light = new BABYLON.DirectionalLight("dir01", new BABYLON.Vector3(0, -0.5, 1.0), scene);
    let camera = new BABYLON.ArcRotateCamera("Camera", -Math.PI / 2, Math.PI / 2.24, 500, new BABYLON.Vector3(0, 0, 0), scene);
    light.position = new BABYLON.Vector3(20, 150, 70);
    camera.attachControl(canvas, true);

    new Waves(scene);

    return scene;
};

let chosenScene = flow();



//localStorage.removeItem('favePocket') //remove instance of fave made by popup if any


engine.runRenderLoop(function() {

    chosenScene.render();

});

// Resize
window.addEventListener("resize", function() {
    engine.resize();
});