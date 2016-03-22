import {expect} from "chai";
import {List,Map} from "immutable"

describe("immutability",()=>{
  describe("A number",()=>{
    function incr(number){
      return number+1;
    }
    it("number is immutable",()=>{
      let state=40;
      let nextState=incr(state);
      expect(nextState).to.equal(41);
      expect(state).to.equal(40);
    });
  });

  describe("A List",()=>{
    function AddMovie(oldList,newMovie){
      return oldList.push(newMovie);
    }
    it("list(Immutable) is immutable",()=>{
      let oldMovies=List.of('NewYork',"10000 Years history");
      let newMoive="One night";
      let nextState=AddMovie(oldMovies,newMoive);
      expect(nextState).to.equal(List.of(
        "NewYork","10000 Years history","One night"
      ));
      expect(oldMovies).to.equal(List.of(
        "NewYork","10000 Years history"
      ));
    });
  });

  describe("A Movie Tree",()=>{
    function AddMovie(currentState,newMovie){
      return currentState.set("movie",currentState.get("movie").push(newMovie));
    }
    it("Map(Immutable) is immutable",()=>{
      let state=Map({
        movie:List.of('NewYork',"10000 Years history")
      });
      let newMoive="One night";
      let nextState=AddMovie(state,newMoive);
      expect(nextState).to.equal(Map({
        "movie":List.of(
        "NewYork","10000 Years history","One night"
      )}));
      expect(state).to.equal(Map({
        movie:List.of('NewYork',"10000 Years history")
      }))
    });
  });

})
