methods: {
    login(user) {
      this.user = user
      },

    getVersion() {
      baseReload('/freeloader/version.json').then(
        (resp) => { this.version = resp.version; console.log("version ",this.version) }
      )},

      async startClock() {
        var offset = await baseReload(`${BASEREDIS}/get/OFFSET`)
        this.offset = offset == null ? 0 : parseInt(offset)
        var tzoffset = await baseReload(`${BASEREDIS}/get/TZOFFSET`)
        this.tzoffset = tzoffset == null ? 300 : parseInt(tzoffset) 
        var servtime = await baseReload(BASEURL+`/system/time`)
        this.servtime = parseInt(servtime.servtime)
        setInterval(this.updtTimer, 1000);
      },

    setOffset() { 
      baseFetch(`${BASEREDIS}/set/OFFSET/${this.offset}`,'POST',{})
      baseFetch(`${BASEREDIS}/set/TZOFFSET/${this.tzoffset}`,'POST',{})
    },

    updtTimer() {
      this.servtime += 1000
      var now = new Date(this.servtime).getTime() 
      var now2 =  now - (this.tzoffset*60000)  + (this.offset*60000)
      var ND = new Date(now2).toISOString();
      this.timer = ND.slice(0,19).replace('T',' ')
      },
  }
