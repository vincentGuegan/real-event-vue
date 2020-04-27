<template>
    <div>
        <h1>Events Listing</h1>
        <EventCard v-for="event in events" :key="event.id" :event="event"/> <!-- we need to iterate each of the events whiwh get returned from the API -->
    </div>
</template>

<script>
    import EventCard from '@/components/EventCard.vue'
    import { mapState } from 'vuex'
    
    export default {
      components: {
        EventCard
      },
      created() {
        this.$store.dispatch('fetchEvents')
      },
      computed: mapState(['events'])
    }
    </script>