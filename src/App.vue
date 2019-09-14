<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class='tab-wrapper'>
      <tab :tabs='tabs'></tab>
    </div>
  </div>
</template>

<script>
import VHeader from './components/v-header/v-header.vue';
import HeaderDetail from './components/header-detail/header-detail';
import { getSeller } from "./components/api";

import Goods from './components/goods/goods'
import Seller from './components/seller/seller'
import Ratings from './components/ratings/ratings'

import Tab from './components/tab/tab'
export default {
  name: 'app',
  data(){
    return {
      seller:{}
    }
  },
  computed: {
      tabs(){
        return[
            {
              label: '商品',
              component:Goods,
              data: {
                seller:this.seller
              }
            },
            {
              label: '评价',
              component:Ratings,
              data: {
                seller:this.seller
              }
            },
            {
              label: '店铺',
              component:Seller,
              data: {
                seller:this.seller
              }
            }
          ]
      }
  },
  created(){
    this._getSeller();
  },
  methods: {
    _getSeller(){
      getSeller().then((seller) => {
        this.seller = seller;
      })
    }
  },
  components: {
    VHeader,
    HeaderDetail,
    Tab
  }
}
</script>


<style lang="stylus" scoped>
  #app
    .tab-wrapper
      position: fixed
      top: 136px
      left: 0
      right: 0
      bottom: 0
</style>
