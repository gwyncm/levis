addFloor: function () {
    baseFetch(URL1(),'POST', this.newfloor).then(
        response => { 
            this.newfloor.id = response.id 
            this.floors.push(this.newfloor)
        })
        .catch(result => console.log("addFloor",result))
}

delFloor(item) {
    baseFetch(URL2(item.id),'DELETE').then(
        () => this.floors=this.floors.filter(el => el.id !== item.id)
      ).catch(error => console.log("delFloor",error) )
  }

<tr>
<td><input type="text" class="input-sm" v-model="newfloor.name" /></td>
<td>{{ newfloor.id }}</td>
<td><input type="text" class="input-sm" v-model="newfloor.image" /></td>
<td><input type="text" class="input-sm" v-model="newfloor.desc" /></td>
<td><button class="btn btn-success btn-sm" @click="addFloor">Add</button></td>
</tr>

<button v-if="floor.zones.length == 0" class="btn btn-danger btn-sm" @click="delFloor(floor)">Del</button>