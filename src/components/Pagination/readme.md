<!--split:basic-->
[ { "componentName":"Pagination_1", "menuName":"basic" , "sourceCode":"" , "prismEditor" : "" }]


<!--split:Pagination_1:sourceCode-->

<gt-panel>
  <template #title>Basic</template>
  <template #box>
    <gt-pagination :length="10" :last_page="40" v-model="page" />
  </template>
  <template #text>
    현재 페이지: {{ page }}<br>
    JSON API 기준의 값을 사용하므로 게시물 갯수가 아닌 페이지 범위만 사용함
  </template>
</gt-panel>

<!--split:Pagination_1:prismEditor-->

<gt-pagination :length="10" :last_page="40" v-model="page" />

<!--split:props-->

| OPTION | TYPE | DEFAULT | DESCRIPTION |
|--|--|--|----| 
| length | Number | 10 | 노출할 페이지 번호 수 |
| last_page | Number | 1 | 마지막 페이지 번호 |
| (v-model) value  | Number|  | 현재 페이지 번호  |