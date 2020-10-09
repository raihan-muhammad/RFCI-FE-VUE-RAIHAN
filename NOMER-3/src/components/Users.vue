<template>
  <div class="main">
    <div class="main-title">{{ msg }}</div>
    <div class="user-count">
      <div class="count">{{ count }}</div>
      Users
    </div>
    <div class="wrapper">
      <div v-for="user in users" :key="user" class="card bgtes">
        <div class="body-card">
          <div class="title">Name</div>
          <div class="name">{{ user.name }}</div>
          <div class="inln">
            <div>
              <div class="title">Email</div>
              <div class="email">{{ user.email }}</div>
            </div>
            <div>
              <div class="title">Phone</div>
              <div class="phone">{{ user.phone }}</div>
            </div>
            <div>
              <div class="title">Website</div>
              <div class="website">{{ user.website }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Users',
  props: {
    msg: String,
  },
  computed: mapState(['users']),

  mounted() {
    this.$store.dispatch('loadUser');
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  background-color: #f5f7fa;
  padding: 10px;
}
.inln {
  display: inline-block;
}
.count {
  color: #83dd8b;
  font-weight: 800;
  margin-right: 10px;
}

.bgtes {
  background-color: white;
  display: inline-block;
  margin-top: 10px;
  margin-right: 10px;
  padding: 10px;
  width: 50%;
}
.user-count {
  border-bottom: 1px solid #e1e1e7;
  color: #646464;
  display: flex;
}
</style>
