<script>
export default {
  methods: {
    roundToDecimal(num) {
      var factor = Math.pow(10, this.settings.precision || 2);

      return Math.round(num * factor) / factor;
    },
  }
}
</script>
