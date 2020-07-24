/**
 * 获取配置
 */
var getOptions = function () {
   var canvas = document.getElementById("renderCanvas");
   var engine = new BABYLON.Engine(canvas, true, { preserveDrawingBuffer: true, stencil: true });
   engine.setHardwareScalingLevel(0.3);
   return {
      canvas,
      engine,
      radius: 10 // 圆柱半径
   };
};

/**
 * 创建场景
 */
var createScene = function (engine, canvas, radius) {
   var scene = new BABYLON.Scene(engine);
   scene.clearColor = new BABYLON.Color3(1, 1, 1);
   var camera = new BABYLON.ArcRotateCamera("Camera", 0, Math.PI / 2, 25, new BABYLON.Vector3(0, 0, 0), scene);
   camera.lowerBetaLimit = Math.PI / 2;
   camera.upperBetaLimit = Math.PI / 2;
    scene.activeCamera.panningSensibility = 0;
   camera.lowerRadiusLimit = 25;
   camera.upperRadiusLimit = 25;
   camera.useAutoRotationBehavior = true;
   camera.autoRotationBehavior.idleRotationSpeed = -0.05;
   camera.attachControl(canvas, true);

   var light0 = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(1, 1, 0), scene);
   light0.diffuse = new BABYLON.Color3(1, 1, 1);
   light0.specular = new BABYLON.Color3(1, 1, 1);
   light0.groundColor = new BABYLON.Color3(1, 1, 1);
   buildBg(scene, radius);
   var cards = getCardData();
   buildCard(scene, radius, cards);
   scene.onPointerDown = function () {
      var pickResult = scene.pick(this.pointerX, this.pointerY);
      if (pickResult.hit) {
         if (pickResult.pickedMesh.material.diffuseTexture == cards[pickResult.pickedMesh.name].atexture) {
            pickResult.pickedMesh.material.diffuseTexture = cards[pickResult.pickedMesh.name].texture;
         } else {
            pickResult.pickedMesh.material.diffuseTexture = cards[pickResult.pickedMesh.name].atexture;
         }
      }
   }
   return scene;
};

/**
 * 构建纹理
 */
var buildTexture = function (scene, url) {
   var texture = new BABYLON.Texture(url, scene);
   texture.vScale = -1;
   texture.hasAlpha = true;
   return texture;
};

/**
 * 构建面片path
 */
var buildPath = function (radius, iCardTexture, data) {
   //计算周长
   var length = radius * 2 * Math.PI;
   var { width, height } = iCardTexture;
   var path1 = [];
   var path2 = [];
   var pi2 = 2 * Math.PI;
   var angle = parseFloat((data.angle + width / 90 / length * pi2).toFixed(3)); // 该卡片所占用扇形的弧度
   for (var i = data.angle; i <= angle; i += 0.001) {
      path1.push(new BABYLON.Vector3(Math.cos(i) * radius, height / 150 + data.y, Math.sin(i) * radius));
      path2.push(new BABYLON.Vector3(Math.cos(i) * radius, -height / 150 + data.y, Math.sin(i) * radius));
   }
   return [path1, path2];
};

/**
 * 构建卡片
 */
var buildCard = function (scene, radius, cards) {
   for (var index in cards) {
      cards[index].texture = buildTexture(scene, cards[index].url);
      cards[index].atexture = buildTexture(scene, cards[index].aurl);
      var iCardTexture = cards[index].texture._texture;
      var i = index;
      iCardTexture.onLoadedObservable.addOnce(function (ii, iTexture) {
         var ribbon = BABYLON.Mesh.CreateRibbon(ii, buildPath(radius, iTexture, cards[ii]), false, false, 0, scene, false, BABYLON.Mesh.DOUBLESIDE);
         ribbon.isPickable = true;
         ribbon.material = new BABYLON.StandardMaterial(ii, scene);
         ribbon.material.diffuseTexture = cards[ii].texture;
      }.bind(this, i, iCardTexture));
   }
};

var buildBg = function (scene, radius) {
   var radius1 = radius - 0.2;
   var texture = buildTexture(scene, "img/bg.png");
   var path1 = [];
   var path2 = [];
   var pi2 = 2 * Math.PI;
   for (var i = 0; i <= parseFloat(pi2.toFixed(3)); i += 0.001) {
      path1.push(new BABYLON.Vector3(Math.cos(i) * radius1, 7.5, Math.sin(i) * radius1));
      path2.push(new BABYLON.Vector3(Math.cos(i) * radius1, -7.5, Math.sin(i) * radius1));
   }
   var ribbon = BABYLON.Mesh.CreateRibbon("ribbon", [path1, path2], false, false, 0, scene, false, BABYLON.Mesh.FRONTSIDE);
   ribbon.isPickable = false;
   ribbon.material = new BABYLON.StandardMaterial("material", scene);
   ribbon.alpha = 0.5
   ribbon.material.diffuseTexture = texture;
};

/**
 * main方法
 */
(function () {
   var { engine, canvas, radius } = getOptions();
   var scene = createScene(engine, canvas, radius);
   engine.runRenderLoop(function () {
      scene.render();
   });
   window.addEventListener("resize", function () {
      engine.resize();
   });
})();




