angular.module('luna').directive('moon', function() {
  return {
    restrict: 'E',
    link: function(scope, elem, attrs) {
      var scene = new THREE.Scene();
      var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 20;

      var renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.body.appendChild(renderer.domElement);

      var geometry = new THREE.SphereGeometry(10, 512, 512);
      var texture = new THREE.ImageUtils.loadTexture('images/moon.jpg');
      var bump = new THREE.ImageUtils.loadTexture('images/moon_bump.jpg');
      var material = new THREE.MeshPhongMaterial({
        map: texture,
        bumpMap: bump,
        shininess: 1
      });

      var sphere = new THREE.Mesh(geometry, material);
      sphere.rotation.y = Math.PI * 3 / 2;
      scene.add(sphere);

      var angle = 0;
      var directionalLight = new THREE.DirectionalLight(0xffffff, 1);
      directionalLight.position.set(20, 0, 20);
      scene.add(directionalLight);

      var render = function() {
        requestAnimationFrame(render);
        angle += 0.01;
        directionalLight.position.x = 10 * Math.sin(angle);
        directionalLight.position.z = 10 * Math.cos(angle);
        renderer.render(scene, camera);
      };

      render();
    }
  };
});
