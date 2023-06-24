import Vue from 'vue';

declare module 'vue/types/vue' {
    interface Vue {
        $open: (url: string) => void
    }
}