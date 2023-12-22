<template>
  <div class="pt-10">
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <NavLogo />
        <h1
          class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white/90"
        >
          Create your 
          account
        </h1>
      </div>

      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        
        <RegisterForm />

        <p class="mt-10 text-center text-md text-current">
          Your have an account?
          <router-link
            to="/login"
            class="font-semibold leading-6 text-current"
          >
            <br />
            Go to login
          </router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import RegisterForm from '../../components/auth/RegisterForm.vue'
import NavLogo from '../../components/layout/full/logo/NavLogo.vue'

</script>
