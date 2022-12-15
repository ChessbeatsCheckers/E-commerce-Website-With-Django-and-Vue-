<template>
  <div id="wrapper">
    <!-- Navigation Bar: -->
    <nav class="navbar is-dark">
      <!-- Logo: -->
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item"><strong>SS Tech</strong></router-link>

        <a class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbar-menu">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div class="navbar-menu" id="navbar-menu">
        <div class="navbar-end">
          <router-link to="/computers" class="navbar-item">Computer</router-link>
          <router-link to="/tablets" class="navbar-item">Tablets</router-link>
          <router-link to="/phones" class="navbar-item">Phones</router-link>
          <router-link to="/wearables" class="navbar-item">Wearables</router-link>
          
          <div class="navbar-item">
            <div class="buttons">
              <router-link to="log-in" class="button is-light">Log In</router-link>
              <rotuer-link to="/cart" class="button is-success">
                <span class='icon'><i class="fas fa-shopping-cart"></i>
                </span><span>Cart</span>
              </rotuer-link>
            </div>
          </div>

        </div>
      </div>

    </nav>
    <section class="section">
      <router-view/>
    </section>
    
    <footer class="footer">
      <p class="has-text-centered">Copyright (c) 2022</p>
    </footer>
  </div>

</template>

<style lang="scss">
@import '../node_modules/bulma'
</style>
