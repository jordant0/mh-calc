<script>
export default {
  methods: {
    toClassName(string) {
      return string.toLowerCase().replace(/[^a-z\s]/g, '').replace(/\s/g, '-');
    }
  }
}
</script>
