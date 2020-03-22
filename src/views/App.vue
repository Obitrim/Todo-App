<template>
  <div>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
    <app-loader></app-loader>
  </div>
</template>
