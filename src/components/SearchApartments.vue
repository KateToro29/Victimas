<template>
    <div class="flex justify-between items-start ml-10">
        <!-- Contenedor del Select -->
        <div class="w-[280px] "> 
            <Select v-model="selectedCountry" :options="departamentos" :style="{ borderColor: '#7A1F7E' }" optionLabel="name"
                placeholder="Seleccione el Departamento"
                class="w-full mt-4 mb-4 p-1 text-left  placeholder-customPurple-700" @change="updateSelectedInfo">
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
                <template #option="slotProps">
                    <div class="flex items-center">
                        <img :alt="slotProps.name" :src="slotProps.option.flagUrl"
                            :class="`mr-2 flag flag-${slotProps.option.code.toLowerCase()}`"
                            style="inline-size: 20px" />
                        <p>{{ slotProps.option.name }}</p>
                    </div>
                </template>
                <template #dropdownicon>
                    <i class="pi pi-map"></i>
                </template>
            </Select>
        </div>

        <!-- Contenedor de la Tarjeta con transición -->
        <transition name="slide-right" mode="out-in">
            <div v-if="selectedInfo" :key="selectedCountry?.code" class="w-[380px] ml-4">
                <!-- Ancho fijo de 400px para la tarjeta -->
                <div class="card-container bg-blue-500 rounded-lg shadow-lg pl-10 flex flex-col items-end">
                    <!-- Ajuste aquí -->
                    <div class="flex justify-between rounded-md mt-6 w-full bg-titleBackground mb-2 items-center"> <!-- Ajuste aquí -->
                        <img :src="selectedInfo.flagUrl" :alt="selectedInfo.name" class="inline-block pl-3 bg-customPurple  mr-4"
                            style="width: 60px; height: auto;" />
                        <p class="font-semibold text-customPurple text-bold rounded p-2">{{ selectedInfo.name }}</p>
                    </div>
                    <p class="text-textBackground text-bold mb-6  pr-4 text-center w-full">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos obcaecati laudantium aut culpa doloribus ipsum, quae tenetur voluptate, ducimus, tempora molestiae veritatis voluptatibus voluptatum maxime quibusdam quas dolore ea amet..</p>
                    <!-- Alineación centrada -->
                </div>
                
            </div>
        </transition>
    </div>
</template>

<style scoped>
/* Estilo para la transición deslizante desde la derecha */
.slide-right-enter-active,
.slide-right-leave-active {
    transition: transform 0.5s ease;
}

.slide-right-enter {
    transform: translateX(100%);
    /* Desde la derecha */
}

.slide-right-leave-to {
    transform: translateX(100%);
    /* Hacia la derecha */
}
</style>



<script setup>
import { ref } from "vue";
import Select from "primevue/select";

const selectedCountry = ref();
const selectedInfo = ref(null);
const departamentos = ref([
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
]);

// Función para actualizar la información seleccionada
function updateSelectedInfo() {
    const selected = departamentos.value.find(dep => dep.code === selectedCountry.value?.code);
    selectedInfo.value = selected ? selected : null;
}
</script>

<style scoped>
/* Estilos para el contenedor del Select */
.select-container {
    max-inline-size: 305px;
    display: flex;
    block-size: 46px;
    border: 1px solid #7A1F7E;
    padding: 0.5rem;
    color: #7A1F7E !important;
    border-radius: 8px;

}

/* Estilos de la tarjeta */
.card-container {
    max-inline-size: 500px;
    background-color: #D9D9D9;
    /* Fondo  */
    border: 1px solid #ccc;
    border-radius: 10px;
    /* Bordes redondeados */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    /* Sombra */
}

/* Transición personalizada de deslizamiento desde el lado derecho */
.slide-right-enter-active,
.slide-right-leave-active {
    transition: all 0.5s ease;
}

.slide-right-enter-from {
    opacity: 0;
    transform: translateX(100%);
    /* Comienza desde el lado derecho */
}

.slide-right-leave-to {
    opacity: 0;
    transform: translateX(-100%);
    /* Sale hacia el lado izquierdo */
}
</style>
