<template>
  <div class="pt-10">
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <NavLogo />
        <h1
          class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white/90"
        >
          Create your <br />
          account
        </h1>
      </div>

      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          class="space-y-6"
          action="#"
          method="POST"
        >
          <div>
            <label
              for="email"
              class="block text-md font-medium leading-6 text-current"
              >Email address</label
            >
            <div class="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                required
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              for="name"
              class="block text-md font-medium leading-6 text-current"
              >Your name</label
            >
            <div class="mt-2">
              <input
                id="name"
                name="name"
                type="name"
                autocomplete="name"
                required
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div class="flex items-center justify-between">
              <label
                for="password"
                class="block text-md font-medium leading-6 text-current"
                >Password</label
              >
              <div class="text-sm"></div>
            </div>
            <div class="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                required
                class="block w-full rounded-md py-1.5 text-gray-900 shadow-sm ring-1 placeholder:text-current sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div class="flex items-center justify-between">
              <label
                for="password"
                class="block text-md font-medium leading-6 text-current"
                >Repeat Password</label
              >
            </div>
            <div class="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                required
                class="block w-full rounded-md px-3 py-1.5 text-gray-900 shadow-sm ring-1 placeholder:text-current sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              class="navbutton flex w-100 justify-center mx-auto rounded-md px-4 py-0 font-semibold leading-6 text-current shadow-sm"
            >
              <h1 class="text-sm text-white/90">Create account</h1>
            </button>
          </div>
        </form>

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
import NavLogo from '../../components/layout/full/logo/NavLogo.vue'
</script>
