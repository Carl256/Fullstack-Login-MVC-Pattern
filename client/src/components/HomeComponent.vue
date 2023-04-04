<template>
  <div class="home">
    <h1 class="home__title">A Revolution in Learning</h1>
    <h2 class="home__subtitle">The Evolution of You</h2>
    <div class="home__carousel">
      <div class="home__slide">
        <img src="https://images.unsplash.com/photo-1553729784-e91953dec042?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29uJTIwcmVhZGluZ3xlbnwwfHwwfHw%3D&w=1000&q=80" alt="Slide 1" />
      </div>
      <div class="home__slide">
        <img src="image2.jpg" alt="Slide 2" />
      </div>
      <div class="home__slide">
        <img src="image3.jpg" alt="Slide 3" />
      </div>
      <div class="home__dots">
        <button class="home__dot home__dot--active"></button>
        <button class="home__dot"></button>
        <button class="home__dot"></button>
      </div>
      <div class="home__buttons">
        <button class="home__button home__button--signin">Sign In</button>
        <button class="home__button home__button--join">Join Now</button>
      </div>
    </div>
  </div>
</template>
  
  <script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeComponent',

  data() {
    return {
      email: '',
    };
  },

});
</script>


  <style lang="scss" scoped>
.home {
    position: relative;
    background-image: url(bgImage);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100vh;

//   &__title {
//     font-size: 3rem;
//     font-weight: bold;
//     margin-bottom: 0.5rem;
//   }

//   &__subtitle {
//     font-size: 2rem;
//     margin-bottom: 2rem;
//   }

//   &__carousel {
//     position: relative;
//     width: 100%;
//     height: 300px;
//     overflow: hidden;

//     &__slide {
//       position: absolute;
//       top: 0;
//       left: 0;
//       width: 100%;
//       height: 100%;
//       opacity: 0;
//       transition: opacity 0.5s ease-in-out;

//       &--active {
//         opacity: 1;
//       }
//     }

//     &__dots {
//       position: absolute;
//       bottom: 20px;
//       left: 50%;
//       transform: translateX(-50%);
//       display: flex;
//       justify-content: center;
//       align-items: center;

//       &__dot {
//         width: 12px;
//         height: 12px;
//         border-radius: 50%;
//         margin: 0 8px;
//         border: none;
//         outline: none;
//         background-color:  #f2f2f2;

//         &--active {
//           background-color: #007bff;
//         }
//       }
//     }

//     &__buttons {
//       position: absolute;
//       bottom: 0;
//       left: 50%;
//       transform: translateX(-50%);
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       margin-top: 1rem;

//       &__button {
//         padding: 0.5rem 1rem;
//         border: none;
//         border-radius: 0.25rem;
//         color: #fff;
//         font-size: 1.2rem;
//         font-weight: bold;
//         margin: 0 1rem;
//         cursor: pointer;
//         transition: background-color 0.3s ease-in-out;

//         &--signin {
//           background-color: #ccc;;
//         }

//         &--join {
//           background-color: #007bff;
//         }

//         &:hover {
//           background-color: #707070;
//         }

//         &:active {
//           background-color: #333333;
//         }
//       }
//     }
//   }
}
</style>


           
  