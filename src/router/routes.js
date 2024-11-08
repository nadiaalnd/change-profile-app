const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { 
        path: "",
        component: () => import("pages/IndexPage.vue"),
        name: "indexPage",
      },
      { path: "changephoto", component: () => import("pages/ChangePhoto.vue") },
      { path: "takephoto", component: () => import("pages/TakePhoto.vue") },
      {
        path: "cropimage",
        component: () => import("pages/CropImage.vue"),
        name: "cropimage",
        props: true,
      },
      {
        path: "previewphoto",
        component: () => import("pages/PreviewPhoto.vue"),
        name: "previewphoto",
        props: true,
      },
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
