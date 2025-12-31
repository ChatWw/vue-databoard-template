<template>
    <span>
        <template v-for="n in numArr">
            <svg width="11" height="21" viewBox="0 0 12 21" fill="none" class="thin-line">
                <use :xlink:href="'#icon-' + type + '-' + n" />
            </svg>
        </template>
    </span>
</template>

<script>
export default {
    name: 'SpecialFonts',
    props: {
        num: {
            type: Number,
            default: 0
        },
        type: {
            type: String,
            default: 'yellow'
        }
    },
    computed: {
        numArr() {
            return this.num.toString().split('')
        }
    }
}
</script>

<style scoped>
.thin-line {
    fill: currentColor;
    vertical-align: middle;
    flex-shrink: 0; /* flex 布局下不被压缩 */
}
</style>
