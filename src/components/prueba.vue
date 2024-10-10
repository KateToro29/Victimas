<template>
	<div class="map-container">
	  <!-- Mapa SVG de Colombia -->
	  <svg
		xmlns=""
		viewBox="0 0 1000 1000"
		@click="handleMapClick"
		style="max-width: 100%; height: auto;">
		
		<!-- Departamento de Antioquia (ejemplo) -->
		<path
		  id="antioquia"
		  d="M100,200 L150,300 L200,250 Z"  
		  fill="#cfe8ff" 
		  stroke="#000"
		  @click="selectRegion('Antioquia')"
		  class="region"
		/>
		
		<!-- Otro departamento (ejemplo) -->
		<path
		  id="cundinamarca"
		  d="M300,400 L350,450 L400,420 Z"
		  fill="#cfe8ff" 
		  stroke="#000"
		  @click="selectRegion('Cundinamarca')"
		  class="region"
		/>
	  </svg>
	</div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const selectedRegion = ref(null);
  
  function selectRegion(region) {
	selectedRegion.value = region;
	console.log('Región seleccionada:', region);
  }
  
  function handleMapClick(event) {
	// Evento click en todo el mapa
	console.log('Mapa clicado en', event);
  }
  </script>
  
  <style scoped>
  .region {
	cursor: pointer;
	transition: fill 0.2s ease;
  }
  
  .region:hover {
	fill: #1e90ff; /* Cambiar color al pasar el mouse */
  }
  </style>
  