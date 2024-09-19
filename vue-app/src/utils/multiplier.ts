import { ref } from 'vue'

// FIXME: add documentation
export const newMultiplier = () => {
    const multiplier = ref(3)
    const increment = () => {
        multiplier.value++
    }

    return { multiplier, increment }
}
