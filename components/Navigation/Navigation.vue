<script setup lang="ts">
const { user, logout } = useAuth();

const props = defineProps({
    clickaction: {
        type: Function,
    }
});


const open = ref(false);
</script>

<template>

    <q-header elevated>
        <q-toolbar>
            <q-btn
                    flat
                    dense
                    round
                    @click="clickaction"
                    aria-label="Menu"
                    icon="menu"
            />

            <q-toolbar-title>
                Radius Medo
            </q-toolbar-title>


            <q-btn-dropdown  icon="person" stretch flat :label="user.name">
                <q-list>
                    <q-item-label header>Mon Compte</q-item-label>
                    <q-item  clickable v-close-popup >
                        <q-item-section>
                            <q-item-label>Déconnecter</q-item-label>

                        </q-item-section>
                        <q-item-section avatar>
                            <q-avatar icon="logout" color="secondary" text-color="white" />
                        </q-item-section>

                    </q-item>
<!--                    <q-separator inset spaced />-->
<!--                    <q-item-label header>Files</q-item-label>-->
<!--                    <q-item v-for="n in 3" :key="`y.${n}`" clickable v-close-popup tabindex="0">-->
<!--                        <q-item-section avatar>-->
<!--                            <q-avatar icon="assignment" color="primary" text-color="white" />-->
<!--                        </q-item-section>-->
<!--                        <q-item-section>-->
<!--                            <q-item-label>Vacation</q-item-label>-->
<!--                            <q-item-label caption>February 22, 2016</q-item-label>-->
<!--                        </q-item-section>-->
<!--                        <q-item-section side>-->
<!--                            <q-icon name="info" />-->
<!--                        </q-item-section>-->
<!--                    </q-item>-->
                </q-list>
            </q-btn-dropdown>




        </q-toolbar>
    </q-header>


</template>
