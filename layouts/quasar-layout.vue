<template>
    <q-layout view="lHh Lpr lFf" class="bg-white">
<!--        <q-header elevated>-->
            <Navigation :clickaction="toggleLeftDrawer"/>

        <q-drawer
                v-model="leftDrawerOpen"
                show-if-above
                bordered
                class="bg-grey-2"
        >
            <NavigationDrawer :left-drawer-open="leftDrawerOpen"></NavigationDrawer>
        </q-drawer>

        <q-page-container>

            <slot></slot>
        </q-page-container>
    </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {
    name: 'quasar-layout',


    setup () {
        const leftDrawerOpen = ref(false)

        function toggleLeftDrawer () {
            leftDrawerOpen.value = !leftDrawerOpen.value
        }

        return {
            leftDrawerOpen,
            toggleLeftDrawer
        }
    }
}
</script>