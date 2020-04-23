<template>
    <div>
        <h1>Events Listing</h1>
        <EventCard v-for="event in events" :key="event.id" :event="event"/> <!-- we need to iterate each of the events whiwh get returned from the API -->
    </div>
</template>

<script>
    import EventCard from '@/components/EventCard.vue'
    import axios from 'axios' // <--- brings in the axios library
    
    export default {
      components: {
        EventCard
      },
      data() {
          return {
              events: []
          }
      },
      created() {
        axios
          .get('http://localhost:3000/events')  // Does a get request
          .then(response => {
            this.events = response.data // this.events logged to response.data
          })
          .catch(error => {
            console.log('There was an error:', error.response) // Logs out the error
          })
      }
    }
    </script>