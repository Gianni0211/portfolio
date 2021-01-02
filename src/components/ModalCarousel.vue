<template>
    <div class="flex  relative container-photo"
        
    >
        <button
        
            @click.prevent="onScroll($event, 'left')"
            class="absolute left-10 top-40 arrows focus:outline-none hidden md:inline-block"
        >
            <i class="fas fa-chevron-left"></i>
        </button>
        <div
            class="overflow-x-auto whitespace-nowrap  h-full w-full carousel-container shadow rounded-xl mx-auto"
            :class="{'w-80': !full , 'w-full h-72' : full}"
        >
            <img
                v-for="image in images"
                :key="image.id"
                :src="image"
                alt=""
                class="inline-block img"
            />
        </div>

        <button
            @click.prevent="onScroll($event, 'right')"
            class="absolute right-10 top-40 arrows focus:outline-none
            hidden md:inline-block
            "
        >
            <i class="fas fa-chevron-right"></i>
        </button>
    </div>
</template>

<script>
export default {
    name: "ModalCarousel",
    props: {
        images: {
            type: Array,
            required: true
        },
        
    },

    
    methods: {
        onScroll(e, direction) {
            const elementoScrollato = e.target.closest("div").children[1];
            if (direction == "left") {
                elementoScrollato.scrollLeft -= elementoScrollato.offsetWidth;
            } else if (direction == "right") {
                elementoScrollato.scrollLeft += elementoScrollato.offsetWidth;
            }
        }
    }
};
</script>

<style scoped>
.carousel-container::-webkit-scrollbar {
    display: none;
    
}

.img{
 height: 100%;
 width: 100%;
}
.arrows {
    opacity: 0;
    transition: 0.3s;
    color: var(--accent-color);
    @apply h-10 w-10 rounded-full bg-white shadow-xl;
}

.container-photo:hover .arrows {
    opacity: 1;
}
</style>
