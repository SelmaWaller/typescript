<script>
import { ref } from "vue";
import { useTaskStore } from "~/src/stores/TaskStore";
import TaskDetails from "~/src/components/TaskDetails.vue";
import TaskForm from "../src/components/TaskForm.vue";
export default {
  components: { TaskForm, TaskDetails },
  setup() {
    const taskStore = useTaskStore();
    const { tasks, loading, favs, totalCount, favCount } =
      storeToRefs(taskStore);
    //fetch tasks
    taskStore.getTasks();
    const filter = ref("all");
    return { tasks, loading, favs, totalCount, favCount, taskStore, filter };
  },
};
</script>

<template>
  <main>
    <!--task form-->
    <div class="new-task-form">
      <TaskForm />
    </div>

    <!--filter-->
    <nav class="filter">
      <button :class="filter === 'all' ? 'active' : ''" @click="filter = 'all'">
        All tasks
      </button>
      <button
        :class="filter === 'favs' ? 'active' : ''"
        @click="filter = 'favs'"
      >
        Favs
      </button>
    </nav>

    <div class="loading" v-if="loading">Loading tasks...</div>

    <!-- task list-->
    <div class="task-list" v-if="filter === 'all'">
      <p>You have {{ totalCount }} tasks</p>
      <div v-for="task in tasks">
        <TaskDetails :task="task" />
      </div>
    </div>

    <div class="task-list" v-if="filter === 'favs'">
      <p>You have {{ favCount }} favorites</p>
      <div v-for="task in favs">
        <TaskDetails :task="task" />
      </div>
    </div>

    <!-- <div>
      <button @click="taskStore.$reset">Reset</button>
    </div> -->
  </main>
</template>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;800&family=VT323&display=swap");

body {
  background: #f2f2f2;
  color: #444;
  margin: 0;
}
* {
  font-family: "Poppins", sans-serif;
}

/* header */
header {
  text-align: center;
  background: #e7e7e7;
  padding-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
}

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

/* filter nav */
.filter {
  width: 640px;
  max-width: 100%;
  margin: 10px auto;
  text-align: right;
}
.filter {
  button {
    display: inline-block;
    margin-left: 10px;
    background: #fff;
    border: 1px solid rgba(182, 194, 203, 0);
    border-radius: 4px;
    padding: 4px 8px;
    cursor: pointer;
    font-size: 1em;
    &:hover {
      border: 1px solid rgba(182, 194, 203, 0.3);
      background: rgba(228, 237, 244, 0.3);
    }
  }
  .active {
    background: rgb(228, 237, 244);
    border: 1px solid rgb(182, 194, 203);
    &:hover {
      background: rgb(228, 237, 244);
      border: 1px solid rgb(182, 194, 203);
    }
  }
}

/* new task form */
form {
  width: 400px;
  max-width: 100%;
  margin: 30px auto;
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 10px;
}

/* loading state */
.loading {
  width: 640px;
  max-width: 100%;
  border: 1px solid #ffd859;
  background: #ffe9a0;
  color: #3a3a3a;
  padding: 5px 0;
  text-align: center;
  margin: 30px auto;
}
</style>
