
<template>
    <div class="card flex justify-center">
        <Select v-model="selectedCountry" :options="departamentos" optionLabel="name" placeholder="Seleccione el Departamento" class="w-full md:w-56">
            <template #value="slotProps">
                <div v-if="slotProps.value" class="flex items-center">
                    <img :alt="slotProps.value.label" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="`mr-2 flag flag-${slotProps.value.code.toLowerCase()}`" style="width: 18px" />
                    <div>{{ slotProps.value.name }}</div>
                </div>
                <span v-else>
                    {{ slotProps.placeholder }}
                </span>
            </template>
            <template #option="slotProps">
                <div class="flex items-center">
                    <img :alt="slotProps.option.label" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="`mr-2 flag flag-${slotProps.option.code.toLowerCase()}`" style="width: 18px" />
                    <div>{{ slotProps.option.name }}</div>
                </div>
            </template>
            <template #dropdownicon>
                <i class="pi pi-map"></i>
            </template>
            <template #header>
                <div class="font-medium p-3">Available departamentos</div>
            </template>
            <template #footer>
                <div class="p-3">
                    <Button label="Add New" fluid severity="secondary" text size="small" icon="pi pi-plus"></Button>
                </div>
            </template>
        </Select>
    </div>
</template>

<script setup>
import { ref } from "vue";

const selectedCountry = ref();
const departamentos = ref([
    { name: 'Amazonas', code: '91', flag:'victimas/src/assets/webp/amazonas.webp' },
    { name: 'Antioquia', code: '05', flag:'' },
    { name: 'Arauca', code: '81', flag:'' },
    { name: 'Atlantico', code: '08', flag:'' },
    { name: 'Bogota D.C', code: '11' },
    { name: 'Bolivar', code: '13' },
    { name: 'Boyaca', code: '15' },
    { name: 'Caldas', code: '17' },
    { name: 'Caqueta ', code: '18' },
    { name: 'Casanare', code: '85' },
    { name: 'Cauca', code: '19' },
    { name: 'Cesar', code: '20' },
    { name: 'Choco', code: '27' },
    { name: 'Cundinamarca ', code: '25' },
    { name: 'Cordoba ', code: '23' },
    { name: 'Guainia ', code: '94' },
    { name: 'Guaviare ', code: '95' },
    { name: 'Huila ', code: '41' },
    { name: 'La Guajira ', code: '44' },
    { name: 'Magdalena ', code: '47' },
    { name: 'Meta ', code: '50' },
    { name: 'Nariño ', code: '52' },
    { name: 'Norte de Santander ', code: '54' },
    { name: 'Putumayo ', code: '86' },
    { name: 'Quindio ', code: '63' },
    { name: 'Risaralda ', code: '66' },
    { name: 'Archipièlago de San Andres,Providencia y Santa catalina ', code: '88' },
    { name: 'Santander ', code: '68' },
    { name: 'Sucre ', code: '70' },
    { name: 'Tolima ', code: '73' },
    { name: 'Valle del Cauca ', code: '76' },
    { name: 'Vaupes ', code: '97' },
    { name: 'Vichada ', code: '99' },
    


]);
</script>
