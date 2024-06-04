<script>

import { BASEDATA, baseReload } from './baseManager'

const URL1 = () => `${BASEDATA}/floors`;

export default {
    name: 'Floor', 
    emits: ['floor'],
    mounted() { this.reload() },
    data: function() {
          return { 
                heading: "Floors",
                items: [],
                selected: { id: 0 },
                hide: true
              }
          },
    methods: {

        selectItem(item) { 
            this.selected = item
            this.$emit('floor',item)  
            },

        reload() {
            baseReload(URL1()).then(
                (resp) => this.items=resp 
                ).catch(result => console.log(result) )
        },
    },
}
</script>
  
<template>
    <div>
       <div class="d-grid gap-2">
            <a  @click="hide = !hide">
                <i class="blue bi-folder-fill"></i>
                {{ heading }}</a>
        </div>
        <div v-if="!hide" v-for="item of items">
            <a @click="selectItem(item)" >
            <span :class="{ 'red' : selected.id === item.id}">
                <i class="blue bi-building"></i>
                {{ item.name }}
            </span> 

            </a>
        </div>
    </div>
</template>