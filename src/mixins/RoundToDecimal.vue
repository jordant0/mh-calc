<script>
export default {
  methods: {
    roundToDecimal(num, precision) {
      if(typeof precision === 'undefined') {
        precision = this.settings.precision || 2;
      }

      var factor = Math.pow(10, precision);

      return Math.round(num * factor) / factor;
    },
  }
}
</script>
