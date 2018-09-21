class Sorter {
  constructor() {
    // your implementation
    this.array = [];
   this.compare = (a,b) => {
   return a - b;
   }
  }

  add(element) {
    this.array.push(element);
  
  }

  at(index) {
     return this.array[index];
  }

  get length() {
    return this.array.length;
  }

  toArray() {
    return this.array
  }

  sort(indices) {
     indices.sort((a,b) => {
   return a - b});

    var smth = [];
    for (i = 0; i < indices.length; i++)  {
      smth.push(this.array[indices[i]]);
    }

    smth.sort(this.compare);

    for(var i = 0; i<indices.length; i++){
      this.array.splice(indices[i], 1, smth[i]);
    } 
  }
  
  setComparator(compareFunction) {
     this.compare = compareFunction;
  }
}

module.exports = Sorter;