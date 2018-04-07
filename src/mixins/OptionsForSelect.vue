<script>
export default {
  methods: {
    convertToOptions(list) {
      return Object.entries(list)
       .map(function(item) {
         return {
           label: item[1].name,
           value: parseInt(item[0])
         };
       })
       .sort(function(a, b) {
         var nameA = a.label.toUpperCase();
         var nameB = b.label.toUpperCase();
         if (nameA < nameB) {
           return -1;
         }
         if (nameA > nameB) {
           return 1;
         }

         return 0;
       });
    },
  }
}
</script>
