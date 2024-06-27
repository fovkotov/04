import * as THREE from 'three'
import { OrbitControls } from 'OrbitControls'
import { GLTFLoader } from 'GLTFLoader'

document.addEventListener('DOMContentLoaded', () => {
  initThree()
  initNavigation()
})

function initThree() {
  //находим html-контейнер
  const model = document.querySelector('.model_01')

  //создаём сцену
  const scene = new THREE.Scene()
  scene.background = new THREE.Color('#e1e1df')
  scene.position.set(0, -30, 0)

  //создаём камеру
  const camera = new THREE.PerspectiveCamera(
    50,
    window.innerWidth / window.innerHeight,
    0.1,
    3000
  )

  camera.position.set(-130, 80, 50)

  //создаём визуализатор-рендерер
  const renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = THREE.PCFSoftShadowMap
  model.appendChild(renderer.domElement)

  //подключаем модель
  {
    const loader = new GLTFLoader()
    loader.load(
      './models/01.gltf',
      (gltf) => {
        scene.add(gltf.scene)
      },
      (error) => {
        console.log('Error:' + error)
      }
    )
  }

  //добавляем свет
  {
    const light = new THREE.AmbientLight(0xeeeeee)
    scene.add(light)
  }
  {
    const light = new THREE.DirectionalLight(0xeeeeee, 1)
    light.position.set(-80, 100, 0)
    light.lookAt(100, 100, 0)

    // const helper = new THREE.DirectionalLightHelper(light, 5)

    scene.add(light)
  }
  {
    const light = new THREE.DirectionalLight(0xeeeeee, 1)
    light.position.set(50, 100, 0)
    light.lookAt(100, 100, 0)

    // const helper = new THREE.DirectionalLightHelper(light, 5)

    scene.add(light)
  }

  //управление моделью
  const controls = new OrbitControls(camera, renderer.domElement)
  // controls.autoRotate = true
  // controls.autoRotateSpeed = 5
  controls.enableDamping = true
  controls.maxDistance = 300
  controls.maxPolarAngle = Math.PI / 2.2

  //анимация модели
  function animate() {
    requestAnimationFrame(animate)
    controls.update()
    renderer.render(scene, camera)
  }
  animate()

  //обновление при ресайзе окна
  window.addEventListener('resize', onWindowResize)

  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()

    renderer.setSize(window.innerWidth, window.innerHeight)
  }
}