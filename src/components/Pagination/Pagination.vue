<template>
  <div class="gt-pagination">
    <button type="button" class="gt-pagination-nav" :disabled="enabledPrev" :class="{'gt-disabled': enabledPrev}"  @click="setPageFirst()"><i class="gi gi-double-arrows-left"></i></button>
    <button type="button" class="gt-pagination-nav" :disabled="enabledPrev"  :class="{'gt-disabled': enabledPrev}" @click="setPagePrev()"><i class="gi gi-short-arrow-left-alt"></i></button>
    <button type="button" class="gt-pagination-num" v-for="(p, index) in paginate" :key="index" :class="{'gt-active':p == current_page}" @click="setPage(p)">
        {{ p }}
    </button>
    <button type="button" class="gt-pagination-nav" :disabled="enabledNext" :class="{'gt-disabled': enabledNext}"  @click="setPageNext()"><i class="gi gi-short-arrow-right-alt"></i></button>
    <button type="button" class="gt-pagination-nav" :disabled="enabledNext" :class="{'gt-disabled': enabledNext}" @click="setPageEnd()"><i class="gi gi-double-arrows-right" /></button>
  </div>
</template>

<script>
export default {
  name: "gt-pagination",
  data() {
    return {
      current_page: 1
    };
  },
  props: {
    length : {
      type: Number,
      default: 10
    },
    last_page : {
      type: Number,
      default: 1,
    }
  },
  computed: {
    paginate : function() {
      // 현재 페이지 번호 동기화
      let number = [];
      let start = Math.floor((this.current_page - 1)/this.length)*this.length + 1;
      let end = start + this.length - 1;
      if(end > this.last_page) end = this.last_page;
      for(var p = start; p <= end; p++){
        number.push(p);
      }
      return number;
    },
    enabledNext() {
      if((this.current_page + 1) <= this.last_page) return false;
      else return true;
    },
    enabledPrev() {
      if((this.current_page - 1) > 0) return false;
      else return true;
    },
    isVisible(){
      return (this.last_page > 1) ? true : false;
    }
  },
  methods : {    
    setPage(num) {      
      if (num > this.last_page || num < 0) {
        throw(e) => {
          alert("잘못된 접근 : " + e);
        }
      } else {
        // Set Page
        this.current_page = num;
        this.$emit('input', this.current_page); // 현재 페이지
      }
    },
    setPageNext() {
      if(this.enabledNext !== false || this.current_page === 0 ){
        return;
      }

      let tmpNext = Math.ceil(this.current_page/ this.length) * this.length + 1 ; 
      if (tmpNext < this.last_page  ){
        this.setPage(tmpNext);
      }else{
        this.setPage(this.last_page);
      }
    },
    setPagePrev() {
      if(this.enabledPrev !== false || this.current_page === 0){
        return;
      }
      let tmpPrev = (Math.ceil(this.current_page/ this.length) - 1 ) * this.length  ;
      if( tmpPrev > 0 ) {	
        this.setPage(tmpPrev);
      }else{
        this.setPage(1);
      }
    },
    setPageFirst() {
      if((this.current_page - 1) > 0){
        let _page = 1;
        this.setPage(_page);
      }
    },
    setPageEnd() {
      if((this.current_page + 1) <= this.last_page){
        let _page = this.last_page;
        this.setPage(_page);
      }
    },
    isActive(Number) {
      if(this.current_page == Number) return true;
      else return false;
    }
  }
}
</script>

<style lang="scss" scoped>/* Pagination */
.gt-pagination { display: flex; }

.gt-pagination .gt-pagination-nav,
.gt-pagination .gt-pagination-num { 
  display: inline-block;
  min-width: 34px;
  max-height: 34px;
  line-height: 34px;
  margin: 0 4px;
  font-size: 13px;
  font-weight: 500;
  font-family: arial;
  color: $pagination-font;
  border: 1px solid $pagination-border;
  background: $pagination-bg;
  user-select: none;
  border-radius: 4px;
  transition-duration: .1s;
  outline: 0;
}

.gt-pagination .gt-pagination-nav:hover,
.gt-pagination .gt-pagination-num:hover {
  background: $pagination-bg-hover;
  border-color: $pagination-border-hover;
  color: $pagination-font-hover
}

.gt-pagination .gt-pagination-nav.gt-active,
.gt-pagination .gt-pagination-num.gt-active {
  background: $pagination-bg-active;
  border-color: $pagination-border-active;
  color: $pagination-font-active;
  pointer-events: none
}

.gt-pagination .gt-pagination-nav.gt-disabled,
.gt-pagination .gt-pagination-num.gt-disabled {
  pointer-events: none;
  opacity: .5;
}

.gt-flex-center {
  justify-content: center;
}
.gt-flex-right {
  justify-content: flex-end;
}
</style>