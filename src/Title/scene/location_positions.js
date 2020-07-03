import * as THREE from 'three'; 
const LocationPositons = {
    'station': {
        'start': {
            'position': new THREE.Vector3(3, 17, 40), 
            'rotation': new THREE.Euler(0, 4.7, 0)
        },
        'end': {
            'position': new THREE.Vector3(0, 17, 40), 
            'rotation': new THREE.Euler(0, 4.7, 0)
        }
    }, 
    'crossing': {
        'start': {
            'position': new THREE.Vector3(-3, 17, -10), 
            'rotation': new THREE.Euler(0, 4, 0)
        },
        'end': {
            'position': new THREE.Vector3(-3, 17, 0), 
            'rotation': new THREE.Euler(0, 4, 0)
        }
    }, 
    'overpass': {
        'start': {
            'position': new THREE.Vector3(-9, 6, -23.3), 
            'rotation': new THREE.Euler(0, 3.5, 0)
        },
        'end': {
            'position': new THREE.Vector3(-4, 6, -23.3), 
            'rotation': new THREE.Euler(0, 3.5, 0)
        }
    }
}; 

export default LocationPositons; 