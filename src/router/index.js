import Vue from "vue";
import Router from "vue-router";
import EventCreate from "../views/EventCreate.vue";
import EventList from "../views/EventList.vue";
import EventShow from "../views/EventShow.vue";
import NProgress from 'nprogress';
import store from '@/store/index'

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "event-list",
      component: EventList
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
      }
    },
    {
      path: "/event/create",
      name: "event-create",
      component: EventCreate
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