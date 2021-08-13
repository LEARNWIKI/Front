<template>
  <div class="home">
    <Diagram
      :width="2000"
      :height="1000"
      :fluid="false"
      scale="1"
      background="#fafafa"
      :nodes="nodes"
      :links="links"
      :editable="false"
      :labels="{
        edit: 'Edit',
        remove: 'Remove',
        link: 'Link',
        select: 'Select',
        cancel: 'Cancel',
      }"
      @editNode="editNode"
      @editLink="editLink"
      @nodeChanged="nodeChanged"
      @linkChanged="linkChanged"
    ></Diagram>
  </div>
</template>

<script>
import Diagram from '../components/Diagram.vue'
import data from '@/assets/testdata.json'
const axios = require('axios')

// @ is an alias to /src
export default {
  name: 'Home',
  components: {
    Diagram
  },
  mounted () {
    axios
      .get('https://teadove.xyz:9999/api/nodes/')
      .then((response) => {
        this.nodes = response.data
      })
      .catch((error) => {
        console.log('Ошибка! Нет доступа к API. ' + error)
      })
    this.nodes = data.nodes
    this.links = data.links
    console.log(this.links)
  }
}
</script>
