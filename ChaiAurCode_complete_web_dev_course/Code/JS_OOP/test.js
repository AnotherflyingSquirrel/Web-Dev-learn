class Language {
  set log(name) {
    this.#log.push(name);
  }
  #log = [];
  get log() {
    return this.#log;
  }
}
let language = new Language();
language.log = "EN";
language.log = "FA";
// language.log[1] = "FAR";
console.log(language.log);
// Expected output: Array ["EN", "FA"]
