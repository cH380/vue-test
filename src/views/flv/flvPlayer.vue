<template>
  <div>
      <h1>flvPlayer</h1> 
      <video id="videoElement" controls width="100" height="100">xxx</video>
  </div>
</template>
<!-- 
    <script src="./flv.js"></script>
-->
<script>
import flvjs from 'flv.js'
var player
export default {
    data () {
        return {

        }
    },
    mounted() {
        console.log(flvjs)
        if (flvjs.isSupported) {
        var videoElement = document.getElementById('videoElement');
        var flvPlayer = flvjs.createPlayer({
            type: 'flv',
            url: 'http://example.com/flv/video.flv'
            // url:'http://localhost:8080/assets/2019-11-27-11-21-58.flv'
        });
        flvPlayer.attachMediaElement(videoElement);
        flvPlayer.load();
        flvPlayer.play();
    }
    },
    methods:{

    }
}
</script>

<style>
    #videoElement {
        width: 400px;
        height: 400px;
    }
</style>