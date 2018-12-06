let finalmente = new Map();
finalmente.set("Hola", 2);
finalmente.set("Adios", 10);
stopwords_es = ["Hola", "mira", "novoy"];
for (let i = 0; i < stopwords_es.length; i++) {
  eliminar = stopwords_es[i];
  envato(eliminar);
}
function envato(eliminar) {
  for (var [key, value] of finalmente) {
    if (key == eliminar) {
      finalmente.delete(key);
    }
  }
}
console.log(finalmente);
