import { createWebHistory, createRouter } from "vue-router";
import HomeView from "@/views/HomeView.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
});
