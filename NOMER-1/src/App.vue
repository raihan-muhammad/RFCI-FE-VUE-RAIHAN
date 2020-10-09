<template>
  <div class="home">
    <div>
      <input placeholder="Enter" v-model="item" />
      <button @click="process()">Process</button>
      <div class="box text-left" v-if="result">
        <p>Result</p>
        <ul v-for="(item, index) in result" :key="index">
          <li>[{{ item.label }}] : [{{ item.current }}]</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      item: '',
      result: [],
      show: false,
      tmp: [],
    };
  },
  methods: {
    process() {
      const array = this.item.split('');
      let done = false;
      while (!done) {
        done = true;
        for (let i = 1; i < array.length; i += 1) {
          if (array[i - 1] > array[i]) {
            done = false;
            const selected = {
              label: String(array[i - 1] + ',' + array[i]),
              current: '',
            };
            this.tmp = array[i - 1];
            array[i - 1] = array[i];
            array[i] = this.tmp;
            selected.current = String(array);
            this.result.push(selected);
          }
        }
      }
    },
  },
};
</script>

<style>
.box {
  width: 230px;
  margin: auto;
}
.text-left {
  text-align: left;
}
</style>
