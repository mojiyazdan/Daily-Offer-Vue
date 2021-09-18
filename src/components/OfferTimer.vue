<template>
  <p id="time">
    <span class="time" id="hour">0</span><b>:</b>
    <span class="time" id="minute">0</span><b>:</b>
    <span class="time" id="second">0</span>
  </p>
</template>

<script>
export default {
  mounted() {
    var interval = setInterval(() => {
      // Here enter the Date!!!
      var deadline = new Date(2020, 8, 18, 23, 0, 0);
      var now = new Date();
      if (now.valueOf() > deadline.valueOf()) {
        document.getElementById("time").innerHTML = "زمان کد تخفیف گذشت!";
        clearInterval(interval);
      } else {
        var comparetime = deadline.getTime() - now.getTime();
        var hours = Math.floor(
          comparetime / (1000 * 60 * 60)
          //  / (1000 * 60 * 60)
        );
        var minutes = Math.floor(
          (comparetime % (1000 * 60 * 60)) / (1000 * 60)
        );
        var seconds = Math.floor((comparetime % (1000 * 60)) / 1000);
        document.getElementById("hour").innerHTML = hours;
        document.getElementById("minute").innerHTML = minutes;
        document.getElementById("second").innerHTML = seconds;
      }
    }, 1000);
  },
};
</script>

<style>
.time {
  padding: 1px 7px 1px 7px;
  width: 20px;
  color: white;
  border-radius: 10px;
  background-color: black;
  margin: 0 5px 0 5px;
}
</style>
