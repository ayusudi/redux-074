// panggil package 
// script // => cara cdn
// import {createStore} from 'redux' // State Management
// const Redux = require("redux") // State Management 
const { createStore } = Redux

const initialState = { // 1. Initial State 
  counter: 2
}

const counter = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { counter: state.counter + 1 }
    case "DECREMENT":
      return { counter: state.counter - 1 }
    default:
      return state
  }
}

let store = createStore(counter)

store.subscribe(() => console.log(store.getState()))

let el = document.getElementById("value")

const render = () => {
  el.innerHTML = store.getState().counter
}

render()
store.subscribe(render)

let tambah = document.getElementById("tambah")
let kurang = document.getElementById("kurang")

tambah.addEventListener('click', () => {
  store.dispatch({ type: "INCREMENT" })
})

kurang.addEventListener('click', () => {
  store.dispatch({ type: "DECREMENT" })
})