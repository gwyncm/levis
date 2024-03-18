<script>
  methods: {
    login(user) {
      this.user = user
      },

    getVersion() {
      baseReload('/freeloader/version.json').then(
        (resp) => { this.version = resp.version; console.log("version ",this.version) }
      )},

      async function startClock() {
      //var servtime = await baseReload(BASESCHED + `/server/time`);
      this.servtime = new Date()
      //this.servtime = parseInt(servtime.servtime);
      setInterval(this.updtTimer, 1000);
    },

    updtTimer() {
      this.servtime += 1000;
      var now = new Date(this.servtime).getTime();
      var ND = new Date(now).toLocaleString("en-CA", { hour12: false });
      this.timer = ND.slice(0, 20).replace("T", " ");
    },
  }
  </script>

