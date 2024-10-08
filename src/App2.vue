<script>
	export default {
		data() {
			return {
				name: "Vivaldo Gaston",
				status: "active",
				tasks: ["TASK1", "TASK2", "TASK3"],
			};
		},
		methods: {
			toggleStatus() {
				if (this.status === "active") this.status = "pending";
				else if (this.status === "pending") this.status = "inactive";
				else this.status = "active";
			},
		},
	};
</script>

<template>
	<h1>Hello VUE</h1>
	<h1>{{ name }}</h1>
	<p v-if="status === 'active'">User is active</p>
	<p v-else-if="status === 'pending'">User is pending</p>
	<p v-else>User is inactive</p>
	<h2>Tasks</h2>
	<ul>
		<li v-for="task in tasks" :key="task">{{ task }}</li>
	</ul>
	<a :ref="link">Clicl google</a>
	<button @click="toggleStatus">Change status</button>
</template>

<style scoped></style>
