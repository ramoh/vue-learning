<template>
  <div class="container">
    <div id="header" style=""><slot name="header"></slot></div>
    <div id="content" style=""><slot></slot></div>
    <div id="footer" style=""><slot name="footer"></slot></div>
  </div>
</template>
<script>
export default {
  name: "BaseLayout",
};
</script>
<style >
.container {
  display: flex;
  position: fixed;
  width: 100%;
  flex-direction: column;
  bottom: 0px;
  top: 0px;
}
#header {
  padding: 15px;

  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-around;

  background-color: rgb(182, 182, 182);
}
#content {
  flex-grow: 1;
  overflow: auto;
  background-color: rgb(243, 247, 245);
}
#footer {
  justify-self: flex-end;
  overflow: hidden;
  background-color: rgb(182, 182, 182);
}
</style>
