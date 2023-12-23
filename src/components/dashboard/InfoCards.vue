<template>
  <div>
    <div class="mx-auto max-w-7xl mt-16 px-6 mb-20 relative box-border">
      <div class="radial-bgone hidden overflow-x-hidden"></div>
      <div class="text-center mb-14">
        <h1 class="text-offwhite text-3xl md:text-5xl font-bold mb-3">
          How it work
        </h1>
        <p class="text-bluish md:text-lg font-normal leading-8">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. <br />
          Lorem Ipsum has been the industry standard dummy text ever.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-5 mt-32">
        <template
          v-for="item in workdata"
          :key="item.id"
        >
          <div class="card-b p-8">
            <div
              class="work-img-bg rounded-full flex justify-center absolute p-6"
            >
              <img
                :src="`${item.imgSrc}`"
                :alt="`${item.imgSrc}`"
                width="44"
                height="44"
              />
            </div>
            <div>
              <img
                src="/images/Work/bg-arrow.svg"
                alt="arrow-bg"
                width="{85}"
                height="{35}"
              />
            </div>
            <h3 class="text-2xl text-offwhite font-semibold text-center mt-8">
              {{ item.heading }}
            </h3>
            <p class="text-base font-normal text-bluish text-center mt-2">
              {{ item.subheading }}
            </p>
            <span
              class="text-base font-normal m-0 text-bluish text-center hides"
              >{{ item.hiddenpara }}</span
            >
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
const workdata = [
  {
    imgSrc: '/images/Work/icon-one.svg',
    heading: 'Create Account',
    subheading:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry and this',
    hiddenpara:
      'standard dummy text ever since the 1500s, when an unknownprinter took a galley of type and scrambled it to make a type specimen book. It has survived...',
  },
  {
    imgSrc: '/images/Work/icon-two.svg',
    heading: 'Find your Credit',
    subheading:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry and this',
    hiddenpara:
      'standard dummy text ever since the 1500s, when an unknownprinter took a galley of type and scrambled it to make a type specimen book. It has survived...',
  },
  {
    imgSrc: '/images/Work/icon-three.svg',
    heading: 'Exchange Currency',
    subheading:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry and this',
    hiddenpara:
      'standard dummy text ever since the 1500s, when an unknownprinter took a galley of type and scrambled it to make a type specimen book. It has survived...',
  },
]
</script>

<style lang="scss" scoped></style>
