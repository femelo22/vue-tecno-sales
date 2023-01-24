const vm = new Vue({
  el: '#app',
  data: {
    produtos: [],
  },
  methods: {
    fetchProdutos() {
      fetch('./api/produtos/produtos.json')
        .then((res) => res.json())
        .then((res) => {
          this.produtos = res;
        });
    },
  },
  created() {
    this.fetchProdutos();
  },
});
