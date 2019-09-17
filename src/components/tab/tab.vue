<template>
  <div class="tab">
    <cube-tab-bar
      :useTransition = false 
      :showSlider=true
      v-model="selectedLabel"
      :data="tabs"
      ref="tabBar"
      class="border-bottom-1px"
    >
    </cube-tab-bar>
    <div class="slide-wrapper">
      <cube-slide
        :loop=false
        :auto-play=false
        :show-dots=false
        :initial-index="index"
        ref="slide"
        @change="onChange"
        @scroll="onScroll"
        :options='scrollOptions'
      >
        <cube-slide-item v-for="(item,index) in tabs" :key='index'>
            <!-- vue动态组件技术，接收组件与数据 -->
            <component :is='item.component' :data='item.data' ref='component'></component>
        </cube-slide-item>
      </cube-slide>
    </div>
  </div>
</template>

<script>
// import Goods from '../../components/goods/goods'
// import Seller from '../../components/seller/seller'
// import Ratings from '../../components/ratings/ratings'

export default {
    name: 'tab',
    props: {
      tabs: {
        type: Array,
        default() {
          return [];
        }
      }
    },
    data() {
        return {
            index: 0,
            scrollOptions: {
              listenScroll: true,
              probeType: 3
            }
        }
    },
    computed: {
        selectedLabel: {
            get(){
                return this.tabs[this.index].label;
            },
            set(newVal){
                this.index = this.tabs.findIndex((item) => {
                    return item.label === newVal;
                })
            }

        }
    },
    mounted() {
      this.onChange(this.index);
    },
    methods: {
      onChange(newIndex) {
          this.index = newIndex;
          const comp = this.$refs.component[newIndex];
          comp && comp.getData && comp.getData(); 
      },
      onScroll(pos){
          // console.log(pos.x);
          const tabBar = this.$refs.tabBar;
          const tabWidth = tabBar.$el.clientWidth;
          const scrollPercent = -pos.x/this.$refs.slide.slide.scrollerWidth;
          tabBar.setSliderTransform(tabWidth * scrollPercent)
      }
    }
}

</script>

<style lang="stylus" scoped>
  @import "~common/stylus/variable"

  .tab
    display: flex
    flex-direction: column
    height: 100%
    >>> .cube-tab
      padding: 10px 0
    .slide-wrapper
      flex: 1
      overflow: hidden

</style>