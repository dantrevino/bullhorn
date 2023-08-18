<template>
  <div class="drawer drawer-end">
    <div class="w-full p-6 mt-6 shadow-xl card bg-base-100">
      <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
      <div class="flex flex-col drawer-content">
        <!-- Navbar -->
        <div class="w-full navbar bg-base-300">
          <div class="flex-none lg:hidden">
            <label for="my-drawer-3" class="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block w-6 h-6 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div class="flex-1 px-2 mx-2">{{ title }}</div>
          <div class="flex-none hidden lg:block">
            <label for="my-drawer-3" class="drawer-button btn btn-primary"
              >Borrow Now</label
            >
          </div>
        </div>

      </div>
      <div class="drawer-side">
        <label for="my-drawer-3" class="drawer-overlay"></label>
        <ul
          class="z-50 h-full p-4 opacity-100 menu bg-base-200"
          style="width: 50%"
        >
          <!-- Sidebar content here -->
          <div class="w-full max-w-xs form-control">
            <label class="label">
              <span class="label-text">Bitcoin Collateral to lock</span>
            </label>
            <input
              type="text"
              v-model="btcCollateral"
              placeholder="ex. 1"
              class="w-full max-w-xs input input-bordered"
            />
          </div>

          <div class="w-full max-w-xs mt-2 form-control">
            <label class="label">
              <span class="label-text">Current USDC Value: </span>{{  currentUSDCValue }}
            </label>
          </div>

          <div class="mt-2">
            <input
              type="range"
              v-model="duration"
              min="1"
              max="12"
              class="range"
              step="1"
            />
            <div class="flex justify-between w-full px-2 text-xs">
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <span>5</span>
              <span>6</span>
              <span>7</span>
              <span>8</span>
              <span>9</span>
              <span>10</span>
              <span>11</span>
              <span>12</span>
            </div>
          
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { formattedCurrency } from '../utils';

const props = defineProps({
  title: String,
});

const btcCollateral = ref(0);
const duration = ref(1);

const currentUSDCValue = computed(() => {
  return formattedCurrency(30000 * btcCollateral.value) || 0;
})

const durationInDays = computed(() => {
  return 30 * duration.value;
})

</script>

<style scoped></style>
