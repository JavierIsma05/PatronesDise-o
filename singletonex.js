class Singleton {
    constructor() {
      if (Singleton.instance) {
        return Singleton.instance;
      }
  
      // Inicialización de la instancia
      this.data = "Singleton Instance Data";
  
      // Almacenar la instancia única
      Singleton.instance = this;
  
      // Opcional: Evitar que se pueda crear una nueva instancia
      // Object.freeze(Singleton.instance);
  
      return this;
    }
  
    // Métodos de la instancia
    getData() {
      return this.data;
    }
  
    setData(newData) {
      this.data = newData;
    }
  }
  
  // Uso del Singleton
  const instance1 = new Singleton();
  console.log(instance1.getData()); // Salida: Singleton Instance Data
  
  const instance2 = new Singleton();
  console.log(instance2.getData()); // Salida: Singleton Instance Data
  
  console.log(instance1 === instance2); // Salida: true
  
  // Modificar datos a través de una instancia
  instance1.setData("New Data");
  console.log(instance1.getData()); // Salida: New Data
  console.log(instance2.getData()); // Salida: New Data (ambas instancias comparten el mismo estado)
  