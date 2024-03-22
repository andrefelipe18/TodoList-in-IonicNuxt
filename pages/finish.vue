<script setup>
const router = useIonRouter();

const todoStore = useTodosStore();
const todosList = computed(() => todoStore.todos);

const navigateForIndex = () => {
    router.push('/');
};
</script>
<template>
    <ion-page>
        <div class="flex flex-col h-screen w-full">
            <div class="mx-auto text-center">
                <h1>Tarefas Finalizas</h1>
                <h2 @click="navigateForIndex" class="bg-gray-100 p-2 rounded-lg">Voltar as tarefas</h2>
            </div>
            <div class="divider"></div>
            <ul>
                <li v-for="(todo, index) in todosList" :key="todo"
                    class="w-full flex flex-col justify-center items-center">
                    <div v-show="todo.done === true" class="card bg-base-100 shadow-xl w-96 mb-5">
                        <div class="card-body rounded-lg">
                            <h2>{{ todo.text }}</h2>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </ion-page>
</template>