<!-- FondoComponent.vue -->
<template>
	<div class="flex h-screen w-full">
	  <div class="w-1/2 flex justify-start">
		<img class="w-full h-full object-cover" src="../assets/columna.svg" alt="">
	  </div>
	  <div class="w-1/2 flex justify-end">
		<img class="w-full h-full object-cover" src="../assets/Vector 9.svg" alt="">
	  </div>
	  <slot />
	</div>
  </template>

<style>
.img {
	z-index: 0;
}
</style>