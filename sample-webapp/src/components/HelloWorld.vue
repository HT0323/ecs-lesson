<template>
  <div class="hello">
    <h1>This application is Sample WebApp for CICD lesson.</h1>
    <div>Response from REST API is... {{ info }}</div>
  </div>
</template>

<script>
import fetch from "node-fetch"

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      info: null
    }
  }
  ,
  mounted() {
    const BACKEND_URL = 'https://ecs-test.tk/api'
    fetch(BACKEND_URL)
      .then((response) => (this.info = response.data))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
