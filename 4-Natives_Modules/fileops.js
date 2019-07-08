module.exports = {
  incrementValue: function(list) {
    const mapIncrement = val => Number(val) + 1;
    return list.map(mapIncrement);
  },
  callNames: function(list) {
    const mapCall = name => `Hola ${name}! Aqui esta tu nombre.`;
    return list.map(mapCall);
  }
};
