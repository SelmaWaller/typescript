<script lang="ts">
import { useTaskStore } from "~/src/stores/TaskStore";

export default {
  props: ["task"],
  setup() {
    const taskStore = useTaskStore();
    return { taskStore };
  },
};
</script>

<template>
  <div class="task">
    <h3>{{ task.title }}</h3>
    <div class="icons">
      <i class="material-icons" @click="taskStore.deleteTask(task.id)"
        >delete</i
      >
      <i
        class="material-icons"
        :class="{ active: task.isFav }"
        @click="taskStore.toggleFav(task.id)"
        >favorite</i
      >
    </div>
  </div>
</template>

<style scoped lang="scss">
/* task list */
.task {
  padding: 10px 20px;
  background: #fff;
  margin-top: 20px;
  border-radius: 4px;
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: space-between;
  align-items: center;
  &-list {
    max-width: 640px;
    margin: 20px auto;
  }
  h3,
  .icons {
    display: inline-block;
  }
  .icons {
    text-align: right;
  }
  i {
    font-size: 1.4em;
    margin-left: 6px;
    cursor: pointer;
    color: #bbb;
  }
  .active {
    color: #ff005d;
  }
}
</style>
