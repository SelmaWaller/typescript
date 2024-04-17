<script lang="ts">
import { ref } from "vue";
import { useTaskStore } from "~/src/stores/TaskStore";
export default {
  setup() {
    const taskStore = useTaskStore();
    const newTask = ref("");

    const handleSubmit = () => {
      if (newTask.value) {
        taskStore.addTask({
          title: newTask.value,
          isFav: false,
          id: Math.floor(Math.random() * 10000),
        });
        newTask.value = "";
      }
    };
    return { handleSubmit, newTask };
  },
};
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" placeholder="New task..." v-model="newTask" />
    <button>Add</button>
  </form>
</template>

<style>
form button {
  background: #ffd859;
  border: 0;
  padding: 10px;
  font-family: "Poppins", sans-serif;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1em;
}
form input {
  border: 0;
  padding: 10px;
  border-radius: 6px;
  color: #555;
  font-size: 1em;
}
</style>
