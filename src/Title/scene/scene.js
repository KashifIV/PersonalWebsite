import React, {Component} from 'react'; 
import * as THREE from 'three'; 
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import {Easing, Tween, autoPlay} from 'es6-tween'; 
import overpass from '../../models/Overpass.glb'
import style from './scene.module.css'; 

class Scene extends Component{
    constructor(props){
        super(props);

        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
        this.animate = this.animate.bind(this);
    }
    componentDidMount() {
        autoPlay(true); 
        const width = window.innerWidth; 
        const height = window.innerHeight; 
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
          75,
          width / height,
          0.1,
          1000
        );

        //Load 3D model 
        var loader = new GLTFLoader(); 
        loader.load(overpass, function(gltf){
            scene.add(gltf.scene); 
        }, undefined, (error)  => console.log(error)); 
        
        var light = new THREE.PointLight( 0x5887C7, 1, 10000 );
        light.position.set( 200, 20, 50 );
        scene.add( light );

        var light2 = new THREE.PointLight( 0xfffff, 0.2, 10000 );
        light2.position.set( 100, 4, 0 );
        scene.add( light2 );

        var light3 = new THREE.PointLight( 0xC75E57, 1, 10000 );
        light3.position.set( -600, 30, 90 );
        scene.add( light3 );

        var light4 = new THREE.PointLight( 0xC75E57, 2, 3000 );
        light4.position.set( -600, 30, -90 );
        scene.add( light4 );


        

        var ambientLight = new THREE.AmbientLight(0xffffff, 2); // soft white light
        scene.add( ambientLight );
        
        const renderer = new THREE.WebGLRenderer({ antialias: true });
    
        camera.position.z = -23.3;
        camera.position.x = -12;
        camera.position.y = 17; 
        camera.rotateY(3.5); 
        renderer.setSize(width, height);
        renderer.setClearColor(0x5DC8DE); 

        this.scene = scene;
        this.camera = camera;
        this.renderer = renderer;

        var targetCameraPosition = new THREE.Vector3(-9, 6, -23.3); 
        var targetRotation = 2; 
        var cameraTween = new Tween(new THREE.Vector3().copy(camera.position))
            .to(targetCameraPosition, 3000)
            .on('update', (vec) => 
            {
                this.camera.position.copy(vec); 
                this.animate();
            })
            .easing(Easing.Exponential)
            .start(); 
    
        this.mount.appendChild(this.renderer.domElement);
        this.count = 1.0; 
        // this.start();
      }
    
      componentWillUnmount() {
        this.stop();
        this.mount.removeChild(this.renderer.domElement);
      }
    
      start() {
        if (!this.frameId) {
          this.frameId = requestAnimationFrame(this.animate);
        }
      }
    
      stop() {
        cancelAnimationFrame(this.frameId);
      }
    
      animate() {
        this.renderScene();
        // this.frameId = window.requestAnimationFrame(this.animate);
        
        // if (this.camera.position.x < -5){
        //     this.camera.position.x += 0.2/this.count;
        //     if (this.count < 50 && this.camera.position.x < -6){
        //         this.count+= 1.0;  
        //     }
        // }
      }
    
      renderScene() {
        this.renderer.render(this.scene, this.camera);
      }
    
      render() {
        return (
          <div
            className={style.background}
            ref={(mount) => { this.mount = mount }}
          />
        );
      }
}

export default Scene; 