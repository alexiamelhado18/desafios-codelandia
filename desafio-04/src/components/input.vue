<template>
  <div id="div__input">
    <label :for="name">{{ nameLabel }}</label>
    <input :type="type" :placeholder="text" :name="name" />
  </div>
</template>
<script>
export default {
  props: ["name", "nameLabel", "type", "text"],
};
</script>

<style>
#div__input {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
}
#div__input > input {
  width: 100%;
  border: 1px solid #e8e8e8;
  background: none;
  font: 400 14px "Lato";
  border-radius: 5px;
  height: 50px;
  outline: none;
  padding: 16px 0 16px 20px;
}
#div__input > label{
    margin-bottom: 11px;
    color: #1A202C;
    font: 400 16px 'Lato';
}
#div__input > input::-webkit-input-placeholder{
    color:#1A202C;
}
</style>
