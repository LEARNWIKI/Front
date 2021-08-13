<template>
    <header class="header">
        <div class="wrapper">
            <div class="header__wrapper">
                <nav class="header__nav">
                    <ul class="header__list">
                        <li class="header__item">
                            <router-link class="header__link" to="/">Редактор графа</router-link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
</template>

<style scoped>
/* header */

.header {
  background-color: #0F0F0F;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99999;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.header__wrapper {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;
  margin-bottom: 8px;
  min-height: 50px;
}

.header__list {
  display: flex;
  flex-wrap: wrap;
}

.header__item {
  margin-right: 30px;
}
.header__item:last-child {
  margin-right: 0;
}

.header__link {
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: #FCFCFC;
  text-decoration: none;
  transition: 0.25s cubic-bezier(0.785, 0.135, 0.15, 0.86) all;
}

.header__link:hover, .header__link:focus{
  color: #C2C2C2;
}

.header__link:active {
  color: #3A7758;
}

</style>
