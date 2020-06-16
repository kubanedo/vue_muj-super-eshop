<template>
  <div>
    <strong>Please, choose transition: </strong>
    <select v-model="transition">
      <option value="slide">Slide</option>
      <option value="fade">Fade</option>
      <option value="flip">Flip</option>
      <option value="jump">Jump</option>
      <option value="scale-up">Scale Up</option>
      <option value="scale-down">Scale Down</option>
    </select>

    <div class="switch-panel">
      <button @click="showBox = 'box1'">Show box 1</button>
      <button @click="showBox = 'box2'">Show box 2</button>
      <button @click="showBox = 'box3'">Show box 3</button>
    </div>
    <transition :name="transition" mode="out-in" appear>
      <div class="box box1" v-if="showBox=='box1'" key="box1">Box 1</div>
      <div class="box box2" v-if="showBox=='box2'" key="box2">Box 2</div>
      <div class="box box3" v-if="showBox=='box3'" key="box3">Box 3</div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Transitions",
  data() {
    return {
      showBox: "box1",
      transition: "slide"
    };
  },
  created () {
    console.log('created')
  },
  mounted () {
    console.log('mounted')
  },
  updated () {
    console.log('updated')
  },
  destroyed () {
    console.log('destroyed')
  }  
};
</script>

<style lang="scss" scoped>
.switch-panel {
  margin: 15px 0;
}
.box {
  width: 500px;
  height: 200px;
  padding: 20px;
  color: white;
}
.box1,
.box4 {
  background: red;
}
.box2,
.box5 {
  background: green;
}
.box3,
.box6 {
  background: blue;
}

/* Transitions */
// flip
.flip-enter-active,
.flip-leave-active {
  transition: transform 1s;
  transform: rotateY(0);
}
.flip-enter,
.flip-leave-active {
  transform: rotateY(90deg);
  visibility: visible;
}
//Slide
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s;
  transform: translate3d(0, 0, 0);
}
.slide-enter,
.slide-leave-active {
  transform: translate3d(-500%, 0, 0);
  visibility: visible;
}
//Fade
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
//Jump
.jump-enter-active {
  animation: jump 0.2s;
}

.jump-leave-active {
  animation: jump 0.2s reverse;
}

@keyframes jump {
  0% {
    transform: translateY(10px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}
// ScaleUp
.scale-up-enter-active {
  animation: scaleUp 0.2s;
}

.scale-up-leave-active {
  animation: scaleUp 0.2s reverse;
}

@keyframes scaleUp {
  0% {
    transform: scale3D(1, 1, 1);
  }
  50% {
    transform: scale3D(1.2, 1.2, 1.2);
  }
  100% {
    transform: scale3D(1, 1, 1);
  }
}
//ScaleDown
.scale-down-enter-active {
  animation: scaleDown 0.2s;
}

.scale-down-leave-active {
  animation: scaleDown 0.2s reverse;
}

@keyframes scaleDown {
  0% {
    transform: scale3D(1.2, 1.2, 1.2);
  }
  50% {
    transform: scale3D(0.8, 0.8, 0.8);
  }
  100% {
    transform: scale3D(1, 1, 1);
  }
}
</style>