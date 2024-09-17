const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "/ayakkabi", component: () => import("src/pages/Ayakkabi.vue") },
      { path: "/", component: () => import("src/pages/Anasayfa.vue") },
      { path: "/kaydol", component: () => import("src/pages/Kaydol.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
