<script setup>
const router = useIonRouter();

const newTodo = ref('');
const todoStore = useTodosStore();
const todosList = computed(() => todoStore.todos);
const addTodo = () => {
    if (!newTodo.value) return;
    todoStore.add(newTodo.value);
};

const navigateForFinishs = () => {
    router.push('/finish');
};

const finishTask = (text) => {
    todoStore.finish(text);
};
</script>
<template>
    <ion-page>
        <div class="flex flex-col h-screen w-full">
            <div class="mx-auto text-center">
                <h1>ToDo App</h1>
                <h2 @click="navigateForFinishs">Tarefas Finalizas</h2>
            </div>
            <div class="divider"></div>
            <div class="w-full flex justify-center">
                <label class="w-[80%] input input-bordered rounded-lg flex items-center gap-2">
                    <input v-model="newTodo" type="text" class="grow" placeholder="ToDo" />
                    <svg @click="addTodo()" xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 512 512">
                        <path fill="#333"
                            d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0m149.3 277.3c0 11.8-9.5 21.3-21.3 21.3h-85.3V384c0 11.8-9.5 21.3-21.3 21.3h-42.7c-11.8 0-21.3-9.6-21.3-21.3v-85.3H128c-11.8 0-21.3-9.6-21.3-21.3v-42.7c0-11.8 9.5-21.3 21.3-21.3h85.3V128c0-11.8 9.5-21.3 21.3-21.3h42.7c11.8 0 21.3 9.6 21.3 21.3v85.3H384c11.8 0 21.3 9.6 21.3 21.3z" />
                    </svg>
                </label>
            </div>
            <div class="divider"></div>
            <ul>
                <li v-for="(todo, index) in todosList" :key="todo"
                    class="w-full flex flex-col justify-center items-center mb-5">
                    <div class="card bg-base-100 shadow-xl w-96" v-show="todo.done === false">
                        <div class="card-body rounded-lg">
                            <h2>{{ todo.text }}</h2>
                            <div class="card-actions justify-end">
                                <button class="btn btn-secondary rounded-lg"
                                    @click="finishTask(todo)">Finalizar</button>
                            </div>
                        </div>
                    </div>
                    <div class="card bg-base-500 shadow-xl w-96" v-show="todo.done === true">
                        <div class="card-body bg-secondary rounded-lg">
                            <h2>{{ todo.text }}</h2>
                            <div class="card-actions justify-end">
                                <button class="btn btn-primary rounded-lg" @click="finishTask(todo)"
                                    disabled>Finalizar</button>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </ion-page>
</template>