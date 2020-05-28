import Vue from "vue";
import Router from "vue-router";
import EventCreate from "../views/EventCreate.vue";
import EventList from "../views/EventList.vue";
import EventShow from "../views/EventShow.vue";
import NProgress from "nprogress";
import store from "@/store/index";
import NotFound from "../views/NotFound.vue";
import NetworkIssue from "../views/NetworkIssue.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "event-list",
      component: EventList,
      props: true
    },
    {
      path: "/event/:id",
      name: "event-show",
      component: EventShow,
      props: true,
      beforeEnter(routeTo, routeFrom, next) {
        store.dispatch('event/fetchEvent', routeTo.params.id).then((event) => { // We call the fetchEvent action by importing vuex Store, we send in the id we want to fetch and then we call then() which is the callback to execute when the Promise is resolved.
          routeTo.params.event = event
          next() // We call next() to continue navigating to the component
        })
        .catch(error => {
          if (error.response && error.response.status == 404) { // Only if response status is 404, show the 404
            next({ name: '404', params: { resource: 'event' } }) // On error redirect to 404 with name of resource missing
          } else { // Otherwise lets redirect to the error issue component
            next({ name: "network-issue" })
          }
        })
      }
    },
    {
      path: "/event/create",
      name: "event-create",
      component: EventCreate
    },
    {
      path: "/404",
      name: "404",
      component: NotFound,
      props: true // send in resource param as prop
    },
    {
      path: "/network-issue",
      name: "network-issue",
      component: NetworkIssue,
      props: true // send in resource param as prop
    },
    {
      path: "*", // will catch all navigation that doesn't match
      redirect: { name: "404", params: { resource: "page" } } // "page is here the specified missing resource"
    }
  ]
})

router.beforeEach((routeTo, routeFrom, next) => {
  NProgress.start() // Start the progress bar when routing begins
  next()
})

router.afterEach(()=> {
  NProgress.done() // Finish the progress bar when routing is about to end
})

export default router