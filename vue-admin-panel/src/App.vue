<template>
  <v-app>
    <template v-if="isAuthenticated">
      <NavigationBar />
      <AppBar />
      <PopUpMsgs />
      <PageLockout />
    </template>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import NavigationBar from "@/components/NavigationBar.vue";
import AppBar from "@/components/AppBar.vue";
import PopUpMsgs from "@/components/PopUpMsgs.vue";
import PageLockout from "@/components/PageLockout.vue";

export default {
  name: "App",

  components: {
    NavigationBar,
    AppBar,
    PopUpMsgs,
    PageLockout,
  },

  computed: {
    ...mapState(["isStart", "username", "isAuthenticated", "serviceList"]),
  },

  watch: {
    isAuthenticated: function (flag) {
      if (!this.isStart) {
        if (flag) {
          this.$session.start();
          this.$session.set("username", this.username);
          this.$router.push({ name: "home" });
          // Get a list of services and collections
          if (this.serviceList.length === 0) {
            this.getServiceList();
          }
        } else {
          this.setSelectedService([]);
          this.setServiceList([]);
          this.$session.destroy();
          this.$router.push("/sign-in");
        }
      } else {
        this.setIsStart(false);
      }
    },
  },

  methods: {
    ...mapMutations([
      "setLogo",
      "setBrand",
      "setSlogan",
      "setIsStart",
      "setUsername",
      "setIsAuthenticated",
      "setSelectedService",
      "setServiceList",
    ]),
    ...mapMutations("ckeditor", ["setLanguageCKEditor"]),
    ...mapActions("popUpMsgs", ["runShowMsg"]),
    // Get a list of services and collections
    getServiceList() {
      this.axios
        .post("/admin/service-list")
        .then((response) => {
          const data = response.data;
          if (data.is_authenticated) {
            const listLength = data.service_list.length;
            this.setLogo(data.logo);
            this.setBrand(data.brand);
            this.setSlogan(data.slogan);
            if (listLength > 0) {
              const selectedServiceList = [];
              for (let idx = 0; idx < listLength; idx++) {
                selectedServiceList.push(undefined);
              }
              if (
                data.language_code !== undefined &&
                data.language_code.length > 0
              ) {
                this.$i18n.locale = data.language_code;
                this.setLanguageCKEditor(data.language_code);
              }
              this.setSelectedService(selectedServiceList);
              this.setServiceList(data.service_list);
            } else {
              console.log("No data available");
              this.runShowMsg({ text: "No data available", status: "warning" });
            }
          } else {
            this.setIsAuthenticated(false);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },

  created() {
    if (this.$session.exists()) {
      this.setUsername(this.$session.get("username"));
      if (this.$session.has("theme_dark")) {
        this.$vuetify.theme.dark = this.$session.get("theme_dark");
      }
      //
      this.setIsAuthenticated(true);
      // Get a list of services and collections
      this.getServiceList();
    } else {
      this.setIsStart(false);
      this.setUsername("..");
      this.setSelectedService([]);
      this.setServiceList([]);
    }
  },
};
</script>

<style>
.panel-width-service-list__slider .v-slider {
  max-width: 195px;
}
.service-list__icon {
  max-width: 37px;
}
</style>
