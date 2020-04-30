<template>
    <div class="notification-bar" :class="notificationTypeClass">
        <p>{{ notification.message }}</p>
    </div>
</template>

<script>
<<<<<<< HEAD
import { mapActions } from 'vuex'
=======
import {mapActions } from 'vuex'
>>>>>>> 1e6bd546e4fcf782d09b61488f8d6df37c1101be

    export default {
        props: {
            notification: {
                type: Object,
                required: true
            }
        },
        data() {
            return {
                timeout: null
            }
        },
        mounted() {
            this.timeout = setTimeout(() => this.remove(this.notification), 5000)
        },
        beforeDestroy() {
            clearTimeout(this.timeout)
        },
        computed: {
            notificationTypeClass() {
                return `-text-${this.notification.type}`
            }
        },
        methods: mapActions('notification', ['remove'])
    }
</script>

<style scoped>
.notification-bar {
    margin: 1em 0 1em;
}
</style>