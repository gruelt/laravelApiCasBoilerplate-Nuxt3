export default defineNuxtRouteMiddleware(async (to, from) => {
  const user = useUser();
  const route = useRoute();
  const { backendUrl, frontendUrl } = useRuntimeConfig().public;
  //if (!user.value) return navigateTo("/login", { replace: true });
  if (!user.value) return navigateTo(backendUrl+"/login/cas?callback="+frontendUrl+route.fullPath, { replace: true, external :true });
});
