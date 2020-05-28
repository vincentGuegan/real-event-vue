<template>
    <div>
        <h1>Oups!</h1>
        <h3>This page you're looking for is not here.</h3>
        <router-link :to="{ name: 'event-list' }">Back to the homepage</router-link>
    </div>
</template>