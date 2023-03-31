<template>
  <div id="navbar">
    <img id="telogo" src="../assets/stacked_logo.png" alt="Tech Elevator Logo" >
    <div id="menu">
      <router-link to="/">Home</router-link> 
      <router-link to="/list">List</router-link> 
      <router-link to="/print">Print</router-link>
      <router-link to="/count">Count</router-link>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "Top",
  data: function () {
    return {};
  },

  computed: {},
};
</script>

<style scoped>


#navbar {
  padding: 5px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "splash menu";
}

#menu{
  grid-area: menu;
  align-self: center;
  justify-self: end;
  align-content: space-between;
}

#telogo{
  grid-area: splash;
}

#menu a {
  display: inline-block;
  
  color: #FFFFFF;
  background-color: #2CB2EA ;
  border-radius: 300px;
  padding: 2px 8px;
  margin: 5px;
  text-decoration-line: none;
  text-align: center;
  width: 45px;
  
}

#navbar a.router-link-exact-active {
  border: 2px solid #2CB2EA;
  border-width: 2px;
  background-color: #FFFFFF;
  color: #2CB2EA;
  font-weight: bolder;
}

#telogo {
  padding-left: 10px;
  height: 2rem;
}

/* Control Menu Placement */
@media only screen and (max-width: 435px){
  #navbar {
  padding: 5px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas: "splash" "menu";
}

#menu{
  align-self: center;
  justify-self: center;
  align-content: space-between;
}
}
  
</style>
