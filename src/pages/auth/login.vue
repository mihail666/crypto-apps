<template>
  <div class="pt-14">
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <NavLogo />
        <h1
          class="mt-10 text-center text-2xl font-semibold leading-9 tracking-tight text-white/90"
        >
          Sign in to your account
        </h1>
      </div>

      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        
        <LoginForm />
      
        <p class="mt-10 text-center text-md text-current">
          Not a member?
          <router-link
            to="/registration"
            class="font-semibold leading-6 text-current"
          > <br>
            Go to Registration
          </router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import NavLogo from '../../components/layout/full/logo/NavLogo.vue'
import LoginForm from '../../components/auth/LoginForm.vue';
</script>
