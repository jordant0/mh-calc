<script>
export default {
  methods: {
    findIdFromList(id, list) {
      return list.findIndex(function(skill) {
        return skill.id === id;
      });
    },

    findFromList(id, list) {
      var index = this.findIdFromList(id, list);

      if(index >= 0) {
        return list[index];
      }
      else {
        return null;
      }
    },

    findItemIndex(itemId) {
      return this.findIdFromList(itemId, this.items);
    },

    findItem(itemId) {
      return this.findFromList(itemId, this.items);
    },

    findSkillIndex(skillId) {
      return this.findIdFromList(skillId, this.skills);
    },

    findSkill(skillId) {
      return this.findFromList(skillId, this.skills);
    },
  }
}
</script>
