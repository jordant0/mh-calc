<script>
export default {
  methods: {
    findSkillIndex(skillId) {
      return this.skills.findIndex(function(skill) {
        return skill.id === skillId;
      });
    },

    findSkill(skillId) {
      var skillIndex = this.findSkillIndex(skillId);

      if(skillIndex >= 0) {
        return this.skills[skillIndex];
      }
      else {
        return null;
      }
    },
  }
}
</script>
