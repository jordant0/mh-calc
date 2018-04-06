<script>
export default {
  methods: {
    deepClone(data) {
      return JSON.parse(JSON.stringify(data));
    },

    saveToLocalStorage(key, data) {
      if(window.localStorage) {
        window.localStorage.setItem(key, JSON.stringify(data));
      }
    },

    loadFromLocalStorage(key, defaultReturn = []) {
      if(window.localStorage) {
        var data = window.localStorage.getItem(key);
        if(data) {
          return JSON.parse(data);
        }
      }
      return defaultReturn;
    },
  }
}
</script>
