<template>
	<div class="card flex justify-center">
		<!-- Componente Select para seleccionar un departamento -->
		<Select v-model="selectedCountry" :options="departamentos" optionLabel="name"
			placeholder="Seleccione el Departamento" class="w-full md:w-56">
			<!-- Valor seleccionado -->
			<template #value="slotProps">
				<div v-if="slotProps.value" class="flex gap-2 items-center">
					<img :alt="slotProps.value.name" :src="slotProps.value.flagUrl"
						:class="`flag flag-${slotProps.value.code.toLowerCase()}`" style="inline-size: 20px" />
					<div>{{ slotProps.value.name }}</div>
				</div>
				<span v-else>
					{{ slotProps.placeholder }}
				</span>
			</template>
			<!-- Opciones en el dropdown -->
			<template #option="slotProps">
				<div class="flex items-center" @click="mostrarTarjeta(slotProps.option)">
					<img :alt="slotProps.option.name" :src="slotProps.option.flagUrl"
						:class="`mr-2 flag flag-${slotProps.option.code.toLowerCase()}`" style="inline-size: 20px" />
					<p>{{ slotProps.option.name }}</p>
				</div>
			</template>
			<template #dropdownicon>
				<i class="pi pi-map"></i>
			</template>
		</Select>

		<!-- Tarjeta que se muestra al seleccionar una región -->
		<div v-if="tarjetaVisible" class="mt-4 p-4 border border-gray-300 rounded-lg shadow-lg w-full md:w-56">
			<h3 class="text-lg font-bold mb-2">{{ selectedCountry.name }}</h3>
			<img :alt="selectedCountry.name" :src="selectedCountry.flagUrl" class="w-20 h-auto mb-2" />
			<p>Detalles de la región seleccionada.</p>
		</div>
	</div>
</template>

<script>
import { ref } from "vue";
import Select from "primevue/select";


export default {
	data() {
		return {
			selectedCountry: null, // Controla el país o departamento seleccionado
			tarjetaVisible: false,  // Controla si la tarjeta es visible o no
			departamentos: [
				// Departamentos de Colombia
				{ name: 'Amazonas', code: '91', flagUrl: 'src/assets/webp/amazonas.webp' },
				{ name: 'Antioquia', code: '05', flagUrl: 'src/assets/webp/antioquia.webp' },
				{ name: 'Arauca', code: '81', flagUrl: 'src/assets/webp/arauca-departamento.webp' },
				{ name: 'Atlantico', code: '08', flagUrl: 'src/assets/webp/atlantico.webp' },
				{ name: 'Bolivar', code: '13', flagUrl: 'src/assets/webp/bolivar.webp' },
				{ name: 'Boyaca', code: '15', flagUrl: 'src/assets/webp/boyaca.webp' },
				{ name: 'Caldas', code: '17', flagUrl: 'src/assets/webp/caldas.webp' },
				{ name: 'Caqueta ', code: '18', flagUrl: 'src/assets/webp/caqueta.webp' },
				{ name: 'Casanare', code: '85', flagUrl: 'src/assets/webp/casanare.webp' },
				{ name: 'Cauca', code: '19', flagUrl: 'src/assets/webp/cauca.webp' },
				{ name: 'Cesar', code: '20', flagUrl: 'src/assets/webp/cesar.webp' },
				{ name: 'Choco', code: '27', flagUrl: 'src/assets/webp/choco.webp' },
				{ name: 'Cundinamarca ', code: '25', flagUrl: 'src/assets/webp/cundinamarca.webp' },
				{ name: 'Cordoba ', code: '23', flagUrl: 'src/assets/webp/cordoba.webp' },
				{ name: 'Guainia ', code: '94', flagUrl: 'src/assets/webp/guainia.webp' },
				{ name: 'Guaviare ', code: '95', flagUrl: 'src/assets/webp/guaviare.webp' },
				{ name: 'Huila ', code: '41', flagUrl: 'src/assets/webp/huila.webp' },
				{ name: 'La Guajira ', code: '44', flagUrl: 'src/assets/webp/guajira.webp' },
				{ name: 'Magdalena ', code: '47', flagUrl: 'src/assets/webp/magdalena.webp' },
				{ name: 'Meta ', code: '50', flagUrl: 'src/assets/webp/meta.webp' },
				{ name: 'Nariño ', code: '52', flagUrl: 'src/assets/webp/nariño.webp' },
				{ name: 'Norte de Santander ', code: '54', flagUrl: 'src/assets/webp/norte-de-santander.webp' },
				{ name: 'Putumayo ', code: '86', flagUrl: 'src/assets/webp/putumayo.webp' },
				{ name: 'Quindio ', code: '63', flagUrl: 'src/assets/webp/quindio.webp' },
				{ name: 'Risaralda ', code: '66', flagUrl: 'src/assets/webp/risaralda.webp' },
				{ name: 'Archipièlago de San Andres,Providencia y Santa catalina ', code: '88', flagUrl: 'src/assets/webp/san-andrc3a9s-y-providencia.webp' },
				{ name: 'Santander ', code: '68', flagUrl: 'src/assets/webp/santander.webp' },
				{ name: 'Sucre ', code: '70', flagUrl: 'src/assets/webp/sucre.webp' },
				{ name: 'Tolima ', code: '73', flagUrl: 'src/assets/webp/tolima.webp' },
				{ name: 'Valle del Cauca ', code: '76', flagUrl: 'src/assets/webp/valle-del-cauca.webp' },
				{ name: 'Vaupes ', code: '97', flagUrl: 'src/assets/webp/vaupes.webp' },
				{ name: 'Vichada ', code: '99', flagUrl: 'src/assets/webp/vichada.webp' },
				// Agrega más departamentos según sea necesario
			],
		};
	},
	methods: {
		// Método para mostrar la tarjeta con la región seleccionada
		mostrarTarjeta(departamento) {
			this.selectedCountry = departamento;
			this.tarjetaVisible = true;
		}
	}
};
</script>

<style scoped>
.flag {
	display: inline-block;
	border-radius: 3px;
}
</style>