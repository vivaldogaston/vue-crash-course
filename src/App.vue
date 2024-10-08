<script setup>
	import { ref } from "vue";

	const name = ref("Vcivalso gaston");
	const status = ref("active");
	const tasks = ref(["TASK1", "TASK2", "TASK3"]);
	const newTask = ref("");
	const toggleStatus = () => {
		if (status.value === "active") status.value = "pending";
		else if (status.value === "pending") status.value = "inactive";
		else status.value = "active";
	};

	const addTask = () => {
		if (newTask.value.trim() != "") tasks.value.push(newTask.value);
		newTask.value = "";
	};
	const deleteTask = () => {};
</script>

<template>
	<h1>Hello VUE</h1>
	<h1>{{ name }}</h1>
	<p v-if="status === 'active'">User is active</p>
	<p v-else-if="status === 'pending'">User is pending</p>
	<p v-else>User is inactive</p>
	<form @submit.prevent="addTask">
		<label for="newTask">Add New task</label>
		<input type="text" id="newTask" name="newTask" v-model="newTask" />
		<button type="submit">Submit</button>
	</form>

	<h2>Tasks</h2>
	<ul>
		<li v-for="task in tasks" :key="task">{{ task }}</li>
	</ul>

	<button @click="toggleStatus">Change status</button>
</template>

<style scoped></style>
