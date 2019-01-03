Vue.component("app-menu", {
  data: function() {
    return {
      menuList: []
    };
  },
  template: `
      <div class="loc-app-menu">
      <div class="loc-logo-form"></div>
      <div class="loc-menu-list">
        <div
          class="loc-menu-form com-hover"
          v-for="menu of menuList"
          :class="{'active': menu.url}"
          (click)="changeRouter(menu)"
        >
          <img class="loc-menu-default" :src="menu.img + '.png'" />
          <img class="loc-menu-active" :src="menu.img + '-active.png'" />
          <span class="loc-menu-name com-txt-overflow">{{ menu.name }}</span>
        </div>
      </div>
    </div>
    `
});
