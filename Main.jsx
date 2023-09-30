import React, { useState } from "react";
const state = [];
function Main() {
  const [val, insertVal] = useState();
  const [items, setitems] = useState([]);
  function change(e) {
    insertVal(e.target.value);
  }
  function insert(event) {
    
    event.preventDefault();
      document.querySelector(".form input").value="";
    setitems((olditem) => {
      return [...olditem, val];
    });
  }
  function remove(olditem){
    setitems((olditem)=>{
        olditem.pop();
        return [...olditem]
    })
  }
  return (
    <div className="main">
      <h1>To-Do-List</h1>
      <form action="" className="form">
      <input type="text" placeholder="Add a item" onChange={change} />
      <button>
        <span className="material-symbols-outlined icon-wrong" onClick={insert}>
          add
        </span>
      </button>

      </form>
      <ol>
        {items.map((e) => {
          return (
            <div className="li">
              <button>
                <span onClick={remove} className="material-symbols-outlined icon-remove ">
                  close
                </span>
              </button>
              <li>{e}</li>
            </div>
          );
        })}
      </ol>
    </div>
  );
}
export default Main;
