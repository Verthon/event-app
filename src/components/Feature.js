class Feature {
  constructor () {
    this.db = "database";
    this.auth = "auth";
  }

  signWithGoogle = () => console.log(this.db);
  
}

export default Feature;