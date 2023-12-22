import React from "react";

const styles = {
  wrapper : {
    padding : 16,
    display : "flex",
    flexDirection : "row",
    borderBottom: "1px solid grey",
  },
  greeting: {
    marginRight: 8,
  },

};

function Toolbar(props){
  const { isLoggedIn, onClickLogin, onClickLogout} = props;

  return (
    <div style={styles.wrapper}>

      {isLoggedIn ? (
        <button onClick ={ onClickLogout}>라고할뻔</button>
      ) : (         
        <button onClick ={ onClickLogin}>FIRE</button>

      )}
      {isLoggedIn && <span style={styles.greeting}>잘가라</span>}
    </div>
  );
}

export default Toolbar;